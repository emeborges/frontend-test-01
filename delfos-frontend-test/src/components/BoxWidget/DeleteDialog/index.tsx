import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ItemsProps } from "../../../utils/types";
import { MenuItem } from "@mui/material";
import { useStoresInfos } from "../../../hooks/useStoreItems";

interface Props {
  store: ItemsProps;
}

export default function DeleteDialog({ store }: Props) {
  const [open, setOpen] = useState(false);
  const { deleteStore } = useStoresInfos();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    deleteStore(store);
    setOpen(false);
  };

  return (
    <>
      <MenuItem onClick={handleClickOpen}>Deletar</MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmar exclusão?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você tem certeza que deseja deletar o lançamento da loja{" "}
            {store.nameStore}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm} autoFocus>
            Sim, confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
