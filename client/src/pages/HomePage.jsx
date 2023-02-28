import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [places, setPlaces] = React.useState([]);

    React.useEffect(() => {
        axios.get('/places').then(({ data }) => setPlaces(data));
    }, []);

    return (
        <div className='mt-8 grid gap-x-8 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {places.length > 0 && (
                places.map((place, i) => (
                    <Link to={'/place/' + place._id} key={place._id + i}>
                        <div className='bg-gray-500 rounded-2xl flex mb-2'>
                            {place.photos?.[0] && (
                                <img className='rounded-2xl object-cover aspect-square' src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt={place.title} />
                            )}
                        </div>
                        <h3 className='font-bold '>{place.address}</h3>
                        <h2 className='text-sm truncate text-gray-500'>{place.title}</h2>
                        <div className='mt-2'><span className='font-bold'>${place.price}</span> per night</div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default HomePage