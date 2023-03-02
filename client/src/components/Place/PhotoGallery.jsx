import React from 'react';

const PhotoGallery = ({ place, setShowAllPhotos }) => {
    return (
        <div className='absolute bg-white text-white inset-0 min-h-screen'>
            <div className='bg-black/90 p-8 grid gap-4'>
                <div>
                    <h2 className='text-3xl  mr-49'>Photos of {place.title}</h2>
                    <button className='fixed text-gray-800 right-8 hover:text-black top-8 shadow bg-white flex gap-2 py-2 px-4 rounded-2xl' type='button' onClick={() => setShowAllPhotos(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Close photos
                    </button>
                </div>
                {place?.photos?.length > 0 && (
                    place.photos.map((photo, i) => (
                        <div key={photo + i}>
                            <img className='w-full' src={'http://localhost:4000/uploads/' + photo} alt={place.title} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default PhotoGallery;