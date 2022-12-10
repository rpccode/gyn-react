import { createSlice } from '@reduxjs/toolkit'

export const SocioSlice = createSlice({
  name: 'Socio',
  initialState:{},
  reducers: {
    create: (state) => {

      state.value += 1
    },
  },
})


export const { create } = SocioSlice.actions
