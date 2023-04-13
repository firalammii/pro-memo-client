import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchPosts } from './actions/postActions';
import Form from './components/form/Form';
import PostMUI from './components/post/PostMUI';
import PostWrapper from './components/post/PostWrapper';
import Navbar from './components/navbar/Navbar';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('App');
    dispatch(fetchPosts());
  });

  return (
    <div className='App' >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<PostWrapper />} />
            <Route path='/post' element={<Form />} />
            <Route path='/view-1' element={<PostWrapper />} />
            <Route path='/view-2' element={<PostMUI />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <PostMUI /> */}
      {/* <PostWrapper /> */}
    </div>
  );
}

export default App;