import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../actions/postActions';

const Post = ({ post, updateSelected }) => {

    const dispatch = useDispatch();
    const { title, creator, body, pic, date, tags, likes } = post;

    return (
        <div className='post'>
            <img className='pic' src={pic} alt='pic from db' />
            <div className='post-contents'>
                <h4 className='title'>{title}</h4>
                <p className='body'>{body}</p>
                <p className='creator'>post by: <span id='creator'>{creator}</span></p>
                <p className='tags'>{tags.map((tag, i) => <span key={i}>{`#${tag}`}</span>)}</p>
                <div className='date-n-likes-con'>
                    <div className='likes' onClick={() => dispatch(likePost(post))}>
                        <button className='like-btn' >👍</button>{likes < 100 ? likes : `${(likes / 1000).toFixed(2)}k`}
                    </div>
                    <p className='date'>{moment(date).fromNow()} </p>
                </div>
                <div className='update-n-delete-btns-con'>
                    <button className='update-n-delete-btns ' onClick={() => updateSelected(post)}>UPDATE</button>
                    <button className='update-n-delete-btns ' onClick={() => dispatch(deletePost(post._id))}>DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default Post;