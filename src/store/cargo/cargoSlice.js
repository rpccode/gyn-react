import { createSlice } from "@reduxjs/toolkit";

export const cargoSlice = createSlice({
  name: "cargo",
  initialState: {
    isSaving: false,
    isEditing: false,
    messageSave: "",
    cargos: [],
    active: {
      codigo: "",
      descripccion: "",
      vencimiento: "",
      periodo: "",
      precio: "",
      descuento: "",
    },
  },
  reducers: {
    SavingNewCargo: (state) => {
      state.isSaving = true;
    },
    NuevoCargo: (state, action) => {
      state.cargos.push(action.payload);
      state.isSaving = false;
    },
    CargoActivo: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },
    setEditing: (state, action) => {
      state.isEditing = true;
    },
    setCargo: (state, action) => {
      state.cargos = action.payload;
    },
    updateCargo: (state, action) => {
      state.isSaving = false;
      state.cargos = state.cargos.map((cargo) => {
        if (cargo.id === action.payload.id) {
          return action.payload;
        }

        return cargo;
      });
      ///mostrar mensage de actulaizacion
      state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
    },
    clearCargoLogout: (state) => {
      state.isSaving = false;
      state.messageSave = "";
      state.cargos = [];
      state.active = null;
    },
    clearCargoActive: (state, action) => {
      state.active = action.payload;
      state.isEditing = false;
    },
    delectCargoById: (state, action) => {
      state.cargos = state.cargos.filter(
        (cargo) => cargo.codigo !== action.payload
      );
      state.active = null;
    },
  },
});

export const {
  SavingNewCargo,
  NuevoCargo,
  CargoActivo,
  setCargo,
  updateCargo,
  delectCargoById,
  clearCargoActive,
  setEditing,
} = cargoSlice.actions;
