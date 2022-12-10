import { useSelector } from "react-redux";

export const PlanesForm = () => {
    const fechaAct =  Date.now()
  const { cargos } = useSelector((state) => state.cargo);

    
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
              // value={periodo}
              name="periodo"
              // onChange={onInputChange}
            >
              <option value="Dia">A</option>
              <option value="Semanal">S</option>
              <option value="Mes">DB</option>
            </select>
          </div>
          <div className="col-6">
          <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
             Fecha
            </label>
            <input
              type="text"
              className="form-control"
              name="codigo"
              id="codigo"
              value={ fechaAct }
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
              name="codigo"
              id="codigo"
              placeholder=""
              // value={cargo.id ? cargo.id : cargos.length + 1}
              // onChange={onInputChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              disabled
              placeholder=""
              // value={cargo.id ? cargo.id : cargos.length + 1}
              // onChange={onInputChange}
            />
          </div>
          
          <label htmlFor="" className="text-danger">
            {/* {!!codigoValid && formSumbmitte} */}
          </label>
        </div>
        <div className="form-group row">
          <label htmlFor="vencimiento" className="col-sm-1-12 col-form-label">
            Cargo
          </label>
          
          <div className="col">
            <select
              className="form-control my-1 mr-sm-2"
              // value={periodo}
              name="periodo"
              // onChange={onInputChange}
            >
              <option>--Selecciona--</option>
              {cargos.map((cargo) => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.descripccion}
                </option>
              ))}
            </select>
            <label htmlFor="" className="text-danger">
              {/* {!!periodoValid && formSumbmitte} */}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="descripccion" className="col-sm-1-12 col-form-label">
            Concepto
          </label>
          <div className="col-sm-1-12">
            <input
              type="text"
              className="form-control"
              name="descripccion"
              id="descripccion"
              placeholder=""
              // value={descripccion}
              // onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {/* {!!descripccionValid && formSumbmitte} */}
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
              // value={precio}
              // onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {/* {!!precioValid && formSumbmitte} */}
            </label>
          </div>
          <div className="col-6">
          <label htmlFor="precio" className="col-sm-1-12 col-form-label">
            Balance
          </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              name="descuento"
              placeholder="Descuento"
              // value={descuento}
              // onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-group row">

          <div className="col-6">
          <label htmlFor="precio" className="col-sm-1-12 col-form-label">
            Vence
          </label>
            <input
              type="text"
              className="form-control"
              name="precio"
              id="precio"
              disabled
              placeholder="12/12/22"
              // value={precio}
              // onChange={onInputChange}
            />
            <label htmlFor="" className="text-danger">
              {/* {!!precioValid && formSumbmitte} */}
            </label>
          </div>
          <div className="col-6">
          <label htmlFor="precio" className="col-sm-1-12 col-form-label">
                Nota
          </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              name="Nota"
              placeholder="Nota"
              // value={descuento}
              // onChange={onInputChange}
            />
          </div>
        </div>
      </form>
      <div className="row p-2">
      <button
        type="button"
        className="btn btn-primary"
        //   onClick={onSubmit}
        data-bs-dismiss="modal"
      >
            Guardar
            {/* {isEditing ? "Guardar Cambios" : "Registrar"} */}
      </button>
      </div>
    </div>
  );
};
