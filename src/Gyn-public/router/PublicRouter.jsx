import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SocioView } from '../../Gyn-admin/views/SocioView'
import { PublicLayout } from '../layout/PublicLayout'
import { Dashboar } from '../page/Dashboar'

export const PublicRouter = () => {
  return (
    <Routes>
            <Route path='/' element={<PublicLayout/>}>
                <Route index  element={<Dashboar/>}  />
            </Route>
    </Routes>
  )
}
