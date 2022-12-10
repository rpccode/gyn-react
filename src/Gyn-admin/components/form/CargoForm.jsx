import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { CargoActivo } from "../../../store/cargo/cargoSlice";
import { StarkNuevoCargo, StarkUpdateCargo } from "../../../store/cargo/thunks";

const formValidatior = {
  // codigo: [(value) => value.length >= 1, "El Codigo es Requerido"],
  descripccion: [(value) => value.length >= 1, "La Descripccion es Requerido"],
  vencimiento: [(value) => value.length >= 1, "El Vencimiento es Requerido"],
  periodo: [(value) => value.length >= 1, "El Periodo es Requerido"],
  precio: [(value) => value.length >= 1, "El Precio es Requerido"],
};

export const CargoForm = ({formSumbmitte, setformSumbmitte}) => {
  const {
    active: cargo,
    cargos,
    isEditing,
  } = useSelector((state) => state.cargo);

  const {
    codigo,
    descripccion,
    descuento,
    periodo,
    precio,
    vencimiento,
    onInputChange,
    formState,
    isFormValid,
    codigoValid,
    vencimientoValid,
    precioValid,
    descripccionValid,
    periodoValid,
    onResetForm,
  } = useForm(cargo, formValidatior);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CargoActivo(formState));
  }, [formState]);

  const onSubmit = (e) => {
    // e.preventdefauld()
    setformSumbmitte(true);
    if (!isFormValid) return;
    if (isEditing) {
      dispatch(StarkUpdateCargo(cargo));
    } else {
      dispatch(StarkNuevoCargo());
    }

    onResetForm();
  };

  return (
    <div className="container">
      <form>
        <div className="form-group row">
          <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
            Codigo
          </label>
          <div className="col-sm-1-12">
            <input
              type="text"
              className="form-control"
              name="codigo"
              id="codigo"
              placeholder=""
              value={cargo.id ? cargo.id : cargos.length + 1}
              onChange={onInputChange}
            />
          </div>
          <label htmlFor="" className="text-danger">
            {!!codigoValid && formSumbmitte}
          </label>
        </div>
        <div className="form-group row">
          <label htmlFor="descripccion" className="col-sm-1-12 col-form-label">
            Descripccion
          </label>
          <div className="col-sm-1-12">
            <input
              type="text"
              className="form-control"
              name="descripccion"
              id="descripccion"
              placeholder=""
              value={descripccion}
              onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {(!!descripccionValid && formSumbmitte) && descripccionValid}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="vencimiento" className="col-sm-1-12 col-form-label">
            Vencimiento
          </label>
          <div className="col-6">
            <input
              type="number"
              className="form-control"
              name="vencimiento"
              id="vencimiento"
              placeholder="Cantidad"
              value={vencimiento}
              onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {(!!vencimientoValid && formSumbmitte) && vencimientoValid}
            </label>
          </div>
          <div className="col-6">
            <select
              className="form-control my-1 mr-sm-2"
              value={periodo}
              name="periodo"
              onChange={onInputChange}
            >
              <option>Periodo...</option>
              <option value="Dia">Dia</option>
              <option value="Semanal">Semanal</option>
              <option value="Mes">Mensual</option>
              <option value="Año">Anual</option>
            </select>
            <label htmlFor="" className="text-danger">
              {(!!periodoValid && formSumbmitte) && periodoValid}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="precio" className="col-sm-1-12 col-form-label">
            Precio
          </label>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              name="precio"
              id="precio"
              placeholder="Cantidad"
              value={precio}
              onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {(!!precioValid && formSumbmitte) && precioValid}
            </label>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              name="descuento"
              placeholder="Descuento"
              value={descuento}
              onChange={onInputChange}
            />
          </div>
        </div>
      </form>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onSubmit}
        data-bs-dismiss={ isFormValid && 'modal' }
      >
        {isEditing ? "Guardar Cambios" : "Registrar"}
      </button>
    </div>
  );
};
