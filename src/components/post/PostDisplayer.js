
import { useSelector } from 'react-redux';

import Post from './Post';
import { CircularProgress } from '@mui/material';

const PostDisplayer = () => {

    const posts = useSelector((state) => state.postsReducer.posts);
    console.log('posts:', posts);

    return (
        <div className='post-displayer'>
            {
                !posts.length ?
                    <>
                        looking for posts
                        <CircularProgress />
                    </> :
                    posts.map((post) => <Post key={post._id} post={post} />)
            }

        </div>
    );
};

export default PostDisplayer;