import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GynLayout } from '../layout/GynLayout'
import { DashboarPage } from '../page'
import { CargoPage } from '../page/CargoPage'
import { InscripccionPage } from '../page/InscripccionPage'
import { PagosPage } from '../page/PagosPage'
import { PlanesPage } from '../page/PlanesPage'
import { RutinasPage } from '../page/RutinasPage'
import { SocioPage } from '../page/SocioPage'

const GynRouter = () => {
  return (
    <Routes>
            <Route path='/' element={<GynLayout/>}>
              <Route index element={<DashboarPage/>} />
              <Route path='/socio' element={<SocioPage/>} />
              <Route path='/cargo' element={<CargoPage/>} />
              <Route path='/inscripccion' element={<InscripccionPage/>} />
              <Route path='/planes' element={<PlanesPage/>} />
              <Route path='/pagos' element={<PagosPage/>} />
              <Route path='/rutinas' element={<RutinasPage/>} />
              <Route path='/cuerpos' element={<PagosPage/>} />


              <Route path='/*' element={<PlanesPage/>} />

            </Route>
    </Routes>
  )
}

export default GynRouter
