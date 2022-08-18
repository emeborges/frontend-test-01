import { Box, Container, SpeedDial, Typography } from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import ControlledOpenSpeedDial from "../components/SpeedDial";

const Home: NextPage = () => {
  return (
    <Box width={"100%"} minHeight={"10"}>
      <Navbar />
      <Container maxWidth={"xl"}>
        <ControlledOpenSpeedDial />
        asdfasdf
      </Container>
    </Box>
  );
};

export default Home;
