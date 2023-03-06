import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { PlaceGallery, PlaceWidget, PlaceMapLink } from '../components';

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = React.useState(null);

    React.useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(res => {
            setPlace(res.data)
        });
    }, [id])

    if (!place) return 'Loading...';

    return (
        <div className='mt-4 bg-gray-100 -mx-8 px-8 pt-8'>
            <h1 className='text-3xl'>{place.title}</h1>
            <PlaceMapLink>{place.address}</PlaceMapLink>
            <PlaceGallery place={place} />
            <div className='grid gap-4 grid-cols-1 md:grid-cols-[2fr+1fr] my-8 '>
                <div className='flex flex-col'>
                    <div className='mb-2'>
                        <h2 className='font-bold text-2xl mb-2'>Decsription</h2>
                        {place.description}
                    </div>
                    <span> Check in: {place.checkIn}:00</span>
                    <span> Check out: {place.checkOut}:00</span>
                    <span> Max number of guests: {place.maxGuests}</span>
                </div>
                <PlaceWidget place={place} />
            </div>
            <div className='bg-white -mx-8 px-8 py-4 border-t border-b'>
                <div className='text-sm text-gray-800 leading-5'>
                    <h2 className='font-bold text-black text-2xl mb-2'>Extra information</h2>
                    {place.extraInfo}
                </div>
            </div>
        </div>
    )
}

export default PlacePage;