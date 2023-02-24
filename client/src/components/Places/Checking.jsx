import React from 'react';

import InputLabel from './InputLabel.jsx';

const Checking = ({ handleChange, checkIn, checkOut, maxGuests, price }) => {
    return (
        <>
            <InputLabel text={'Check in&out times, max guests'} info={'Add check in and out times, remember to have some time windowfor cleaning the room between guests'} />
            <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-4'>
                <div>
                    <h3 className='mt-2 -mb-1'>Check in time</h3>
                    <input onChange={handleChange} value={checkIn} name='checkIn' type="text" placeholder='14' />
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Check out time</h3>
                    <input onChange={handleChange} value={checkOut} name='checkOut' type="text" placeholder='10' />
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Max number of guests</h3>
                    <input onChange={handleChange} value={maxGuests} name='maxGuests' type="number" />
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Price per night</h3>
                    <input onChange={handleChange} value={price} name='price' type="number" />
                </div>
            </div>
        </>
    )
}

export default Checking