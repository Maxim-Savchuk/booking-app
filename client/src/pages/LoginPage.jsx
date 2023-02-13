import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../UserContext';

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);
    const { setUser } = React.useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/login', {
                email,
                password
            })
            setUser(data)
            alert('Login successful !')
            setRedirect(true)
        } catch (error) {
            alert('Login failed !')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center'>Login</h1>
                <form className='max-w-md mx-auto mt-4' onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder='your@email.com' name='email' value={email} onChange={handleChange} />
                    <input type="password" placeholder='password' name='password' value={password} onChange={handleChange} />
                    <button className='primary' >Login</button>
                    <div className='text-center py-2 text-gray-500'>
                        Don't have an account yet? <Link className='underline text-black hover:text-primary' to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage