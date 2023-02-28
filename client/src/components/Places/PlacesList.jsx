import React from 'react'
import { Link } from 'react-router-dom'

const PlacesList = ({ places }) => {
    return (
        <div className='flex flex-col gap-y-4 mt-4'>
            {places.length > 0 && places.map((place, i) => (
                <Link to={`/account/places/${place._id}`} className='flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl' key={place._id + i}>
                    <div className='flex rounded-2xl w-32 h-32 bg-gray-300 grow shrink-0'>
                        {place.photos.length > 0 && (
                            <img className='w-full object-cover rounded-2xl' src={'http://localhost:4000/uploads/' + place.photos[0]} alt={place.title} />
                        )}
                    </div>
                    <div className='grow-0 shrink'>
                        <h2 className='text-xl'>{place.title}</h2>
                        <p className='text-sm mt-2'>{place.description}</p>
                    </div>
                </Link>
            ))}
        </div >
    )
}

export default PlacesList