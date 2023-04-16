
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';


import './navbar.css';
import { usersActionTypes } from '../../actions/actionTypes';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const memoUser = useSelector(state => state.usersReducer.memoUser);

    function handleLogout () {
        dispatch({ type: usersActionTypes.LOGOUT });
        navigate('/login');
    }
    return (
        <nav className='navbar'>
            <div className=''>
                <h3>Memo Pro</h3>
            </div>

            <div className='links'>

                {/* <Link className='link' to='/home' > Home </Link> */}
                <Link className={`link ${memoUser && 'hide'}`} to='/register' > Signup </Link>
                <Link className='link' to='/post-form' > Post </Link>
                <Link className='link' to='/view-1' > Posts </Link>
                <Link className='link' to='/view-2' > Posts </Link>
                <button className={`link logout-btn ${memoUser && 'display'}`} onClick={handleLogout} >Logout</button>
                <div className='navbar-menu-icon' ><MenuIcon /></div>
            </div>

        </nav>
    );
};

export default Navbar;