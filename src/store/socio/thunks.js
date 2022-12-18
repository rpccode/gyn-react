import axios from "axios";
import { dateString } from "../../Gyn-admin/helpers";
import {
  clearSocioActive,
  delectSocioById,
  NuevoSocio,
  SavingNewSocio,
  setSocio,
  updateSocio,
} from "./SocioSlice";
const client = axios.create({
  baseURL: "http://localhost:3000",
});
const SocioForm = {
  id: "",
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
};

export const StarkNuevoSocio = () => {
  return async (dispatch, getState) => {
    dispatch(SavingNewSocio());
    const { active: Socio, Socios } = getState().Socio;
    const newSocio = { ...Socio };
    newSocio.fechaCreacion = dateString(Date.now());

    try {
      const resp = await client.post(`/Socios`, newSocio);
      const data = await resp.data;

      dispatch(NuevoSocio(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkObtenerSocios = () => {
  return async (dispatch) => {
    try {
      const resp = await client.get(`/Socios`);
      const data = await resp.data;
      dispatch(setSocio(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkUpdateSocio = (Socio) => {
  return async (dispatch) => {
    //    console.log(Socio)
    try {
      const resp = await client.put(`/Socios/${Socio.id}`, Socio);
      const data = await resp.data;

      dispatch(updateSocio(data));
      dispatch(clearSocioActive(SocioForm));
    } catch (error) {
      console.log(error);
    }
  };
};

export const StarkDelectSocio = () => {
  return async (dispatch, getState) => {
    const { active: Socio } = getState().Socio;
    const id = Socio.id;
    try {
      const resp = await client.delete(`/Socios/${id}`);

      dispatch(delectSocioById(id));
      dispatch(clearSocioActive(SocioForm));
    } catch (error) {
      console.log(error);
    }
  };
};
