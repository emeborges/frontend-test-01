import { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Modal, Typography } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ModalItem from "../Modal";

export default function SpeedDialButton() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
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
