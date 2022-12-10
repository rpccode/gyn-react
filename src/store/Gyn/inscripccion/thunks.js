import axios from "axios";
import {
  clearIncripcionActive,
  delectIncripcionById,
  NuevoIncripción,
  SavingNewInscripccion,
  setIncrpcion,
  updateIncripcion,
} from "./inscripccionSlice";
const client = axios.create({
  baseURL: "http://localhost:3000",
});
const IncripcionForm = {
  codigo: "",
  cargo: "",
  vencimiento: "",
  periodo: "",
  precio: "",
};

export const StarkNuevoIncripcion = () => {
  return async (dispatch, getState) => {
    dispatch(SavingNewInscripccion());
    const { active: inscripcion, inscripcions } = getState().Inscripcion;
    const newIncripcion = { ...inscripcion };
    newIncripcion.codigo = inscripcions.length + 1;

    try {
      const resp = await client.post(`/Incripcions`, newIncripcion);
      const data = await resp.data;

      dispatch( NuevoIncripción(data) );
      dispatch( clearIncripcionActive( IncripcionForm ))
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkObtenerIncripcions = () => {
  return async (dispatch) => {
    try {
      const resp = await client.get(`/Incripcions`);
      const data = await resp.data;
      dispatch( setIncrpcion(data) );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkUpdateIncripcion = (Incripcion) => {
  return async (dispatch) => {
    //    console.log(Incripcion)
    try {
      const resp = await client.put(
        `/Incripcions/${Incripcion.id}`,
        Incripcion
      );
      const data = await resp.data;

      dispatch(updateIncripcion(data));
      //   dispatch(clearIncripcionActive(IncripcionForm));
    } catch (error) {
      console.log(error);
    }
  };
};

export const StarkDelectIncripcion = () => {
  return async (dispatch, getState) => {
    const { active: inscripcion } = getState().Inscripcion;
    const id = inscripcion.id;
    try {
      const resp = await client.delete(`/Incripcions/${id}`);

      dispatch(delectIncripcionById(id));
      dispatch(clearIncripcionActive(IncripcionForm));
    } catch (error) {
      console.log(error);
    }
  };
};
