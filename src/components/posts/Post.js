import React from 'react';
import moment from 'moment';

import MenuIcon from '@mui/icons-material/Menu';


import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../actions/postActions';

const Post = ({ post, updateSelected }) => {

    const dispatch = useDispatch();
    const { title, creator, body, pic, date, tags, likes } = post;

    return (
        <div className='post'>
            <div className='image'>
                <img className='pic' src={pic} alt='pic from db' />
                <div className='absolute-left'>
                    <p className='creator'>{creator}</p>
                    <p className='date'>{moment(date).fromNow()} </p>
                </div>
                <MenuIcon className='absolute-right' onClick={() => updateSelected(post)} />
            </div>
            <div className='post-contents'>
                <h3 className='title'>{title}</h3> <br />
                <p className='body'>{body}</p>
                <br />
                <p className='tags'>{tags.map((tag, i) => <span key={i}>{`#${tag}`}</span>)}</p>
                <div className='date-n-likes-con'>
                    <div className='likes' onClick={() => dispatch(likePost(post))}>
                        <button className='like-btn' >👍</button>{likes < 100 ? likes : `${(likes / 1000).toFixed(2)}k`}
                    </div>
                </div>
                <div className='update-n-delete-btns-con'>
                    <button className='update-n-delete-btns ' onClick={() => updateSelected(post)}>UPDATE</button>
                    <button className='update-n-delete-btns ' onClick={() => dispatch(deletePost(post._id))}><DeleteForeverRoundedIcon /></button>
                </div>
            </div>

        </div>

    );
}




export default Post;
