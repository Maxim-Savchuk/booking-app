import React from 'react'

const Checking = ({ handleChange, checkIn, checkOut, maxGuests }) => {
    return (
        <div className='grid gap-2 sm:grid-cols-3'>
            <div>
                <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input onChange={handleChange} value={checkIn} name='checkIn' type="text" placeholder='14:00' />
            </div>
            <div>
                <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input onChange={handleChange} value={checkOut} name='checkOut' type="text" placeholder='10:00' />
            </div>
            <div>
                <h3 className='mt-2 -mb-1'>Max number of guests</h3>
                <input onChange={handleChange} value={maxGuests} name='maxGuests' type="number" />
            </div>
        </div>
    )
}

export default Checking