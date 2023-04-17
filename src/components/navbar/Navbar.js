
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import MenuIcon from '@mui/icons-material/Menu';

import { usersActionTypes } from '../../actions/actionTypes';
import { Context } from '../../context/ContextPovider';
import './navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showPrivatePosts, showPublicPosts } = useContext(Context);

    const memoUser = useSelector(state => state.usersReducer.memoUser);

    function handleLogout () {
        dispatch({ type: usersActionTypes.LOGOUT });
        navigate('/login');
    }
    return (
        <nav className='navbar'>
            <div className=''> <h3>Memo Pro</h3> </div>
            <div className='links'>
                <Link className={`link ${memoUser && 'hide'}`} to='/register' > Signup </Link>
                <Link className='link' to='/post-form' > Memo </Link>
                <Link className='link' to='/public-posts' onClick={showPublicPosts}> Posts </Link>
                <Link className='link' to='/personal-posts' onClick={showPrivatePosts}> Mines </Link>
                <button className={`link logout-btn ${memoUser && 'display'}`} onClick={handleLogout} >Logout</button>
                {/* <div className='navbar-menu-icon' > */}
                <div className='username-n-pp'>
                    <img className='pp' src={memoUser?.pp} alt='' style={{ height: '40px', borderRadius: '2px' }} />
                </div>
                {/* </div> */}
            </div>

        </nav>
    );
};

export default Navbar;