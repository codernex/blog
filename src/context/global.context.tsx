import { SetStateAction, createContext, useContext, useState } from "react";

type GlobalContext = {
  isWriteModalOpen: boolean;
  setWriteModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContext>({
  isWriteModalOpen: false,
  setWriteModalOpen: () => {},
});

export default function GlobalProvider({ children }: React.PropsWithChildren) {
  const [isWriteModalOpen, setWriteModalOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isWriteModalOpen, setWriteModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
