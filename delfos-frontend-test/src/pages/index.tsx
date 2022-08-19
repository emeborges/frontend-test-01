import type { NextPage } from "next";
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
