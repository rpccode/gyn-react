import { createSlice } from "@reduxjs/toolkit";

export const planesSlice = createSlice({
  name: "planes",
  initialState: {
    isSaving: false,
    isEditing: false,
    messageSave: "",
    Planes: [],
    active: {
      fechaCreacion: "",
      codigoSocio: "",
      cargo: "",
      concepto: "",
      vencimiento: "",
      balance: "",
      precio: "",
      estado: "",
      nota: "",
    },
  },
  reducers: {
    NuevoPlanes: (state, action) => {
      state.Planes.push(action.payload);
      state.isSaving = false;
    },
    SavingNewPlanes: (state) => {
      state.isSaving = true;
    },
    PlanesActivo: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },
    setEditng: (state) => {
      state.isEditing = true;
    },
    setPlanes: (state, action) => {
      state.Planes = action.payload;
    },
    updatePlanes: (state, action) => {
      state.isSaving = false;
      state.Planes = state.Planes.map((Planes) => {
        if (Planes.id === action.payload.id) {
          return action.payload;
        }

        return Planes;
      });
      ///mostrar mensage de actulaizacion
      state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
    },
    clearLogout: (state) => {
      state.isSaving = false;
      state.messageSave = "";
      state.Planes = [];
      state.active = null;
    },
    clearPlanesActive: (state, action) => {
      state.active = action.payload;
      state.isEditing = false;
    },
    delectPlanesById: (state, action) => {
      state.Planes = state.Planes.filter(
        (Planes) => Planes.codigo !== action.payload
      );
      state.active = null;
    },
    setPrecioPlan: (state, action) => {
      state.active.precio = action.payload.precio;
      state.active.vencimiento = action.payload.venc;
    },
  },
});

export const {
  NuevoPlanes,
  SavingNewPlanes,
  PlanesActivo,
  setPlanes,
  updatePlanes,
  setEditng,
  clearPlanesActive,
  delectPlanesById,
  clearLogout,
  setPrecioPlan,
} = planesSlice.actions;
