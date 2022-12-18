import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import { StarkObtenerCargos } from "./store/cargo/thunks";
import { StarkObtenerIncripcions } from "./store/Gyn/inscripccion/thunks";
import { StarkObtenerTipoPagos } from "./store/Gyn/tipopago/thunks";
import { StarkObtenerSocios } from "./store/socio/thunks";

const GynApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StarkObtenerCargos());
  }, []);

  useEffect(() => {
    dispatch(StarkObtenerIncripcions());
  }, []);
  useEffect(() => {
    dispatch(StarkObtenerTipoPagos());
  }, []);
  useEffect(() => {
    dispatch(StarkObtenerSocios());
  }, []);
  return (
    <div className="">
      <AppRouter />
    </div>
  );
};

export default GynApp;
