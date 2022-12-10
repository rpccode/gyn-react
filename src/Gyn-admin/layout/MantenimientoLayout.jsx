import React from "react";
import { useLocation } from "react-router-dom";

import { Table } from "../components/Table";
import { capitalizarPrimeraLetra } from "../helpers";

export const MantenimientoLayout = ({ children }) => {
   const location = useLocation()
    const { pathname } = location
    const titulo = capitalizarPrimeraLetra(pathname.slice(1))
    

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Informacion de {titulo} </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-1">
            <button
              type="button"
              className="btn btn-md btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Nuevo
            </button>
          </div>
        </div>
      </div>
        { children }
      
    </>
  );
};
