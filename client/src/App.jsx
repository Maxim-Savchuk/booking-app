import React from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { HomePage, LoginPage, RegisterPage, AccountPage } from './pages';
import { Layout } from './components';

import { UserContextProvider } from './context/UserContext.jsx';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
          <Route path='/account/:subpage/:action' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App