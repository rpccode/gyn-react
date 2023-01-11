import { useDispatch } from "react-redux";
import { PlanesActivo, setEditng } from "../../../store/Gyn/planes/planesSlice";
import { StarkDelectPlane } from "../../../store/Gyn/planes/thunks";


export const PlanesTable = ({dat}) => {
    const dispatch = useDispatch();
    const onUpdate = () => {
      dispatch(PlanesActivo(dat));
      dispatch(setEditng());
      // dispatch(StarkUpdateSocio(dat));
    };
  
    const onDelect = () => {
      dispatch(PlanesActivo(dat));
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
          dispatch(StarkDelectPlane());
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
        <td>{dat.codigoSocio}</td>
        <td>{dat.cargo}</td>
        <td>{dat.precio}</td>
        <td>{dat.fechaCreacion}</td>
        <td>{dat.vencimiento}</td>
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
}
