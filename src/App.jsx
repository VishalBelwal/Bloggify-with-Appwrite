import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';   //when we use use redux with react
import './App.css'
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import { Header, Footer } from './components';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //as soon as application loads useEffect starts its work
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({userData})) : dispatch(logout());
      })
      .finally(() => setLoading(false))                   //kuch bhi ho ye run karta hi karta hai
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 text-white'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet />                //will get it from react router dom */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
