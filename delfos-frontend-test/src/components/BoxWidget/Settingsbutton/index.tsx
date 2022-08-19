import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalItem from "../../ModalItem";
import { ItemsProps } from "../../../utils/types";
import DeleteDialog from "../DeleteDialog";

interface Props {
  store: ItemsProps;
}

export default function Settingsbutton({ store }: Props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        size="small"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenModal}>Editar</MenuItem>
        <DeleteDialog store={store} />
      </Menu>
      <ModalItem
        open={openModal}
        handleClose={handleCloseModal}
        initialVal={store}
      />
    </>
  );
}
