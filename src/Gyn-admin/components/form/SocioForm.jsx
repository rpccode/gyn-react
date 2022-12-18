import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { SocioActivo } from "../../../store/socio/SocioSlice";
import { StarkNuevoSocio, StarkUpdateSocio } from "../../../store/socio/thunks";
import { dateString } from "../../helpers";

const formValidatior = {
  nombre: [(value) => value.length >= 1, "El Nombre es Requerido"],
  apellido: [(value) => value.length >= 1, "El Apellido es Requerido"],
  sexo: [(value) => value.length >= 1, "El Sexo es Requerido"],
  fechaNacimiento: [
    (value) => value.length >= 1,
    "La Fecha de Nacimiento es Requerida",
  ],
  tipoDoc: [(value) => value.length >= 1, "El tipo de Documento es Requerido"],
  numDoc: [(value) => value.length >= 1, "El Numero de Documento es Requerido"],
  telefono: [(value) => value.length >= 1, "El Telefono es Requerido"],
  direccion: [(value) => value.length >= 1, "La Direccion es Requerida"],
};

export const SocioForm = ({ formSumbmitte, setformSumbmitte }) => {
  const dispatch = useDispatch();

  const fechaAct = dateString(Date.now());
  const {
    active: Socio,
    Socios,
    isEditing,
  } = useSelector((state) => state.Socio);

  const {
    formState,
    fechaCreacion,
    nombre,
    apellido,
    sexo,
    fechaNacimiento,
    tipoDoc,
    numDoc,
    telefono,
    celular,
    direccion,
    estado,
    onInputChange,
    onResetForm,
    isFormValid,
    nombreValid,
    apellidoValid,
    sexoValid,
    fechaNacimientoValid,
    tipoDocValid,
    numDocValid,
    telefonoValid,
    celularValid,
    direccionValid,
  } = useForm(Socio, formValidatior);

  useEffect(() => {
    dispatch(SocioActivo(formState));
  }, [formState]);

  const onSubmit = (e) => {
    // e.preventdefauld()
    setformSumbmitte(true);
    if (!isFormValid) return;
    if (isEditing) {
      dispatch(StarkUpdateSocio(cargo));
    } else {
      dispatch(StarkNuevoSocio());
    }

    onResetForm();
  };
  return (
    <>
      <div className="container">
        <form className="row">
          <div className="col-6">
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
                  name="codigo"
                  value={Socio.id ? Socio.id : Socios.length + 1}
                />
              </div>
              <div className="col">
                <label for="inputName" className="col-sm-1-12 col-form-label">
                  Fecha
                </label>
                <input
                  type="text"
                  className="form-control "
                  aria-label="fecha"
                  name="fechaCreacion"
                  value={isEditing ? fechaCreacion : fechaAct}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-1-12 col-form-label">
                Nombre
              </label>
              <div className="col-sm-1-12">
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={nombre}
                  onChange={onInputChange}
                  placeholder=""
                />
                <label htmlFor="" className="text-danger">
                  {!!nombreValid && formSumbmitte && nombreValid}
                </label>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-1-12 col-form-label">
                Apellido
              </label>
              <div className="col-sm-1-12">
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  value={apellido}
                  onChange={onInputChange}
                  placeholder=""
                />
                <label htmlFor="" className="text-danger">
                  {!!apellidoValid && formSumbmitte && apellidoValid}
                </label>
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
                  <select
                    className="form-control"
                    name="sexo"
                    value={sexo}
                    onChange={onInputChange}
                  >
                    <option value="">--- Seleccione ---</option>
                    <option value="Masculino">M</option>
                    <option value="Femenino">F</option>
                    <option value="Otros">Otros</option>
                  </select>
                  <label htmlFor="" className="text-danger">
                    {!!sexoValid && formSumbmitte && sexoValid}
                  </label>
                </div>
              </div>
              <div className="col">
                <label
                  htmlFor="inputName"
                  className="col-sm-1-12 col-form-label"
                >
                  Fecha de Nacimient
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  name="fechaNacimiento"
                  value={fechaNacimiento}
                  onChange={onInputChange}
                />
                <label htmlFor="" className="text-danger">
                  {!!fechaNacimientoValid &&
                    formSumbmitte &&
                    fechaNacimientoValid}
                </label>
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
                    Doc de Identidad
                  </label>
                  <select
                    className="form-control"
                    name="tipoDoc"
                    value={tipoDoc}
                    onChange={onInputChange}
                  >
                    <option value="">--- Seleccione ---</option>
                    <option value="cedula">Cedula</option>
                    <option value="passaporte">Passaporte</option>
                    <option value="licencia">Licencia</option>
                  </select>
                  <label htmlFor="" className="text-danger">
                    {!!tipoDocValid && formSumbmitte && tipoDocValid}
                  </label>
                </div>
              </div>
              <div className="col">
                <label
                  htmlFor="inputName"
                  className="col-sm-1-12 col-form-label"
                >
                  Num de Documento
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="000-000000-0"
                  aria-label="Last name"
                  name="numDoc"
                  value={numDoc}
                  onChange={onInputChange}
                />
                <label htmlFor="" className="text-danger">
                  {!!numDocValid && formSumbmitte && numDocValid}
                </label>
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
                    name="telefono"
                    value={telefono}
                    onChange={onInputChange}
                  />
                  <label htmlFor="" className="text-danger">
                    {!!telefonoValid && formSumbmitte && telefonoValid}
                  </label>
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
                  name="celular"
                  value={celular}
                  onChange={onInputChange}
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
                    Direccion
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ave  # 1 santiago"
                    aria-label="direccion"
                    name="direccion"
                    value={direccion}
                    onChange={onInputChange}
                  />
                  <label htmlFor="" className="text-danger">
                    {!!direccionValid && formSumbmitte && direccionValid}
                  </label>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="inputName"
                    className="col-sm-1-12 col-form-label"
                  >
                    Estado
                  </label>
                  <select
                    className="form-control my-1 mr-sm-2"
                    // value={periodo}
                    name="estado"
                    value={estado}
                    onChange={onInputChange}
                  >
                    <option value="">--- Seleccione ---</option>
                    <option value="activo">A</option>
                    <option value="inactivo">IN</option>
                    <option value="suspendido">S</option>
                    <option value="desabilitado">DB</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button
          type="button"
          className="btn btn-primary col-12 mt-2"
          onClick={onSubmit}
          data-bs-dismiss={isFormValid && "modal"}
        >
          {isEditing ? "Guardar Cambios" : "Registrar"}
        </button>
      </div>
    </>
  );
};
