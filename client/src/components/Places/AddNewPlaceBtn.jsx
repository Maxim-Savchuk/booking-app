import React from 'react'
import { Link } from 'react-router-dom';

const AddNewPlaceBtn = () => {
    return (
        <div className='text-center'>
            <Link className='bg-primary text-white rounded-full py-2 px-6 inline-flex gap-2' to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add new place
            </Link>
        </div>
    )
}

export default AddNewPlaceBtn;