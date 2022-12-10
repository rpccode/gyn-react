import { SocioForm } from "../components/form/SocioForm";
import { Table , Modal } from "../components";
import { MantenimientoLayout } from "../layout/MantenimientoLayout";
import { SocioView } from "../views/SocioView";

export const SocioPage = () => {
  return (
    <>
      <MantenimientoLayout>
        <SocioView/>
        {/* <Table /> */}
        <Modal>
          <SocioForm/>
        </Modal>
      </MantenimientoLayout>
    </>
  );
};
