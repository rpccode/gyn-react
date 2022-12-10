import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { inscrpActivo } from "../../../store/Gyn/inscripccion/inscripccionSlice";
import { StarkNuevoIncripcion, StarkUpdateIncripcion } from "../../../store/Gyn/inscripccion/thunks";

const formValidatior = {
  // codigo: [(value) => value.length >= 1, "El Codigo es Requerido"],
  // cargo: [(value) => value.length >= 1 , "El Cargo es Requerido"],
  vencimiento: [(value) => value.length >= 1, "El Vencimiento es Requerido"],
  periodo: [(value) => value.length >= 1, "El Periodo es Requerido"],
  precio: [(value) => value.length >= 1, "El Precio es Requerido"],
};

export const IncripccionForm = () => {
  const dispatch = useDispatch()
  const { cargos } = useSelector((state) => state.cargo);
  const { active:inscripcion, inscripcions ,isEditing } = useSelector(
    (state) => state.Inscripcion
  );

  const {
    codigo,
    cargo,
    vencimeinto,
    periodo,
    precio,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
    codigoValid,
    vencimientoValid,
    precioValid,
    cargoValid,
    periodoValid,
  } = useForm(inscripcion, formValidatior);
  const [formSumbmitte, setformSumbmitte] = useState(false);

  useEffect(() => {
    dispatch(inscrpActivo(formState));
  }, [formState]);


  const onSubmit = () => {
    setformSumbmitte(true);
    if (!isFormValid) return;
    if (isEditing) {
      dispatch(StarkUpdateIncripcion( inscripcion ));
  
    } else {
      dispatch(StarkNuevoIncripcion());
    }

    onResetForm();
    setformSumbmitte(false)
  };

  return (
    <div className="container">
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
              Codigo 
            </label>
            <input
              type="text"
              className="form-control"
              name="codigo"
              id="codigo"
              placeholder=""
              value={inscripcion.id ? inscripcion.id : inscripcions.length + 1}
              onChange={onInputChange}
            />
            
          </div>
          <div className="col-6">
            <label htmlFor="cargo" className="col-sm-1-12 col-form-label">
              Cargo Asociado
            </label>
            <select
              className="form-control my-1 mr-sm-2"
              name="cargo"
              value={cargo}
              onChange={onInputChange}
            >
              <option defaultValue=''>Selecciona...</option>

              {cargos.map((cargo) => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.descripccion}
                </option>
              ))}
              {/* <option value={1}>Diario</option>
              <option value={2}>Semanal</option>
              <option value={3}>Mensual</option>
              <option value={4}>Anual</option> */}
            </select>
            <span className="text-danger text-sm fs-6">{ (!!cargoValid && formSumbmitte) && cargoValid }</span>
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
              value={vencimeinto}
              onChange={onInputChange}
            />
           <span className="text-danger text-sm fs-6">{ (!!vencimientoValid && formSumbmitte) && vencimientoValid }</span>
          </div>
          <div className="col-6">
            <select
              className="form-control my-1 mr-sm-2"
              name="periodo"
              value={periodo}
              onChange={onInputChange}
            >
              <option selected>Periodo...</option>
              <option value="Dia">Dia</option>
              <option value="Semanal">Semanal</option>
              <option value="Mes">Mensual</option>
              <option value="Año">Anual</option>
            </select>
            <span className="text-danger text-sm fs-6">{ (!!periodoValid && formSumbmitte) && periodoValid }</span>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="precio" className="col-sm-1-12 col-form-label">
            Precio
          </label>
          <div className="col-sm-1-12">
            <input
              type="text"
              className="form-control"
              name="precio"
              id="precio"
              placeholder="Cantidad"
              value={precio}
              onChange={onInputChange}
            />
          </div>
          <span className="text-danger text-sm fs-6">{ (!!precioValid && formSumbmitte) && precioValid }</span>
        </div>
      </form>
      <div className="row mt-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmit}
          data-bs-dismiss={isFormValid && 'modal'}
        >
          {isEditing ? "Guardar Cambios" : "Registrar"}
        </button>
      </div>
    </div>
  );
};
