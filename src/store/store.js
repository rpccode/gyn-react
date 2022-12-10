import { configureStore } from '@reduxjs/toolkit'
import { cargoSlice } from './cargo/cargoSlice'
import { inscripciónSlice } from './Gyn/inscripccion/inscripccionSlice'
import { SocioSlice } from './socio/SocioSlice'

export const store = configureStore({
  reducer: {
    Socio: SocioSlice.reducer,
    cargo: cargoSlice.reducer,
    Inscripcion: inscripciónSlice.reducer
  },
})