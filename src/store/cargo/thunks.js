import {
  CargoActivo,
  clearCargoActive,
  delectCargoById,
  NuevoCargo,
  SavingNewCargo,
  setCargo,
  updateCargo,
} from "./cargoSlice";
import axios from "axios";
const client = axios.create({
  baseURL: "http://localhost:3000",
});
const cargoForm = {
  codigo: "",
  descripccion: "",
  vencimiento: "",
  periodo: "",
  precio: "",
  descuento: "",
};

export const StarkNuevoCargo = () => {
  return async (dispatch, getState) => {
    dispatch(SavingNewCargo());
    const { active: cargo, cargos } = getState().cargo;
    const newCargo = { ...cargo };
    newCargo.codigo = cargos.length + 1;

    try {
      const resp = await client.post(`/cargos`, newCargo);
      const data = await resp.data;

      dispatch(NuevoCargo(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkObtenerCargos = () => {
  return async (dispatch) => {
    try {
      const resp = await client.get(`/cargos`);
      const data = await resp.data;
      dispatch(setCargo(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const StarkUpdateCargo = (cargo) => {
  return async (dispatch) => {
    //    console.log(cargo)
    try {
      const resp = await client.put(`/cargos/${cargo.id}`, cargo);
      const data = await resp.data;

      dispatch(updateCargo(data));
    //   dispatch(clearCargoActive(cargoForm));
    } catch (error) {
      console.log(error);
    }
  };
};

export const StarkDelectCargo = () => {
    return async( dispatch , getState) => {
        const { active:cargo } = getState().cargo;
            const id = cargo.id;
        try {
            const resp = await client.delete(`/cargos/${id}`);
            
            dispatch( delectCargoById(id) )
            dispatch( clearCargoActive(cargoForm) )
        } catch (error) {
            console.log(error)
        }
    }
}
