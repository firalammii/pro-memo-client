
import { useSelector } from 'react-redux';

import Post from './Post';
import { CircularProgress } from '@mui/material';

const PostWrapper = () => {

    const posts = useSelector((state) => state.postsReducer.posts);

    return (
        <div className='post-wrapper'>
            {
                !posts.length ?
                    <>
                        <h2>Nothing to display; looking for posts</h2>
                        <CircularProgress />
                    </> :
                    posts.map((post) => <Post key={post._id} post={post} />)
            }

        </div>
    );
};

export default PostWrapper;