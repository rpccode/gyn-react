import axios from "axios";
import { dateString } from "../../../Gyn-admin/helpers/fechaFormat";

import {
  clearPlanesActive,
  delectPlanesById,
  NuevoPlanes,
  SavingNewPlanes,
  setPlanes,
  updatePlanes,
} from "./planesSlice";

const client = axios.create({
  baseURL: "http://localhost:3000",
});
const PlanesForm = {
  id: "",
  fechaCreacion: "",
  codigoPlane: "",
  cargo: "",
  concepto: "",
  vencimiento: "",
  balance: "",
  precio: "",
  estado: "",
  nota: "",
};

export const StarkNuevoPlane = () => {
  return async (dispatch, getState) => {
    dispatch(SavingNewPlanes());
    const { active: Plane, Planes } = getState().Planes;
    const newPlane = { ...Plane };
    newPlane.fechaCreacion = dateString(Date.now());

    try {
      const resp = await client.post(`/Planes`, newPlane);
      const data = await resp.data;

      dispatch(NuevoPlanes(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkObtenerPlanes = () => {
  return async (dispatch) => {
    try {
      const resp = await client.get(`/Planes`);
      const data = await resp.data;
      dispatch(setPlanes(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkUpdatePlane = (Plane) => {
  return async (dispatch) => {
    //    console.log(Plane)
    try {
      const resp = await client.put(`/Planes/${Plane.id}`, Plane);
      const data = await resp.data;

      dispatch(updatePlanes(data));
      dispatch(clearPlanesActive(PlaneForm));
    } catch (error) {
      console.log(error);
    }
  };
};

export const StarkDelectPlane = () => {
  return async (dispatch, getState) => {
    const { active: Plane } = getState().Planes;
    const id = Plane.id;
    try {
      const resp = await client.delete(`/Planes/${id}`);

      dispatch(delectPlanesById(id));
      dispatch(clearPlanesActive(PlanesForm));
    } catch (error) {
      console.log(error);
    }
  };
};
