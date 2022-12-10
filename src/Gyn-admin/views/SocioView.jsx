export const SocioView = () => {
  return (
    <>
      <div class="container">
        <div className="row">
          <form className="row  shadow p-3 mb-3 bg-body rounded">
            <h1 class="col-sm-1-12 col-form-label">Informacion del Socio</h1>
            <div className="col-6">
              <div class="row">
                <div class="col">
                  <label for="inputName" class="col-sm-1-12 col-form-label">
                    Codigo
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Socio"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <label for="inputName" class="col-sm-1-12 col-form-label">
                    Fecha
                  </label>
                  <input
                    type="text"
                    class="form-control "
                    placeholder="2/12/22"
                    aria-label="fecha"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputName" class="col-sm-1-12 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-1-12">
                  <input
                    type="text"
                    class="form-control"
                    name="inputName"
                    id="inputName"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputName" class="col-sm-1-12 col-form-label">
                  Apellido
                </label>
                <div class="col-sm-1-12">
                  <input
                    type="text"
                    class="form-control"
                    name="inputName"
                    id="inputName"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-1-12 col-form-label">
                      Sexo
                    </label>
                    <select class="form-control" name="" id="">
                      <option>M</option>
                      <option>F</option>
                      <option>Otros</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <label for="inputName" class="col-sm-1-12 col-form-label">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-1-12 col-form-label">
                      Documento de Identidad
                    </label>
                    <select class="form-control" name="" id="">
                      <option>Cedula</option>
                      <option>Passaporte</option>
                      <option>Licencia</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <label for="inputName" class="col-sm-1-12 col-form-label">
                    Numero de Documento
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="000-000000-0"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-1-12 col-form-label">
                      Telefono
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="000-000-0000"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div class="col">
                  <label for="inputName" class="col-sm-1-12 col-form-label">
                    Celular
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="000-000-0000"
                    aria-label="Last name"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="row shadow p-3 mb-5 bg-body rounded ">
            <h1 class="col-sm-1-12 col-form-label">
              Detalles de Facturacion del Socio
            </h1>
            <div class="form-group mb-4">
              <label
                for="inputName"
                class="col-sm-1-12 col-form-label text-center"
              >
                Plan Facturado
              </label>
              <select class="form-control" name="" id="" disabled>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div class="row">
              <div class="col-4">
                <label
                  for="inputName"
                  class="col-sm-1-12 col-form-label text-center"
                >
                  Valido Hasta
                </label>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="12/12/22"
                  aria-label="Last name"
                  disabled
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label
                  for="inputName"
                  class="col-sm-1-12 col-form-label text-center text-danger"
                >
                  Balance Pendiente
                </label>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control text-danger"
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
