import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

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
        <div>Single BookingPage: {id}</div>
    )
}

export default BookingPage