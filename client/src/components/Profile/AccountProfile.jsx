import React from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext.jsx';

const AccountProfile = () => {
    const [redirect, setRedirect] = React.useState(null);
    const { user, ready, setUser } = React.useContext(UserContext);

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className='text-center max-w-lg mx-auto'>
            Logged in as {user.name} ({user.email})
            <button onClick={logout} className='primary max-w-sm mt-4'>Logout</button>
        </div>
    )
}

export default AccountProfile