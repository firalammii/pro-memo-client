import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/postActions';

const Form = ({ selected, clearSelected }) => {

    const [post, setPost] = useState({
        creator: '', title: '', body: '', tags: '', pic: ''
    });

    const { creator, title, body, tags, pic } = post;

    useEffect(() => {
        if (selected) {
            setPost(selected);
        }
    }, [selected]);

    const dispatch = useDispatch();

    function handleChange (e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    async function handleSubmit (e) {
        e.preventDefault();
        if (selected) {
            const { _id: id } = post;
            const updatedPost = { ...post, tags: tags.toString().split(',').map(tag => tag.trim()) };
            dispatch(updatePost(id, updatedPost));
        } else {
            const postData = { creator, title, body, pic, tags: tags.toString().split(',').map(tag => tag.trim()) };
            dispatch(createPost(postData));
        }
        clear();
    }
    function clear () {
        clearSelected();
        setPost({ creator: '', title: '', body: '', tags: '', pic: '' });
    }

    return (
        <div className='form'>
            <h3>Create Memory</h3>
            <form onSubmit={handleSubmit}>
                <input className='inputs' type='text' name='creator' placeholder='Creator' value={post.creator} onChange={(e) => handleChange(e)} required />
                <input className='inputs' type='text' name='title' placeholder='Title' value={post.title} onChange={(e) => handleChange(e)} required />
                <textarea className='inputs' type='text' name='body' placeholder='Body' value={post.body} onChange={(e) => handleChange(e)} required rows={4} />
                <input className='inputs' type='text' name='tags' placeholder='Tags' value={post.tags} onChange={(e) => handleChange(e)} required />
                <div className='inputs'>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, pic: base64 })} />
                </div>
                <div className='post-n-clear-btn-con'>
                    <button className='post-n-clear-btn'>{selected ? 'UPDATE' : 'POST'}</button>
                    <button className='post-n-clear-btn' type='button' onClick={clear}>CLEAR FIELDS</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
/*

---------------
la'ali | 15
fatum  | 15
umeyma | 10
mari   | 10
rabi   | 15
musxafa| 10
shakir | 10
bilisa |  5
nadhi  |  5
----------------

*/