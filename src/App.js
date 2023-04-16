import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { fetchPosts } from './actions/postActions';
import { fetchUsers } from './actions/usersActions';
import PostForm from './components/post/PostForm';
import PostMUI from './components/post/PostMUI';
import PostDisplayer from './components/post/PostDisplayer';
import Navbar from './components/navbar/Navbar';
import { Context } from './context/ContextPovider';
import Home from './components/home/Home';
import Register from './components/home/Register';
import Login from './components/home/Login';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers())
  }, [dispatch]);

  const memoUser = useSelector(state => state.usersReducer.memoUser);
  // console.log(`currUser:`, currUser)

  //   const users = useSelector(state => state.usersReducer.users);
  //   console.log('users:', users);
  //   const posts = useSelector(state => state.postsReducer.posts);
  //   console.log("posts:", posts);

  const ProtectedPage = ({ children }) => {
    if (!memoUser) return <Navigate to='/login' />;
    return children;
  }

  return (
    <div className='App' >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<PostDisplayer />} />
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/post-form' element={<PostForm />} />
            <Route path='/view-1' element={<PostDisplayer />} />
            <Route path='/view-2' element={<PostMUI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;