import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import Form from './components/posts/Form';
import Post from './components/posts/Post';

const App = () => {

  const [selected, setSelected] = useState(null);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [selected, dispatch]);


  function updateSelected (post) {
    setSelected(post);
  }
  function clearSelected () {
    setSelected(null);
  }

  return (
    <div className='App' >
      <Form selected={selected} clearSelected={clearSelected} />
      {!posts.length ? <h2>Nothing to display; no posts so far</h2> :
        posts.map((post) => <Post key={post._id} post={post} updateSelected={updateSelected} />)}
    </div>
  );
}

export default App;