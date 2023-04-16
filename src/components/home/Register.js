import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createUser } from '../../actions/usersActions';
import './regLog.css'

const Register = () => {

    const [user, setUser] = useState({
        username: '', email: '', pwd: '', pp: ''
    });

    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        try {
            const { username, email, pwd } = user;
            if (!username || !email || !pwd) {
                throw error;
            }
            dispatch(createUser(user));
            setUser({ username: '', email: '', pwd: '', pp: '' });
            navigate('/login');
            setError(false);
        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const { username, email, pwd, pp } = user;

    return (
        <div className="memo-home">
            <div className='register'>
                <div className='reg-form-wrapper'>
                    <span className='reg-logo'>Memo Pro</span>
                    <span className='reg-title'>Register</span> <hr />
                    {error && <div className='error'>
                        <p>Soryy! problem occurred</p>
                    </div>}
                    <form className='reg-form' onSubmit={handleSubmit}>
                        <input
                            className='reg-inputs'
                            name='username' type='text' placeholder='username'
                            value={username}
                            onChange={handleChange}
                        />
                        <input
                            className='reg-inputs' name='email' type='email' placeholder='email'
                            value={email}
                            onChange={handleChange}
                        />
                        <input
                            className='reg-inputs' name='pwd' type='password' placeholder='password'
                            value={pwd}
                            onChange={handleChange}
                        />

                        <div className='reg-inputs' >
                            <FileBase value={pp} type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, pp: base64 })} />
                        </div>

                        <button className='reg-button'>Sign up</button>
                    </form>
                    {error && <div className='error'>
                        <p>Soryy! problem occurred</p>
                    </div>}
                    <p>have account already? <Link to='/login'>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;