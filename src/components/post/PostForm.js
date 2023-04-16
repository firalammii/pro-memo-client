import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/postActions';
import { Context } from '../../context/ContextPovider';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {

    const [post, setPost] = useState({
        title: '', body: '', tags: '', postPic: '', publicPost: false
    });
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState('');

    const { title, body, tags, postPic, publicPost } = post;
    const { selected, editPost } = useContext(Context);

    useEffect(() => {
        if (selected) {
            setPost(selected);
        }
    }, [selected]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const memoUser = useSelector(state => state.usersReducer.memoUser);

    function handleChange (e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    async function handleSubmit (e) {
        e.preventDefault();
        if (selected) {
            if (checked) {
                const { _id: id } = post;
                const updatedPost = { ...post, tags: tags.toString().split(',').map(tag => tag.trim()), };
                dispatch(updatePost(id, updatedPost));
                finished();
            } else setError('confirm the action');
        } else {
            const postData = {
                users: memoUser._id, title, body, postPic, publicPost,
                tags: tags.toString().split(',').map(tag => tag.trim()),
            };
            dispatch(createPost(memoUser._id, postData));
            finished();
        }
    }
    function finished () {
        navigate('/view-1');
        clear();
    }
    function clear () {
        editPost('clear');
        setPost({ users: '', title: '', body: '', tags: '', postPic: '', privecy: 'private' });
    }

    return (
        <div className='post-form-component'>
            <div className='post-form-wrapper'>
                <h3 className='post-form-title'>Create Memory</h3>
                <div className='updation-confirmation'>
                    <input id='updation-confirmation' type='checkbox' checked={publicPost} onChange={() => setPost({ ...post, publicPost: !post.publicPost })} />
                    <label htmlFor='updation-confirmation'>make public post?</label>
                </div>
                <form onSubmit={handleSubmit} className='post-form'>
                    <input className='post-inputs' type='text' name='creator' defaultValue={memoUser.username} disabled title='cannot be modified' />
                    <input className='post-inputs' type='text' name='title' placeholder='Title' value={post.title} onChange={(e) => handleChange(e)} required />
                    <textarea className='post-inputs' type='text' name='body' placeholder='Body' value={post.body} onChange={(e) => handleChange(e)} required rows={4} />
                    <input className='post-inputs' type='text' name='tags' placeholder='Tags' value={post.tags} onChange={(e) => handleChange(e)} required />
                    <div className='post-inputs'>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, postPic: base64 })} />
                    </div>
                    {selected && <div className='updation-confirmation'>
                        <input id='updation-confirmation' type='checkbox' checked={checked} onChange={() => setChecked(prev => !prev)} />
                        <label htmlFor='updation-confirmation'>Sure to update this post?</label>
                    </div>}
                    {error && <p className='error'>{error}</p>}
                    <div className='post-n-clear-btn-con'>
                        <button className='post-n-clear-btn'>{selected ? 'UPDATE' : 'POST'}</button>
                        <button className='post-n-clear-btn' type='button' onClick={clear}>CLEAR FIELDS</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
/*

---------------
La'ali | 15 | 0979666541 done
Fatuma | 15 | 0921864342 done
Umeyma | 10 | done
Mari   | 10 | done
rabi   | 15 | done
musxafa| 10 | done
shakir | 10 | done
bilisa |  5 | done
nadhi  | 10 | done 
----------------
0979666541 farhan
1000330450422 Aliyyi Nure 
*/