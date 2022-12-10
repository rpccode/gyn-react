import { createSlice } from "@reduxjs/toolkit";

export const inscripciónSlice = createSlice({
  name: "inscripción",
  initialState: {
    isSaving: false,
    isEditing: false,
    messageSave: "",
    inscripcions: [],
    active: {
      codigo: "",
      cargo: "",
      vencimiento: "",
      periodo: "",
      precio: "",
    },
  },
  reducers: {
    NuevoIncripción: (state, action) => {
      state.inscripcions.push(action.payload);
      state.isSaving = false;
    },
    SavingNewInscripccion: (state) => {
      state.isSaving = true;
    },
    inscrpActivo: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },
    setEditng: (state) => {
      state.isEditing = true;
    },
    setIncrpcion: (state, action) => {
      state.inscripcions = action.payload;
    },
    updateIncripcion: (state, action) => {
      state.isSaving = false;
      state.inscripcions = state.inscripcions.map((incripcion) => {
        if (incripcion.id === action.payload.id) {
          return action.payload;
        }

        return incripcion;
      });
      ///mostrar mensage de actulaizacion
      state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
    },
    clearLogout: (state) => {
      state.isSaving = false;
      state.messageSave = "";
      state.inscripcions = [];
      state.active = null;
    },
    clearIncripcionActive: (state, action) => {
      state.active = action.payload;
      state.isEditing = false;
    },
    delectIncripcionById: (state, action) => {
      state.inscripcions = state.inscripcions.filter(
        (incripcion) => incripcion.codigo !== action.payload
      );
      state.active = null;
    },
  },
});

export const {
  NuevoIncripción,
  SavingNewInscripccion,
  inscrpActivo,
  setIncrpcion,
  updateIncripcion,
  setEditng,
  clearIncripcionActive,
  delectIncripcionById,
  clearLogout,
} = inscripciónSlice.actions;
