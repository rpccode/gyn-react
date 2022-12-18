import { dateString } from "../helpers";

export const SocioView = () => {
  const fechaAct = dateString(Date.now());

  return (
    <>
      <div className="container">
        <div className="row">
          <form className="row  shadow p-3 mb-3 bg-body rounded">
            <h1 className="col-sm-1-12 col-form-label">
              Informacion del Socio
            </h1>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="inputName"
                    className="col-sm-1-12 col-form-label"
                  >
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
                  <label
                    htmlFor="inputName"
                    className="col-sm-1-12 col-form-label"
                  >
                    Fecha
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    aria-label="fecha"
                    value={fechaAct}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputName"
                  className="col-sm-1-12 col-form-label"
                >
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
                <label
                  htmlFor="inputName"
                  className="col-sm-1-12 col-form-label"
                >
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
                    <label
                      htmlFor="inputName"
                      className="col-sm-1-12 col-form-label"
                    >
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
                  <label
                    htmlFor="inputName"
                    className="col-sm-1-12 col-form-label"
                  >
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
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="inputName"
                      className="col-sm-1-12 col-form-label"
                    >
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
                  <label
                    htmlFor="inputName"
                    className="col-sm-1-12 col-form-label"
                  >
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
                    <label
                      htmlFor="inputName"
                      className="col-sm-1-12 col-form-label"
                    >
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
                  <label
                    htmlFor="inputName"
                    className="col-sm-1-12 col-form-label"
                  >
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
            </div>
          </form>
          <div className="row shadow p-3 mb-5 bg-body rounded ">
            <h1 className="col-sm-1-12 col-form-label">
              Detalles de Facturacion del Socio
            </h1>
            <div className="form-group mb-4">
              <label
                htmlFor="inputName"
                className="col-sm-1-12 col-form-label text-center"
              >
                Plan Facturado
              </label>
              <select className="form-control" name="" id="" disabled>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div className="row">
              <div className="col-4">
                <label
                  htmlFor="inputName"
                  className="col-sm-1-12 col-form-label text-center"
                >
                  Valido Hasta
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="12/12/22"
                  aria-label="Last name"
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label
                  htmlFor="inputName"
                  className="col-sm-1-12 col-form-label text-center text-danger"
                >
                  Balance Pendiente
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control text-danger"
                  placeholder="00.00"
                  aria-label="Last name"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
