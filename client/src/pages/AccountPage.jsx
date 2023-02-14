import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../UserContext';
import { Bookings, Places } from '../components';

const AccountPage = () => {
    const [redirect, setRedirect] = React.useState(null);
    const { user, ready, setUser } = React.useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    };

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

    function linkClasses(type = null) {
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes += ' text-white bg-primary rounded-full'
        }
        return classes;
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <nav className='w-full flex justify-center mt-8 gap-2 mb-8 '>
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My accommodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className='text-center max-w-lg mx-auto'>
                    Logged in as {user.name} ({user.email})
                    <button onClick={logout} className='primary max-w-sm mt-4'>Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <Places />
            )}
            {subpage === 'bookings' && (
                <Bookings />
            )}
        </div>
    )
}

export default AccountPage;