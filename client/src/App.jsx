import React from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { HomePage, LoginPage, RegisterPage } from './pages';
import Layout from './Layout'

import { UserContextProvider } from './UserContext';

axios.defaults.baseURL = 'http://localhost:4000';

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App