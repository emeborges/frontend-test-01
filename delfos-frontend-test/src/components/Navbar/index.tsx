import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  alpha,
  TextField,
} from "@mui/material";

export default function Navbar() {
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
          label="Search"
          type="search"
          size="small"
          sx={{
            width: "300px",
          }}
          onChange={(event) => console.log(event.target.value)}
        />
      </Toolbar>
    </AppBar>
  );
}
