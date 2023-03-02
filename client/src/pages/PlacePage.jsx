import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { PhotoGallery, PlaceWidget } from '../components';

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = React.useState(null);
    const [showAllPhotos, setShowAllPhotos] = React.useState(false);

    React.useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(res => {
            setPlace(res.data)
        });
    }, [id])

    if (!place) return 'Loading...';

    if (showAllPhotos) {
        return <PhotoGallery place={place} setShowAllPhotos={setShowAllPhotos} />
    }

    return (
        <div className='mt-4 bg-gray-100 -mx-8 px-8 pt-8'>
            <h1 className='text-3xl'>{place.title}</h1>
            <a className='flex gap-1 my-3 font-bold underline ' target='_blank' href={'https://maps.google.com/?q=' + place.address}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className='hover:text-gray-600'>{place.address}</span>
            </a>
            <div className='relative'>
                <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden'>
                    <div>
                        {place.photos?.[0] && (
                            <img onClick={() => setShowAllPhotos(true)} className='w-full aspect-square cursor-pointer object-cover' src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt={place.title} />
                        )}
                    </div>
                    <div className='grid'>
                        {place.photos?.[1] && (
                            <img onClick={() => setShowAllPhotos(true)} className='w-full aspect-square cursor-pointer object-cover' src={'http://localhost:4000/uploads/' + place.photos?.[1]} alt={place.title} />
                        )}
                        <div className='overflow-hidden'>
                            {place.photos?.[2] && (
                                <img onClick={() => setShowAllPhotos(true)} className='w-full aspect-square cursor-pointer object-cover relative top-2' src={'http://localhost:4000/uploads/' + place.photos?.[2]} alt={place.title} />
                            )}
                        </div>
                    </div>
                </div>
                <button type='button' onClick={() => setShowAllPhotos(true)} className='flex gap-1 absolute bottom-2 right-2 py-2 px-4 rounded-2xl bg-white text-gray-800 border border-black shadow-md shadow-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Show more photos
                </button>
            </div>
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
            <div className='bg-white -mx-8 px-8 py-4 border-t'>
                <div className='text-sm text-gray-800 leading-5'>
                    <h2 className='font-bold text-black text-2xl mb-2'>Extra information</h2>
                    {place.extraInfo}
                </div>
            </div>
        </div>
    )
}

export default PlacePage;