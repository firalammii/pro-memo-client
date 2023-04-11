import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Context } from './context-provider/ContextPovider';
import { fetchPosts } from './actions/postActions';
import Form from './components/Form';
import Post from './components/Post';
import PostMUI from './components/post/PostMUI';

const App = () => {

  const [selected, setSelected] = useState(null);

  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [selected, dispatch]);

  const { closeModal, toggleCloseModal } = useContext(Context)

  function updateSelected (post) {
    setSelected(post);
  }
  function clearSelected () {
    setSelected(null);
  }

  return (
    <div className='App' >
      <PostMUI />
      {/* <div className={closeModal ? "hide" : "modal-form"}  >
        <Form
          selected={selected}
          clearSelected={clearSelected}
          toggleCloseModal={toggleCloseModal}
        />
        <div className={closeModal ? "post-modal-btn" : "hide"} onClick={toggleCloseModal} >
          do Post
        </div>
      </div> */}
      {/* {!posts.length ? <h2>Nothing to display; no posts so far</h2> :
        posts.map((post) => <Post key={post._id} post={post} updateSelected={updateSelected} />)} */}


    </div>
  );
}

export default App;