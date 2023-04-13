import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Context } from '../context-provider/ContextPovider';
import Post from './Post';
import { fetchPosts } from '../../actions/postActions';
import { CircularProgress } from '@mui/material';

const PostWrapper = () => {
    const [selected, setSelected] = useState(null);

    const posts = useSelector((state) => state.postsReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [selected, dispatch]);

    function updateSelected (post) {
        setSelected(post);
    }
    // function clearSelected () {
    //     setSelected(null);
    // }

    return (
        <div className='post-wrapper'>
            {
                !posts.length ?
                    <>
                        <h2>Nothing to display; looking for posts</h2>
                        <CircularProgress />
                    </> :
                    posts.map((post) => <Post key={post._id} post={post} updateSelected={updateSelected} />)
            }

        </div>
    );
};

export default PostWrapper;