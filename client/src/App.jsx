import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';
import Layout from './Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App