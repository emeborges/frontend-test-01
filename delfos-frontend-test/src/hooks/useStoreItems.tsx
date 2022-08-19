import { createContext, ReactNode, useContext, useState } from "react";
import { ItemsProps } from "../utils/types";

const initialStores = [
  {
    id: 1,
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
  searchStoresInfos: ItemsProps[];
  addNewStore: (values: ItemsProps) => void;
  editStore: (values: ItemsProps) => void;
  deleteStore: (values: ItemsProps) => void;
  searchLocally: (searchTerm: string) => void;
  load: boolean;
  searchTerm: string;
}
const StoresInfosContext = createContext<contextProps>({} as contextProps);

export function StoresProvider({ children }: providerProps) {
  const [storesInfos, setStoresInfos] = useState<ItemsProps[]>(initialStores);
  const [searchStoresInfos, setSearchStoresInfos] = useState<ItemsProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [idStores, setIdStores] = useState<number>(2);
  const [load, setLoad] = useState<boolean>(false);

  function addNewStore(values: ItemsProps) {
    setLoad(true);
    const updateStoresInfos = [...storesInfos];
    let idValue = idStores;
    const newStore = { ...values, id: idValue };

    updateStoresInfos.push(newStore);

    setIdStores(idValue + 1);
    setStoresInfos(updateStoresInfos);

    setTimeout(() => setLoad(false), 500);
  }

  function editStore(values: ItemsProps) {
    setLoad(true);
    const updateStoresInfos = [...storesInfos];
    const indexStoreUpdate = updateStoresInfos.findIndex(
      (store) => store.id == values.id
    );
    updateStoresInfos.splice(indexStoreUpdate, 1, values);

    setStoresInfos(updateStoresInfos);
    setTimeout(() => setLoad(false), 500);
  }

  function deleteStore(values: ItemsProps) {
    setLoad(true);
    const updateStoresInfos = [...storesInfos];
    const indexStoreUpdate = updateStoresInfos.findIndex(
      (store) => store.id == values.id
    );
    updateStoresInfos.splice(indexStoreUpdate, 1);
    setStoresInfos(updateStoresInfos);
    setTimeout(() => setLoad(false), 500);
  }

  function searchLocally(searchTerm: string) {
    setLoad(true);
    const matchStores = storesInfos.filter((stores) =>
      stores
        .nameStore!.toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    setSearchTerm(searchTerm);
    setSearchStoresInfos(matchStores);
    setTimeout(() => setLoad(false), 500);
  }

  return (
    <StoresInfosContext.Provider
      value={{
        storesInfos,
        addNewStore,
        editStore,
        deleteStore,
        load,
        searchStoresInfos,
        searchLocally,
        searchTerm,
      }}
    >
      {children}
    </StoresInfosContext.Provider>
  );
}

export function useStoresInfos() {
  const context = useContext(StoresInfosContext);

  return context;
}
