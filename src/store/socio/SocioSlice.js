import { createSlice } from "@reduxjs/toolkit";

export const SocioSlice = createSlice({
  name: "Socio",
  initialState: {
    isSaving: false,
    isEditing: false,
    messageSave: "",
    Socios: [],
    active: {
      fechaCreacion: "",
      nombre: "",
      apellido: "",
      sexo: "",
      fechaNacimiento: "",
      tipoDoc: "",
      numDoc: "",
      telefono: "",
      celular: "",
      direccion: "",
      estado: "",
    },
  },
  reducers: {
    SavingNewSocio: (state) => {
      state.isSaving = true;
    },
    NuevoSocio: (state, action) => {
      state.Socios.push(action.payload);
      state.isSaving = false;
    },
    SocioActivo: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },
    setEditing: (state, action) => {
      state.isEditing = true;
    },
    setSocio: (state, action) => {
      state.Socios = action.payload;
    },
    updateSocio: (state, action) => {
      state.isSaving = false;
      state.Socios = state.Socios.map((Socio) => {
        if (Socio.id === action.payload.id) {
          return action.payload;
        }

        return Socio;
      });
      ///mostrar mensage de actulaizacion
      state.messageSave = `${action.payload.title}, Actualizada Correctamente`;
    },
    clearSocioLogout: (state) => {
      state.isSaving = false;
      state.messageSave = "";
      state.Socios = [];
      state.active = null;
    },
    clearSocioActive: (state, action) => {
      state.active = action.payload;
      state.isEditing = false;
    },
    delectSocioById: (state, action) => {
      state.Socios = state.Socios.filter(
        (Socio) => Socio.codigo !== action.payload
      );
      state.active = null;
    },
  },
});

export const {
  SavingNewSocio,
  NuevoSocio,
  SocioActivo,
  setEditing,
  setSocio,
  updateSocio,
  clearSocioActive,
  clearSocioLogout,
  delectSocioById,
} = SocioSlice.actions;
