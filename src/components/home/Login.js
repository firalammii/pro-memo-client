import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { usersActionTypes } from "../../actions/actionTypes";

import './regLog.css'

const Login = () => {

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector(state => state.usersReducer.users);

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target[0].value.trim();
        const pwd = e.target[1].value.trim();

        const user = await users.filter(user => (user.email === email && user.pwd === pwd))[0];

        if (user) {
            dispatch({ type: usersActionTypes.SELECT_USER, payload: user });
            navigate('/personal-posts');
            setError(false);
        } else setError(true);
    };

    return (
        <div className="memo-home">
            <div className='login'>
                <div className='login-form-wrapper'>
                    <span className='login-logo'>Memo App</span>
                    <span className='login-title'>Login</span> <hr />
                    {error && <div className='error'> <p>Soryy! cannot find you</p> </div>}
                    <form className='login-form' onSubmit={handleLogin} >
                        <input type='email' placeholder='email' className='login-inputs' />
                        <input type='password' placeholder='password' className='login-inputs' />
                        <button className='login-button'>Log in</button>
                    </form>
                    {error && <div className='error'>
                        <p>It seems you don't have an account</p>
                    </div>}
                    <p>have no account ? <Link to='/register'>Create one</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;