import { createSlice } from "@reduxjs/toolkit";

export const tipoPagoSlice = createSlice({
  name: "tipoPago",
  initialState: {
    isSaving: false,
    isEditing: false,
    messageSave: "",
    tipoPagos: [],
    active: {
      codigo: "",
      descripcion: "",
    },
  },
  reducers: {
    NuevotipoPago: (state, action) => {
      state.tipoPagos.push(action.payload);
      state.isSaving = false;
    },
    SavingNewtipoPago: (state) => {
      state.isSaving = true;
    },
    inscrpActivo: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },
    setEditng: (state) => {
      state.isEditing = true;
    },
    setTipoPago: (state, action) => {
      state.tipoPagos = action.payload;
    },
    updatetipoPago: (state, action) => {
      state.isSaving = false;
      state.tipoPagos = state.tipoPagos.map((tipoPago) => {
        if (tipoPago.id === action.payload.id) {
          return action.payload;
        }

        return tipoPago;
      });
      ///mostrar mensage de actulaizacion
      state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
    },
    clearLogout: (state) => {
      state.isSaving = false;
      state.messageSave = "";
      state.tipoPagos = [];
      state.active = null;
    },
    cleartipoPagoActive: (state, action) => {
      state.active = action.payload;
      state.isEditing = false;
    },
    delecttipoPagoById: (state, action) => {
      state.tipoPagos = state.tipoPagos.filter(
        (tipoPago) => tipoPago.codigo !== action.payload
      );
      state.active = null;
    },
  },
});

export const {
  NuevotipoPago,
  SavingNewtipoPago,
  inscrpActivo,
  setTipoPago,
  updatetipoPago,
  setEditng,
  cleartipoPagoActive,
  delecttipoPagoById,
  clearLogout,
} = tipoPagoSlice.actions;
