import axios from "axios";
import {
  cleartipoPagoActive,
  delecttipoPagoById,
  NuevotipoPago,
  SavingNewtipoPago,
  setTipoPago,
  updatetipoPago,
} from "./tipoPagoSlice";

const client = axios.create({
  baseURL: "http://localhost:3000",
});
const tipoPagoForm = {
  codigo: "",
  descripccion: "",
};

export const StarkNuevoTipoPago = () => {
  return async (dispatch, getState) => {
    dispatch(SavingNewtipoPago());
    const { active: tipoPago, tipoPagos } = getState().TipoPago;
    const newTipoPago = { ...tipoPago };
    newTipoPago.codigo = tipoPagos.length + 1;

    try {
      const resp = await client.post(`/TipoPagos`, newTipoPago);
      const data = await resp.data;

      dispatch(NuevotipoPago(data));
      dispatch(cleartipoPagoActive(tipoPagoForm));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkObtenerTipoPagos = () => {
  return async (dispatch) => {
    try {
      const resp = await client.get(`/TipoPagos`);
      const data = await resp.data;
      dispatch(setTipoPago(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkUpdateTipoPago = (TipoPago) => {
  return async (dispatch) => {
    //    console.log(TipoPago)
    try {
      const resp = await client.put(`/TipoPagos/${TipoPago.id}`, TipoPago);
      const data = await resp.data;

      dispatch(updatetipoPago(data));
      //   dispatch(clearTipoPagoActive(TipoPagoForm));
    } catch (error) {
      console.log(error);
    }
  };
};

export const StarkDelectTipoPago = () => {
  return async (dispatch, getState) => {
    const { active: tipoPago } = getState().TipoPago;
    const id = tipoPago.id;
    try {
      const resp = await client.delete(`/TipoPagos/${id}`);

      dispatch(delecttipoPagoById(id));
      dispatch(cleartipoPagoActive(tipoPagoForm));
    } catch (error) {
      console.log(error);
    }
  };
};
