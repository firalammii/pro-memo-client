import React from 'react';
import moment from 'moment';

import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
// import menu2l from '../../icons/menu2l.png';

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../actions/postActions';

const Post = ({ post, updateSelected }) => {

    const dispatch = useDispatch();
    const { title, creator, body, pic, date, tags, likes } = post;

    return (
        <div className='post'>
            <div className='menu-n-creator'>
                <div className='creator-n-date'>
                    <p className='creator'>By {creator}</p>
                    <p className='date'>{moment(date).fromNow()} </p>
                </div>
                <div class="dropdown">
                    <MenuIcon className='menu-icon' titleAccess='options' onClick={() => updateSelected(post)} />
                    <div class="dropdown-content">
                        <button
                            className='update-btn'
                            titleAccess='edit this post'
                            onClick={() => updateSelected(post)}
                        >
                            <DriveFileRenameOutlineTwoToneIcon />
                        </button>

                        <button
                            className='delete-btn'
                            titleAccess='delete this post'
                            onClick={() => dispatch(deletePost(post._id))}
                        >
                            <DeleteForeverRoundedIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className='image-con'>
                <img className='pic' src={pic} alt='pic from db' />
            </div>
            <div className='post-contents'>
                <h3 className='title'>{title}</h3> <br />
                <p className='body'>{body}</p>

                <p className='tags'>{tags.map((tag, i) => <span key={i}>{`#${tag} `}</span>)} </p>
                <div className='likes-n-like-btn' onClick={() => dispatch(likePost(post))}>
                    <p className='likes'>{(likes / 1000).toFixed(3)}k likes</p>
                    <button className='like-btn' ><FavoriteBorderTwoToneIcon /> LIKE</button>
                </div>

                {/* <div className='update-n-delete-btns-con'>
                    <button className='update-n-delete-btns ' onClick={() => updateSelected(post)}>UPDATE</button>
                    <button className='update-n-delete-btns ' onClick={() => dispatch(deletePost(post._id))}><DeleteForeverRoundedIcon /></button>
                </div> */}
            </div>
        </div>
    );
};




export default Post;
