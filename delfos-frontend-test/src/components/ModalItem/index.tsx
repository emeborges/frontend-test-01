import Box from "@mui/material/Box";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { ItemsProps } from "../../utils/types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useStoresInfos } from "../../hooks/useStoreItems";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialVal?: ItemsProps | undefined;
}

export default function ModalItem({ open, handleClose, initialVal }: Props) {
  const { addNewStore, editStore } = useStoresInfos();
  const initialValues = {
    nameStore: initialVal?.nameStore || "",
    jan: initialVal?.jan || 0,
    fev: initialVal?.fev || 0,
    mar: initialVal?.mar || 0,
    abr: initialVal?.abr || 0,
    mai: initialVal?.mai || 0,
    jun: initialVal?.jun || 0,
    id: initialVal?.id || null,
  };

  const formSchema = Yup.object().shape({
    nameStore: Yup.string()
      .required("Obrigatório")
      .min(2, "O nome deve ter pelo menos 2 caracteres"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      initialVal == undefined ? addNewStore(values) : editStore(values);
      handleClose();
      resetForm();
    },
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#fff",
            boxShadow: 24,
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="h6" align="center" component="h2">
            {initialVal == undefined ? "Adicionar Nova" : "Editar Loja"}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="nameStore"
                name="nameStore"
                label="Nome da Loja"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.nameStore}
                error={
                  formik.touched.nameStore && Boolean(formik.errors.nameStore)
                }
                helperText={formik.touched.nameStore && formik.errors.nameStore}
              />
              <Typography
                align={"center"}
                sx={{
                  mt: 2,
                }}
              >
                Descreva seu faturamento abaixo:
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="jan"
                  size="small"
                  sx={{ width: "10rem" }}
                  name="jan"
                  label="Janeiro"
                  type={"number"}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.jan}
                />
                <TextField
                  id="fev"
                  size="small"
                  sx={{ width: "10rem" }}
                  name="fev"
                  label="Fevereiro"
                  type={"number"}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.fev}
                />
              </Box>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="mar"
                  size="small"
                  sx={{ width: "10rem" }}
                  name="mar"
                  label="Março"
                  type={"number"}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.mar}
                />
                <TextField
                  id="abr"
                  size="small"
                  sx={{ width: "10rem" }}
                  name="abr"
                  label="Abril"
                  type={"number"}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.abr}
                />
              </Box>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="mai"
                  size="small"
                  sx={{ width: "10rem" }}
                  name="mai"
                  label="Maio"
                  type={"number"}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.mai}
                />
                <TextField
                  id="jun"
                  size="small"
                  sx={{ width: "10rem" }}
                  name="jun"
                  label="Junho"
                  type={"number"}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.jun}
                />
              </Box>
              <Box
                sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="outlined" onClick={handleClose}>
                  Fechar Modal
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Enviar
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
