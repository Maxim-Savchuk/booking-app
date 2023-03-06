import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { differenceInCalendarDays, format } from 'date-fns';

import { PlaceMapLink, PlaceGallery, BookingsDates } from '../components';

const BookingPage = () => {
    const { id } = useParams();
    const [booking, setBooking] = React.useState(null)

    React.useEffect(() => {
        if (id) {
            axios.get('/bookings').then(res => {
                const foundBooking = res.data.find(({ _id }) => _id === id);
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            })
        }
    }, [])

    if (!booking) {
        return 'Loading';
    }

    return (
        <div className='py-8'>
            <h1 className='text-3xl'>{booking.place.title}</h1>
            <PlaceMapLink>{booking.place.address}</PlaceMapLink>
            <div className='bg-gray-200 p-6 my-6 rounded-2xl flex justify-between items-center'>
                <div className='grow'>
                    <h2 className='text-2xl mb-4'>Your booking information</h2>
                    <BookingsDates booking={booking} />
                </div>
                <div className='bg-primary p-6 text-white rounded-2xl'>
                    <div>Total price</div>
                    <div className='text-3xl'>${booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div >
    )
}

export default BookingPage