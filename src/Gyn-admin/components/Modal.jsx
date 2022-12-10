import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { clearCargoActive } from '../../store/cargo/cargoSlice'
import { capitalizarPrimeraLetra } from '../helpers'

export const Modal = ({children, onClear }) => {
  const dispatch = useDispatch()
    const location = useLocation()
    const { pathname } = location
    const titulo = capitalizarPrimeraLetra(pathname.slice(1))


    // const onClear = () =>{
    //       dispatch( clearCargoActive(data) )
    // }
  return (
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registro de { titulo }
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClear}
              ></button>
            </div>
            <div className="modal-body">
                {children}
            </div>
            
          </div>
        </div>
      </div>
  )
}
