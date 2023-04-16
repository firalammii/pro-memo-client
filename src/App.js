import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { fetchPosts } from './actions/postActions';
import { fetchUsers } from './actions/usersActions';
import PostForm from './components/post/PostForm';
import PostDisplayer from './components/post/PostDisplayer';
import Navbar from './components/navbar/Navbar';
import Register from './components/home/Register';
import Login from './components/home/Login';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers())

    return () => localStorage.removeItem('memoUser');
  }, [dispatch]);

  const memoUser = useSelector(state => state.usersReducer.memoUser);

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
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/post-form' element={
              <ProtectedPage>
                <PostForm />
              </ProtectedPage>} />
            <Route path='/public-posts' element={<PostDisplayer />} />
            <Route path='/personal-posts' element={
              <ProtectedPage>
                <PostDisplayer />
              </ProtectedPage>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;