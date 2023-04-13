
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className=''>
                <h2>Memories Project</h2>
            </div>

            <div className='links'>
                <Link className='link' to='/post'> Post </Link>
                <Link className='link' to='/view-1'> View-1 </Link>
                <Link className='link' to='/view-2'> View-2 </Link>
            </div>

            {/* <div className='slider'>
                <div className='slider-ball'></div>
            </div> */}
        </nav>
    );
};

export default Navbar;