import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import {
  StarkNuevoTipoPago,
  StarkUpdateTipoPago,
} from "../../../store/Gyn/tipopago/thunks";
import { inscrpActivo } from "../../../store/Gyn/tipopago/tipoPagoSlice";

const formValidatior = {
  descripcion: [
    (value) => value?.length >= 1 || 0,
    "La Descripccion es Requerido",
  ],
};

export const TipoPago = ({ formSumbmitte, setformSumbmitte }) => {
  const dispatch = useDispatch();

  const {
    active: TipoPago,
    tipoPagos,
    isEditing,
  } = useSelector((state) => state.TipoPago);

  const {
    descripcion,
    onInputChange,
    onResetForm,
    formState,
    isFormValid,
    descripcionValid,
  } = useForm(TipoPago, formValidatior);

  useEffect(() => {
    dispatch(inscrpActivo(formState));
  }, [formState]);

  const onSubmit = (e) => {
    // e.preventdefauld()
    setformSumbmitte(true);
    if (!isFormValid) return;
    if (isEditing) {
      dispatch(StarkUpdateTipoPago(cargo));
    } else {
      dispatch(StarkNuevoTipoPago());
    }

    onResetForm();
  };
  return (
    <div className="container">
      <div className="container">
        <form>
          <div className="form-group row mb-4">
            <label for="descrpcion" className="col-sm-1-12 col-form-label">
              Descripcion
            </label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="descripcion"
                id="descripcion"
                value={descripcion}
                onChange={onInputChange}
                placeholder=""
              />
            </div>
            <label htmlFor="" className="text-danger">
              {!!descripcionValid && formSumbmitte}
            </label>
          </div>
          <div className="form-group row mt-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSubmit}
              data-bs-dismiss={isFormValid && "modal"}
            >
              {isEditing ? "Guardar Cambios" : "Registrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
