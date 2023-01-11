import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPlanesActive } from "../../store/Gyn/planes/planesSlice";
import { Table } from "../components";
import { PlanesForm } from "../components/form/PlanesForm";
import { Modal } from "../components/Modal";
import { PlanesTable } from "../components/tableData/PlanesTable";
import { MantenimientoLayout } from "../layout/MantenimientoLayout";
const planesForm = {
  fechaCreacion: "",
      codigoSocio: "",
      cargo: "",
      concepto: "",
      vencimiento: "",
      balance: "",
      precio: "",
      estado: "",
      nota: "",
}

const header =[
  'id',
  'SocioID',
  'CargoID',
  'Precio',
  'Fecha',
  'Vencimiento'
]



export const PlanesPage = () => {
  const dispatch = useDispatch();
  const { Planes: data } = useSelector((state) => state.Planes);

  const [formSumbmitte, setformSumbmitte] = useState(false);

  const onClear = () => {
    setformSumbmitte(false);
    dispatch(clearPlanesActive(planesForm));
  };
  return (
    <MantenimientoLayout>
      <Table header={header}>
          {data.map((dat) => (
            <PlanesTable key={dat.id} dat={dat} />
          ))}
        </Table>
      <Modal onClear={onClear}>
        <PlanesForm
          formSumbmitte={formSumbmitte}
          setformSumbmitte={setformSumbmitte}
        />
      </Modal>
    </MantenimientoLayout>
  );
};
