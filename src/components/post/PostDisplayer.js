
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import Post from './Post';
import { Context } from '../../context/ContextPovider';

const PostDisplayer = () => {

    const { showPublic } = useContext(Context)
    const posts = useSelector((state) => state.postsReducer.posts);
    const memoUser = useSelector((state) => state.usersReducer.memoUser);

    const publicPosts = posts?.filter(post => post.publicPost)
    const userPosts = posts?.filter(post => post.creator._id === memoUser?._id);
    const posts2run = showPublic ? publicPosts : userPosts;

    return (
        <div className='post-displayer'>
            {
                !posts2run.length ?
                    <>
                        looking for posts
                        <CircularProgress />
                    </> :
                    posts2run.map((post) => <Post key={post._id} post={post} />)
            }

        </div>
    );
};

export default PostDisplayer;