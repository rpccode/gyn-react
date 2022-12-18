import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import {
  PlanesActivo,
  setPrecioPlan,
} from "../../../store/Gyn/planes/planesSlice";
import {
  StarkNuevoPlane,
  StarkUpdatePlane,
} from "../../../store/Gyn/planes/thunks";
import { dateString, dateStringVen } from "../../helpers/fechaFormat";
const formValidatior = {
  codigoSocio: [(value) => value?.length >= 1, "El Socio es Requerido"],
  cargo: [(value) => value.length >= 1, "El Cargo es Requerido"],
  concepto: [(value) => value.length >= 1, "El Concepto es Requerido"],
  precio: [(value) => value?.length >= 1, "El Precio es Requerido"],
  estado: [(value) => value.length >= 1, "El Estado es Requerido"],
};

export const PlanesForm = ({ formSumbmitte, setformSumbmitte }) => {
  const {
    active: plan,
    Planes,
    isEditing,
  } = useSelector((state) => state.Planes);
  const {
    formState,
    fechaCreacion,
    codigoSocio,
    cargo,
    concepto,
    vencimiento,
    balance,
    precio,
    estado,
    nota,
    onInputChange,
    onResetForm,
    codigoSocioValid,
    cargoValid,
    conceptoValid,
    vencimientoValid,
    precioValid,
    estadoValid,
    isFormValid,
  } = useForm(plan, formValidatior);
  const [nombreSocio, setNombreSocio] = useState("");
  const [Precio, setPrecio] = useState("");
  const [venc, setvenc] = useState("");

  const dispatch = useDispatch();

  const fechaAct = dateString(Date.now());
  const { Socios } = useSelector((state) => state.Socio);
  const { cargos } = useSelector((state) => state.cargo);

  useEffect(() => {
    dispatch(PlanesActivo(formState));
  }, [formState]);

  useEffect(() => {
    setNombreSocio(buscarSocio);
  }, [codigoSocio]);

  useEffect(() => {
    setPrecio(buscarCargo);
  }, [cargo]);

  const buscarCargo = () => {
    const rest = cargos.filter((cargog) => cargog.id == cargo);
    const periodo = rest[0]?.periodo;
    const precio = rest[0]?.precio;
    const vencimiento = rest[0]?.vencimiento;
    setvenc(dateStringVen(fechaAct, periodo, vencimiento));
    dispatch(setPrecioPlan({ precio, venc }));
    return precio;
  };
  const buscarSocio = () => {
    const rest = Socios.filter((socio) => socio.id == codigoSocio);
    console.log(rest[0]?.nombre);
    return rest[0]?.nombre + " " + rest[0]?.apellido;
  };
  const onSubmit = (e) => {
    // e.preventdefauld()
    setformSumbmitte(true);
    if (!isFormValid) return;
    if (isEditing) {
      dispatch(StarkUpdatePlane(plan));
    } else {
      dispatch(StarkNuevoPlane());
    }

    onResetForm();
  };
  return (
    <div className="container">
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
              Estado
            </label>
            <select
              className="form-control my-1 mr-sm-2"
              name="estado"
              value={estado}
              onChange={onInputChange}
            >
              <option value="Dia">A</option>
              <option value="Semanal">S</option>
              <option value="Mes">DB</option>
            </select>
            <label htmlFor="" className="text-danger">
              {!!estadoValid && formSumbmitte && estadoValid}
            </label>
          </div>
          <div className="col-6">
            <label
              htmlFor="fechaCreacion"
              className="col-sm-1-12 col-form-label"
            >
              Fecha
            </label>
            <input
              type="text"
              className="form-control"
              name="fechaCreacion"
              id="fechaCreacion"
              value={fechaAct}
              disabled
              placeholder=""
              // value={cargo.id ? cargo.id : cargos.length + 1}
              // onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
            Codigo Socio
          </label>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              name="codigoSocio"
              value={codigoSocio}
              onChange={onInputChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              disabled
              name="nombreSocio"
              value={nombreSocio}
            />
          </div>

          <label htmlFor="" className="text-danger">
            {!!codigoSocioValid && formSumbmitte && codigoSocioValid}
          </label>
        </div>
        <div className="form-group row">
          <label htmlFor="cargo" className="col-sm-1-12 col-form-label">
            Cargo
          </label>

          <div className="col">
            <select
              className="form-control my-1 mr-sm-2"
              name="cargo"
              value={cargo}
              onChange={onInputChange}
            >
              <option>--Selecciona--</option>
              {cargos.map((cargo) => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.descripccion}
                </option>
              ))}
            </select>
            <label htmlFor="" className="text-danger">
              {!!cargoValid && formSumbmitte && cargoValid}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="concepto" className="col-sm-1-12 col-form-label">
            Concepto
          </label>
          <div className="col-sm-1-12">
            <input
              type="text"
              className="form-control"
              name="concepto"
              value={concepto}
              //   onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {!!conceptoValid && formSumbmitte && conceptoValid}
            </label>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="precio" className="col-sm-1-12 col-form-label">
              valor
            </label>
            <input
              type="text"
              className="form-control"
              name="precio"
              id="precio"
              placeholder="Cantidad"
              value={Precio}
              onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {!!precioValid && formSumbmitte && precioValid}
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="balance" className="col-sm-1-12 col-form-label">
              Balance
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              name="balance"
              value={balance}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="vencimiento" className="col-sm-1-12 col-form-label">
              Vence
            </label>
            <input
              type="text"
              className="form-control"
              name="vencimiento"
              onChange={onInputChange}
              disabled
              value={venc}
            />
            <label htmlFor="" className="text-danger">
              {!!vencimientoValid && formSumbmitte && vencimientoValid}
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="nota" className="col-sm-1-12 col-form-label">
              Nota
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              name="nota"
              placeholder="Nota"
              value={nota}
              onChange={onInputChange}
            />
          </div>
        </div>
      </form>
      <div className="row p-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmit}
          data-bs-dismiss={isFormValid && "modal"}
        >
          {isEditing ? "Guardar Cambios" : "Registrar"}
        </button>
      </div>
    </div>
  );
};
