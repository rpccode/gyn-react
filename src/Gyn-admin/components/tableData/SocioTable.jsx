import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { setEditing, SocioActivo } from "../../../store/socio/SocioSlice";
import {
  StarkDelectSocio,
  StarkUpdateSocio,
} from "../../../store/socio/thunks";

export const SocioTable = ({ dat }) => {
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(SocioActivo(dat));
    dispatch(setEditing());
    // dispatch(StarkUpdateSocio(dat));
  };

  const onDelect = () => {
    dispatch(SocioActivo(dat));
    Swal.fire({
      title: "Estas Seguro De Borrar esta Nota?",
      text: "Esta Accion No Puede ser Revertida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, Borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(StarkDelectSocio());
        Swal.fire(
          "Borrado!",
          "Tu Nota A sido Borrada Correctamente.",
          "success"
        );
      }
    });
  };
  return (
    <tr>
      <td>{dat.id}</td>
      <td>{dat.nombre + " " + dat.apellido}</td>
      <td>{dat.sexo}</td>
      <td>{dat.telefono}</td>
      <td>{dat.fechaCreacion}</td>
      <td>{dat.estado}</td>
      <td>
        <div className="btn-group me-1">
          <button
            type="button"
            className="btn btn-md btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={onUpdate}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-md btn-outline-danger"
            onClick={onDelect}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};
