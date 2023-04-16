
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';
import './regLog.css';
const Home = () => {
    const memoUser = useSelector(state => state.usersReducer.memoUser);

    return (
        <div className="memo-home">
            {/* <Register /> */}
        </div>
    );
};

export default Home;