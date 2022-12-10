import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicRouter } from '../Gyn-public/router/PublicRouter'
import GynRouter from '../Gyn-admin/router/GynRouter'

const AppRouter = () => {
  return (
    <Routes>
            <Route path='/admin' element={<GynRouter/>}  />
            <Route path='/client' element={<PublicRouter/>} />

            <Route path='/*' element={<GynRouter/>} />
    </Routes>
  )
}

export default AppRouter
