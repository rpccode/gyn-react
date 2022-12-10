import { memo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCargoActive } from "../../store/cargo/cargoSlice";
import { StarkObtenerCargos } from "../../store/cargo/thunks";
import { CargoForm } from "../components/form/CargoForm";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";
import { CargoTable } from "../components/tableData/cargoTable";
import { MantenimientoLayout } from "../layout/MantenimientoLayout";
const header = [
  "ID",
  "Descripcion",
  "Vencimiento",
  "Periodo",
  "Precio",
  "Descuento",
  "Acciones",
];
const cargoForm = {
  codigo: "",
  descripccion: "",
  vencimiento: "",
  periodo: "",
  precio: "",
  descuento: "",
  id: "",
};
export const CargoPage = () => {
  const [formSumbmitte, setformSumbmitte] = useState(false);

const dispatch = useDispatch()
  const { cargos: data } = useSelector((state) => state.cargo);
  const onClear = () =>{
    setformSumbmitte(false)
    dispatch( clearCargoActive(cargoForm) )
}
  return (
    <>
      <MantenimientoLayout>
        <Table header={header}>
          {data.map((dat) => (
            <CargoTable key={dat.id} dat={dat} />
          ))}
        </Table>
        <Modal onClear={onClear}>
          <CargoForm formSumbmitte={ formSumbmitte} setformSumbmitte={ setformSumbmitte } />
        </Modal>
      </MantenimientoLayout>
    </>
  );
};
