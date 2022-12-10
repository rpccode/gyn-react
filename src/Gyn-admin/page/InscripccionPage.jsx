import { useSelector } from "react-redux";
import { IncripccionForm } from "../components/form/IncripccionForm"
import { Modal } from "../components/Modal"
import { Table } from "../components/Table"
import { IncripTable } from "../components/tableData/IncripTable";
import { MantenimientoLayout } from "../layout/MantenimientoLayout"

const header = [
  "ID",
  "Cargo",
  "Vencimiento",
  "Periodo",
  "Precio",
  "Acciones",
];
const IncripForm = {
  codigo: "",
  cargo: "",
  vencimiento: "",
  periodo: "",
  precio: "",
  id: "",
};
export const InscripccionPage = () => {
  const { inscripcions: data } = useSelector((state) => state.Inscripcion);

  return (
        <MantenimientoLayout>
            <Table header={header}>
            {data.map((dat) => (
            <IncripTable key={dat.id} dat={dat} />
          ))}
            </Table>
            <Modal data={ IncripForm }>
                <IncripccionForm/>
            </Modal>
        </MantenimientoLayout>
  )
}
