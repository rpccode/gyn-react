import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleartipoPagoActive } from "../../store/Gyn/tipopago/tipoPagoSlice";
import { TipoPago } from "../components/form/tipoPago";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";
import { TipoPagoTable } from "../components/tableData/TipoPagoTable";
import { MantenimientoLayout } from "../layout/MantenimientoLayout";
const header = ["ID", "Descripcion"];
const tipoPagoForm = {
  codigo: "",
  descripccion: "",
};

export const TipoPagoPage = () => {
  const dispatch = useDispatch();

  const [formSumbmitte, setformSumbmitte] = useState(false);
  const { tipoPagos: data } = useSelector((state) => state.TipoPago);
  const onClear = () => {
    setformSumbmitte(false);
    dispatch(cleartipoPagoActive(tipoPagoForm));
  };
  return (
    <MantenimientoLayout>
      <Table header={header}>
        {data.map((dat) => (
          <TipoPagoTable key={dat.id} dat={dat} />
        ))}
      </Table>
      <Modal onClear={onClear}>
        <TipoPago
          formSumbmitte={formSumbmitte}
          setformSumbmitte={setformSumbmitte}
        />
      </Modal>
    </MantenimientoLayout>
  );
};
