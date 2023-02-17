import React from 'react'
import { useParams } from 'react-router-dom'

import AddNewPlaceBtn from './AddNewPlaceBtn.jsx';
import PlacesForm from './PlacesForm.jsx';

const Places = () => {
    const { action } = useParams();

    return (
        <div>
            {action !== 'new' && (
                <AddNewPlaceBtn />
            )}
            {action === 'new' && (
                <PlacesForm />
            )}
        </div>
    )
}

export default Places;