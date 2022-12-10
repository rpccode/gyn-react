import React from "react";

export const SocioForm = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="row">
            <div className="col">
            <label for="inputName" className="col-sm-1-12 col-form-label">
             Codigo 
            </label>
              <input
                type="number"
                className="form-control"
                placeholder="Socio"
                aria-label="First name"
              />
            </div>
            <div className="col">
            <label for="inputName" className="col-sm-1-12 col-form-label">
              Fecha
            </label>
              <input
                type="text"
                className="form-control "
                placeholder="2/12/22"
                aria-label="fecha"
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputName" className="col-sm-1-12 col-form-label">
              Nombre
            </label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputName" className="col-sm-1-12 col-form-label">
              Apellido
            </label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label for="inputName" className="col-sm-1-12 col-form-label">
                  Sexo
                </label>
                <select className="form-control" name="" id="">
                  <option>M</option>
                  <option>F</option>
                  <option>Otros</option>
                </select>
              </div>
            </div>
            <div className="col">
              <label for="inputName" className="col-sm-1-12 col-form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label for="inputName" className="col-sm-1-12 col-form-label">
                 Documento de Identidad
                </label>
                <select className="form-control" name="" id="">
                  <option>Cedula</option>
                  <option>Passaporte</option>
                  <option>Licencia</option>
                </select>
              </div>
            </div>
            <div className="col">
              <label for="inputName" className="col-sm-1-12 col-form-label">
                Numero de Documento
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="000-000000-0"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label for="inputName" className="col-sm-1-12 col-form-label">
                 Telefono
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="000-000-0000"
                    aria-label="Last name"
              />
              </div>
            </div>
            <div className="col">
            <label for="inputName" className="col-sm-1-12 col-form-label">
                 Celular
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="000-000-0000"
                    aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <label for="inputName" className="col-sm-1-12 col-form-label">
                 Planes de Facturacion
                </label>
                <select className="form-control" name="" id="">
                  <option>Entrenamiento</option>
                  <option>Passaporte</option>
                  <option>Licencia</option>
                </select>
            </div>
        </form>
      </div>
    </>
  );
};
