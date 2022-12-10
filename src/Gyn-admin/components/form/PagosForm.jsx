import React from 'react'
import { Table } from '../Table'

const header = [
    "ID",
    "Descripcion",
    "Vencimiento",
    "Periodo",
    "Precio",
    "Descuento",
    "Acciones",
  ];

export const PagosForm = () => {
  return (
    <div class="container">
        <form>
        < div className="form-group row ">
          <div className="col-6">
            <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
             Estado
            </label>
            <select
              className="form-control my-1 mr-sm-2"
              // value={periodo}
              disabled
              name="periodo"
              // onChange={onInputChange}
            >
              <option value="Dia">A</option>
              <option value="Semanal">S</option>
              <option value="Mes">DB</option>
            </select>
          </div>
          <div className="col-6">
          <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
             Fecha
            </label>
            <input
              type="text"
              className="form-control"
              name="codigo"
              id="codigo"
              disabled
              placeholder=""
              // value={cargo.id ? cargo.id : cargos.length + 1}
              // onChange={onInputChange}
            />
          </div>
        </div>
        < div className="form-group row mb-4">
          <div className="col-6">
            <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
             Socio ID
            </label>
            <select
              className="form-control my-1 mr-sm-2"
              // value={periodo}
              disabled
              name="periodo"
              // onChange={onInputChange}
            >
              <option value="Dia">A</option>
              <option value="Semanal">S</option>
              <option value="Mes">DB</option>
            </select>
          </div>
          <div className="col-6">
          <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
             Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="codigo"
              id="codigo"
              disabled
              placeholder=""
              // value={cargo.id ? cargo.id : cargos.length + 1}
              // onChange={onInputChange}
            />
          </div>
        </div>
        <Table header={header}/>        
        </form>

    </div>
  )
}
