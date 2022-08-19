import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ItemsProps } from "../utils/types";

const initialStores = [
  {
    nameStore: "Loja da Avenida",
    jan: 332,
    fev: 442,
    mar: 596,
    abr: 962,
    mai: 445,
    jun: 452,
  },
];

interface providerProps {
  children: ReactNode;
}

interface contextProps {
  storesInfos: ItemsProps[];
}
const StoresInfosContext = createContext<contextProps>({} as contextProps);

export function StoresProvider({ children }: providerProps) {
  const [storesInfos, setStoresInfos] = useState<ItemsProps[]>(initialStores);

  function addNewStore() {
    console.log("add");
  }

  function editStore() {
    console.log("add");
  }

  function deleteStore() {
    console.log("del");
  }

  return (
    <StoresInfosContext.Provider value={{ storesInfos }}>
      {children}
    </StoresInfosContext.Provider>
  );
}

export function useStoresInfos() {
  const context = useContext(StoresInfosContext);

  return context;
}
