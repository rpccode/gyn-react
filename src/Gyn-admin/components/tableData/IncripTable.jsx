import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { inscrpActivo, setEditng } from '../../../store/Gyn/inscripccion/inscripccionSlice';
import { StarkDelectIncripcion } from '../../../store/Gyn/inscripccion/thunks';

export const IncripTable = ({dat}) => {
    const dispatch = useDispatch();
    const onUpdate = () => {
      dispatch(inscrpActivo(dat));
      dispatch(setEditng());
      // dispatch( StarkUpdateCargo(dat))
    };
  
    const onDelect = () => {
      dispatch(inscrpActivo(dat));
      Swal.fire({
          title: 'Estas Seguro Que lo Desea Eliminar?',
          text: "Esta Accion No Puede ser Revertida!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'SI, Borrar!'
        }).then((result) => {
          if (result.isConfirmed) {
  
            dispatch( StarkDelectIncripcion() )
            Swal.fire(
              'Borrado!',
              'Borrada Correctamente.',
              'success'
            )
            
          }
        })  
    }
  return (
    <tr>
      <td>{dat.id}</td>
      <td>{dat.cargo}</td>
      <td>{dat.vencimiento}</td>
      <td>{dat.periodo}</td>
      <td>{dat.precio}</td>
      
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
  )
    
}
