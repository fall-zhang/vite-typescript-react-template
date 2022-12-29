import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '@/pages/login'
import ErrorPage from '@/pages/err'
const RouterPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default RouterPage
