import { AppBar, Box, Toolbar, TextField } from "@mui/material";
import { useStoresInfos } from "../../hooks/useStoreItems";

export default function Navbar() {
  const { searchLocally } = useStoresInfos();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 70,
          }}
          alt="The house from the offer."
          src="/delfos_Intelligent_maintenance.png"
        />
        <TextField
          id="outlined-search"
          label="Pesquisar"
          type="search"
          size="small"
          sx={{
            width: "300px",
          }}
          onChange={(event) => searchLocally(event.target.value)}
        />
      </Toolbar>
    </AppBar>
  );
}
