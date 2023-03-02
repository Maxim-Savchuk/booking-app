import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { differenceInCalendarDays } from 'date-fns';

const PlaceWidget = ({ place }) => {
    const [checkIn, setCheckIn] = React.useState('');
    const [checkOut, setCheckOut] = React.useState('');
    const [numberOfGuests, setNumberOfGuests] = React.useState(1);
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [redirect, setRedirect] = React.useState('');

    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'checkIn':
                setCheckIn(value);
                break;
            case 'checkOut':
                setCheckOut(value);
                break;
            case 'numberOfGuests':
                setNumberOfGuests(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        }
    };

    const bookThisPlace = async () => {
        const res = await axios.post('/bookings', {
            place: place._id,
            checkIn,
            checkOut,
            numberOfGuests,
            name,
            phone,
            price: numberOfNights * place.price
        });
        const bookingId = res.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className='bg-white shadow rounded-2xl p-4'>
            <h2 className='text-2xl text-center'>Price: ${place.price} / per night</h2>
            <div className="border rounded-2xl mt-4">
                <div className="flex ">
                    <div className='py-3 px-4'>
                        <label>Check in: </label>
                        <input type="date" name='checkIn' onChange={handleChange} value={checkIn} />
                    </div>
                    <div className='py-3 p-4 border-l'>
                        <label>Check out: </label>
                        <input type="date" name='checkOut' onChange={handleChange} value={checkOut} />
                    </div>
                </div>
                <div className='py-3 p-4 border-t'>
                    <label>Number of guests: </label>
                    <input type="number" name='numberOfGuests' onChange={handleChange} value={numberOfGuests} />
                </div>
                {numberOfNights > 0 && (
                    <>
                        <div className='py-3 p-4 border-t'>
                            <label>Your full name: </label>
                            <input type="text" placeholder='John Doe' onChange={handleChange} name='name' value={name} />
                        </div>
                        <div className='py-3 p-4 border-t'>
                            <label>Your phone number: </label>
                            <input type="tel" placeholder='+38 000 000..' onChange={handleChange} name='phone' value={phone} />
                        </div></>
                )}
            </div>
            <button onClick={bookThisPlace} type='button' className='primary mt-4'>
                Book this place
                {numberOfNights > 0 && (
                    <span> ${numberOfNights * place.price}</span>
                )}
            </button>
        </div>
    )
}

export default PlaceWidget;