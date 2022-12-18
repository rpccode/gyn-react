import { SocioForm } from "../components/form/SocioForm";
import { Table, Modal } from "../components";
import { MantenimientoLayout } from "../layout/MantenimientoLayout";
import { SocioView } from "../views/SocioView";
import { useState } from "react";
import { clearSocioActive } from "../../store/socio/SocioSlice";
import { useDispatch, useSelector } from "react-redux";
import { SocioTable } from "../components/tableData/SocioTable";
const SocioForm1 = {
  id: "",
  fechaCreacion: "",
  nombre: "",
  apellido: "",
  sexo: "",
  fechaNacimiento: "",
  tipoDoc: "",
  numDoc: "",
  telefono: "",
  celular: "",
  direccion: "",
  estado: "",
};
const header = [
  "ID",
  "Nombre Completo",
  "Sexo",
  "Telefono",
  "Fecha Creacion",
  "Estado",
  "Acciones",
];
export const SocioPage = () => {
  const dispatch = useDispatch();
  const { Socios: data } = useSelector((state) => state.Socio);

  const [formSumbmitte, setformSumbmitte] = useState(false);

  const onClear = () => {
    setformSumbmitte(false);
    dispatch(clearSocioActive(SocioForm1));
  };
  return (
    <>
      <MantenimientoLayout>
        {/* <SocioView /> */}
        <Table header={header}>
          {data.map((dat) => (
            <SocioTable key={dat.id} dat={dat} />
          ))}
        </Table>
        <Modal onClear={onClear}>
          <SocioForm
            formSumbmitte={formSumbmitte}
            setformSumbmitte={setformSumbmitte}
          />
        </Modal>
      </MantenimientoLayout>
    </>
  );
};
