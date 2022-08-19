import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ModalItem from "../ModalItem";

export default function SpeedDialButton() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<AddBusinessIcon />}
          tooltipTitle={"Adicionar Loja"}
          onClick={handleOpenModal}
        />
      </SpeedDial>
      <ModalItem open={openModal} handleClose={handleCloseModal} />
    </>
  );
}
