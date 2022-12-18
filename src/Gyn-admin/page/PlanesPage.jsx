import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearPlanesActive } from "../../store/Gyn/planes/planesSlice";
import { PlanesForm } from "../components/form/PlanesForm";
import { Modal } from "../components/Modal";
import { MantenimientoLayout } from "../layout/MantenimientoLayout";

export const PlanesPage = () => {
  const dispatch = useDispatch();

  const [formSumbmitte, setformSumbmitte] = useState(false);

  const onClear = () => {
    setformSumbmitte(false);
    dispatch(clearPlanesActive(SocioForm1));
  };
  return (
    <MantenimientoLayout>
      <Modal onClear={onClear}>
        <PlanesForm
          formSumbmitte={formSumbmitte}
          setformSumbmitte={setformSumbmitte}
        />
      </Modal>
    </MantenimientoLayout>
  );
};
