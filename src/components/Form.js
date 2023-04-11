import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../actions/postActions';

const Form = ({ selected, clearSelected, toggleCloseModal }) => {

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
        <div className='modal-form'>
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
            <div className='close-modal' onClick={toggleCloseModal}>x</div>
        </div>
    );
};

export default Form;
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
nadhi  |  5 | done 5 left
----------------
/* 0979666541 farhan
/* 1000330450422 Aliyyi Nure /
*/