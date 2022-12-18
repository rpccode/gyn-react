import { configureStore } from "@reduxjs/toolkit";
import { cargoSlice } from "./cargo/cargoSlice";
import { inscripciónSlice, planesSlice, tipoPagoSlice } from "./Gyn";
import { SocioSlice } from "./socio/SocioSlice";

export const store = configureStore({
  reducer: {
    Socio: SocioSlice.reducer,
    cargo: cargoSlice.reducer,
    Inscripcion: inscripciónSlice.reducer,
    TipoPago: tipoPagoSlice.reducer,
    Planes: planesSlice.reducer,
  },
});
