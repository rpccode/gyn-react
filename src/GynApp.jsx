import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter"
import { StarkObtenerCargos } from "./store/cargo/thunks";
import { StarkObtenerIncripcions } from "./store/Gyn/inscripccion/thunks";


const GynApp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(StarkObtenerCargos());
  }, []);
  
  useEffect(() => {
    dispatch(StarkObtenerIncripcions());
  }, []);
  return (
    <div className="">
            <AppRouter/>
    </div>
  )
}

export default GynApp

