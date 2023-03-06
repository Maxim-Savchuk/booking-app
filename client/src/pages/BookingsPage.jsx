import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BookingsDates, ProfileNav } from '../components';

const BookingsPage = () => {
    const [bookings, setBookings] = React.useState([])

    React.useEffect(() => {
        axios.get('/bookings').then(res => {
            setBookings(res.data);
        })
    }, [])

    return (
        <div>
            <ProfileNav />
            <div className='flex flex-col gap-4' >
                {bookings?.length > 0 && bookings.map(booking => (
                    <Link key={booking._id} to={`/account/bookings/${booking._id}`} className='flex gap-4 bg-white rounded-2xl overflow-hidden'>
                        <div className='flex w-48 bg-gray-300 '>
                            {booking.place.photos.length > 0 && (
                                <img className='w-full object-cover \' src={'http://localhost:4000/uploads/' + booking.place.photos[0]} alt={booking.place.title} />
                            )}
                        </div>
                        <div className='py-3 pr-3  grow'>
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <h2 className='text-xl mb-2'>{booking.place.title}</h2>
                            </div>
                            <BookingsDates booking={booking} />
                            <div className="flex gap-2 items-center text-xl mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 -mb-1">
                                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                                </svg>
                                Total price: ${booking.price}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default BookingsPage;