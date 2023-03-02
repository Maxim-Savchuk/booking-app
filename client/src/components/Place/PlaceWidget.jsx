import React from 'react'

const PlaceWidget = ({ place }) => {
    return (
        <div className='bg-white shadow rounded-2xl p-4'>
            <h2 className='text-2xl text-center'>Price: ${place.price} / per night</h2>
            <div className="border rounded-2xl mt-4">
                <div className="flex ">
                    <div className='py-3 px-4'>
                        <label>Check in: </label>
                        <input type="date" />
                    </div>
                    <div className='py-3 p-4 border-l'>
                        <label>Check out: </label>
                        <input type="date" />
                    </div>
                </div>
                <div className='py-3 p-4 border-t'>
                    <label>Number of quests :</label>
                    <input type="number" value={1} />
                </div>
            </div>
            <button type='button' className='primary'>Book this place</button>
        </div>
    )
}

export default PlaceWidget