import { Box, Container, SpeedDial, Typography } from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import BoxWidget from "../../components/BoxWidget";
import SpeedDialButton from "../../components/SpeedDialButton";
import { useStoresInfos } from "../../hooks/useStoreItems";

const Home: NextPage = () => {
  const { storesInfos } = useStoresInfos();

  return (
    <Box width={"100%"} minHeight={"10"}>
      <Navbar />
      <Container
        maxWidth={"xl"}
        sx={{
          padding: "1rem",
        }}
      >
        <SpeedDialButton />
        {storesInfos.map((store, key) => (
          <BoxWidget key={key} store={store} />
        ))}
      </Container>
    </Box>
  );
};

export default Home;
