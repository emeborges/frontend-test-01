import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import BoxWidget from "../../components/BoxWidget";
import SpeedDialButton from "../../components/SpeedDialButton";
import { useStoresInfos } from "../../hooks/useStoreItems";
import CircularLoading from "../../components/CircularLoading";

const Home: NextPage = () => {
  const { storesInfos, searchStoresInfos, load, searchTerm } = useStoresInfos();

  return (
    <Box width={"100%"} minHeight={"10"}>
      <Navbar />
      <Container
        maxWidth={"xl"}
        sx={{
          padding: "1rem",
        }}
      >
        {load ? (
          <CircularLoading />
        ) : (
          <>
            <SpeedDialButton />
            {searchTerm == "" ? (
              storesInfos.map((store, key) => (
                <BoxWidget key={key} store={store} />
              ))
            ) : searchStoresInfos.length > 0 ? (
              searchStoresInfos!.map((store, key) => (
                <BoxWidget key={key} store={store} />
              ))
            ) : (
              <>
                <Typography
                  textAlign={"center"}
                  variant="h5"
                  sx={{ marginTop: 2 }}
                >
                  Nenhum item encontrado..
                </Typography>
                <Typography textAlign="center">
                  Por favor, tente novamente
                </Typography>
              </>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Home;
