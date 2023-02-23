import axios from 'axios';
import React from 'react'

import { AddNewPlaceBtn, PlacesList, ProfileNav } from '../components'

const PlacesPage = () => {
    const [places, setPlaces] = React.useState([]);

    React.useEffect(() => {
        axios.get('/places').then(({ data }) => {
            setPlaces(data);
        })
    }, []);

    return (
        <div>
            <ProfileNav />
            <AddNewPlaceBtn />
            <PlacesList places={places} />
        </div>
    )
}

export default PlacesPage;