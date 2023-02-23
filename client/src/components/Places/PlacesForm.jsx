import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Perks from './Perks.jsx';
import InputLabel from './InputLabel.jsx';
import UploadPhoto from './UploadPhoto.jsx';
import Checking from './Checking.jsx';
import ProfileNav from '../Profile/ProfileNav.jsx';

const PlacesForm = () => {
    const [title, setTitle] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [photoLink, setPhotoLink] = React.useState('');
    const [addedPhotos, setAddedPhotos] = React.useState([]);
    const [description, setDescription] = React.useState('');
    const [perks, setPerks] = React.useState([]);
    const [extraInfo, setExtraInfo] = React.useState('');
    const [checkIn, setCheckIn] = React.useState('');
    const [checkOut, setCheckOut] = React.useState('');
    const [maxGuests, setMaxGuests] = React.useState(1);
    const [redirect, setRedirect] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'photoLink':
                setPhotoLink(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'extraInfo':
                setExtraInfo(value);
                break;
            case 'checkIn':
                setCheckIn(value);
                break;
            case 'checkOut':
                setCheckOut(value);
                break;
            case 'maxGuests':
                setMaxGuests(value);
                break;
            default:
                return;
        }
    };

    const addNewPlace = async (e) => {
        e.preventDefault();
        await axios.post('/places', {
            title,
            address,
            addedPhotos,
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests
        });
        setRedirect('/account/places');
    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>
            <ProfileNav />
            <form onSubmit={addNewPlace}>
                <InputLabel text={'Title'} info={'Title for your place. should be short and catchy as in advertisement'} />
                <input onChange={handleChange} value={title} name='title' type="text" placeholder='Title, for exampe: My lovely apartment' />
                <InputLabel text={'Address'} info={'Address to your place'} />
                <input onChange={handleChange} value={address} name='address' type="text" placeholder='Address' />
                <UploadPhoto
                    handleChange={handleChange}
                    addedPhotos={addedPhotos}
                    setAddedPhotos={setAddedPhotos}
                    setPhotoLink={setPhotoLink}
                    photoLink={photoLink}
                />
                <InputLabel text={'Description'} info={'Description of the place'} />
                <textarea onChange={handleChange} value={description} name='description' />
                <Perks
                    selected={perks}
                    onChange={setPerks}
                />
                <InputLabel text={'Extra info'} info={'House rules, etc'} />
                <textarea onChange={handleChange} value={extraInfo} name='extraInfo' />
                <Checking
                    handleChange={handleChange}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    maxGuests={maxGuests}
                />
                <button className='primary my-4'>Save</button>
            </form>
        </div>
    )
}

export default PlacesForm;

