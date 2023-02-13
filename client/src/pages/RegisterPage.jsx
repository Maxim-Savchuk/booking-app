import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
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

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/register', {
                name,
                email,
                password
            })

            alert('Registration successful. Now you can login!')
        } catch (e) {
            alert('Registration failed. Please try again!')
        }
    }

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center'>Register</h1>
                <form className='max-w-md mx-auto mt-4' onSubmit={registerUser}>
                    <input type="text" placeholder='John Doe' name='name' value={name} onChange={handleChange} />
                    <input type="email" placeholder='your@email.com' name='email' value={email} onChange={handleChange} />
                    <input type="password" placeholder='password' name='password' value={password} onChange={handleChange} />
                    <button className='primary'>Register</button>
                    <div className='text-center py-2 text-gray-500'>
                        Already a member? <Link className='underline text-black hover:text-primary' to={'/login'}>Login now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage