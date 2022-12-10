import React from "react";
import { useDispatch } from "react-redux";
import { CargoActivo, setEditing } from "../../../store/cargo/cargoSlice";
import Swal from "sweetalert2";
import { StarkDelectCargo } from "../../../store/cargo/thunks";


export const CargoTable = ({ dat }) => {
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(CargoActivo(dat));
    dispatch(setEditing());
    // dispatch( StarkUpdateCargo(dat))
  };

  const onDelect = () => {
    dispatch(CargoActivo(dat));
    Swal.fire({
        title: 'Estas Seguro De Borrar esta Nota?',
        text: "Esta Accion No Puede ser Revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, Borrar!'
      }).then((result) => {
        if (result.isConfirmed) {

          dispatch( StarkDelectCargo() )
          Swal.fire(
            'Borrado!',
            'Tu Nota A sido Borrada Correctamente.',
            'success'
          )
          
        }
      })  
  

  };
  return (
    <tr>
      <td>{dat.id}</td>
      <td>{dat.descripccion}</td>
      <td>{dat.vencimiento}</td>
      <td>{dat.periodo}</td>
      <td>{dat.precio}</td>
      <td>{dat.descuento}</td>
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
