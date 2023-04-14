
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className=''>
                <h3>Memo Pro</h3>
            </div>

            <div className='links'>
                <Link className='link' to='/home' > Home </Link>
                <Link className='link' to='/post' > Post </Link>
                <Link className='link' to='/view-1' > View-1 </Link>
                <Link className='link' to='/view-2' > View-2 </Link>
                <button className='link logout-btn' >Logout</button>
                <div className='navbar-menu-icon' ><MenuIcon /></div>
            </div>

        </nav>
    );
};

export default Navbar;