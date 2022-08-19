import { Box, Container, SpeedDial, Typography } from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import BoxWidget from "../components/BoxWidget";
import ControlledOpenSpeedDial from "../components/SpeedDialButton";
import { StoresProvider } from "../hooks/useStoreItems";
import Home from "./home";

const Index: NextPage = () => {
  return (
    <StoresProvider>
      <Home />
    </StoresProvider>
  );
};

export default Index;
