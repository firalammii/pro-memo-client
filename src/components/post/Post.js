import React, { useContext, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { deletePost, likePost } from '../../actions/postActions';
import { Context } from '../../context/ContextPovider';
import { postsActionTypes } from '../../actions/actionTypes';
import { useEffect } from 'react';

const Post = ({ post }) => {

    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { editPost } = useContext(Context);
    const { title, creator, body, postPic, date, tags, likes, } = post;

    const memoUser = useSelector(state => state.usersReducer.memoUser);
    function editNnevigate (post) {
        if (memoUser._id === post.creator._id) {
            setError(false);
            dispatch({ type: postsActionTypes.SELECT_POST, payload: post });
            editPost(post);
            navigate('/post-form');
        } else setError(true)
    }
    function deletePostAccess (post) {
        if (memoUser._id === post.creator._id) {
            setError(false);
            dispatch(deletePost(post._id));
        } else setError(true);
    }
    useEffect(() => {
        if (error) {
            setTimeout(() => setError(false), 1000);
        }
    }, [error])

    return (
        <div className='post'>
            <div className='menu-n-creator'>
                <div className='creator-n-date'>
                    <p className='creator'>By <img src={creator?.pp} alt='' style={{ width: '20px', borderRadius: '50%' }} />{creator?.username}</p>
                    <p className='date'>{moment(date).fromNow()} </p>
                </div>
                {error && <p className='error'>not your post</p>}
                <div className="dropdown">
                    <MenuIcon className='menu-icon' titleAccess='options' />
                    <div className="dropdown-content">
                        <button
                            className='update-btn'
                            title='edit this post'
                            onClick={() => editNnevigate(post)}
                        >
                            <DriveFileRenameOutlineTwoToneIcon />
                        </button>

                        <button
                            className='delete-btn'
                            title='delete this post'
                            onDoubleClick={() => deletePostAccess(post)}
                        >
                            <DeleteForeverRoundedIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className='image-con'>
                <img className='pic' src={postPic} alt='pic from db' />
            </div>
            <div className='post-contents'>
                <h3 className='title'>{title}</h3> <br />
                <p className='body'>{body}</p>

                <p className='tags'>{tags.map((tag, i) => <span key={i}>{`#${tag} `}</span>)} </p>
                <div className='likes-n-like-btn' >
                    <p className='likes'>{(likes / 1000).toFixed(3)}K LIKES</p>
                    <button className='like-btn' onClick={() => dispatch(likePost(post))}><FavoriteBorderTwoToneIcon /> LIKE</button>
                </div>
            </div>
        </div>
    );
};




export default Post;
