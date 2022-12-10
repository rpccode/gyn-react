import React from 'react'

export const CuerposForm = () => {
  return (
    <div class="container">
    <form>
    < div className="form-group row ">
      <div className="col-6">
        <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
         Codigo
        </label>
        <input
          type="text"
          className="form-control"
          name="codigo"
          id="codigo"
          disabled
          placeholder=""
          // value={cargo.id ? cargo.id : cargos.length + 1}
          // onChange={onInputChange}
        />
      </div>
      <div className="col-6">
      <label htmlFor="codigo" className="col-sm-1-12 col-form-label">
         Nombre
        </label>
        <input
          type="text"
          className="form-control"
          name="codigo"
          id="codigo"
          disabled
          placeholder=""
          // value={cargo.id ? cargo.id : cargos.length + 1}
          // onChange={onInputChange}
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="">Nombre:</label>
      <input type="text" class="form-control" name="nombre" id="" aria-describedby="helpId" placeholder=""/>
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="form-group row">
      <label for="">Descripcion:</label>
      <input type="text" class="form-control" name="Descripcion" id="" aria-describedby="helpId" placeholder=""/>
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    {/* <Table header={header}/>         */}
    </form>

</div>
  )
}
