import React from 'react';
import axios from 'axios';
import Perks from './Perks.jsx';

const PlacesForm = () => {
    const [title, setTitle] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [addedPhotos, setAddedPhotos] = React.useState([]);
    const [photoLink, setPhotoLink] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [perks, setPerks] = React.useState([]);
    const [extraInfo, setExtraInfo] = React.useState('');
    const [checkIn, setCheckIn] = React.useState('');
    const [checkOut, setCheckOut] = React.useState('');
    const [maxGuests, setMaxGuests] = React.useState(1);

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

    const addPhotoByLink = async (e) => {
        e.preventDefault();

        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
        setAddedPhotos(prev => {
            return [...prev, filename]
        });
        setPhotoLink('');
    }

    const uploadPhoto = (e) => {
        const files = e.target.files;
        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }

        axios.post('/upload', data, {
            headers: { "Content-type": 'multipart/form-data' }
        }).then(res => {
            const { data: filenames } = res;
            setAddedPhotos(prev => {
                return [...prev, ...filenames]
            });
        });
    }

    return (
        <div>
            <form >
                <InputLabel text={'Title'} info={'Title for your place. should be short and catchy as in advertisement'} />
                <input onChange={handleChange} value={title} name='title' type="text" placeholder='Title, for exampe: My lovely apartment' />
                <InputLabel text={'Address'} info={'Address to your place'} />
                <input onChange={handleChange} value={address} name='address' type="text" placeholder='Address' />
                <InputLabel text={'Photos'} info={'More = better'} />
                <div className='flex gap-2'>
                    <input onChange={handleChange} value={photoLink} name='photoLink' type="text" placeholder='Add using a link ....jpg' />
                    <button onClick={addPhotoByLink} className='bg-gray-200 px-4 rounded-2xl'>
                        Add&nbsp;photo
                    </button>
                </div>
                <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                    {addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                        <div className='h-32 flex' key={link + index}>
                            <img className='rounded-2xl w-full object-cover' src={'http://localhost:4000/uploads/' + link} alt={link} />
                        </div>
                    ))}
                    <label className='h-32 cursor-pointer flex justify-center items-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 hover:text-black hover:border-black'>
                        <input type="file" multiple className='hidden' onChange={uploadPhoto} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        Upload
                    </label>
                </div>
                <InputLabel text={'Description'} info={'Description of the place'} />
                <textarea onChange={handleChange} value={description} name='description' />
                <InputLabel text={'Perks'} info={'Select all the perks of your place'} />
                <Perks selected={perks} onChange={setPerks} />
                <InputLabel text={'Extra info'} info={'House rules, etc'} />
                <textarea onChange={handleChange} value={extraInfo} name='extraInfo' />
                <InputLabel text={'Check in&out times, max guests'} info={'Add check in and out times, remember to have some time windowfor cleaning the room between guests'} />
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
                <button className='primary my-4'>Save</button>
            </form>
        </div>
    )
}

const InputLabel = ({ text, info }) => {
    return (
        <>
            <h2 className='text-2xl mt-4'>{text}</h2>
            <p className='text-gray-500 text-sm'>{info}</p>
        </>
    )
}

export default PlacesForm