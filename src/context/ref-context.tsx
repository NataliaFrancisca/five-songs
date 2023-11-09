import { ReactNode, createContext, useState, useContext } from "react";

type RefContextType = {
  refContext: any;
  setRefContext: React.Dispatch<React.SetStateAction<any>>;
};

export const RefContext = createContext<RefContextType | undefined>(undefined);

export const RefContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [refContext, setRefContext] = useState<any>();

  return (
    <RefContext.Provider value={{ refContext, setRefContext }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => {
  const context = useContext(RefContext);
  if (context === undefined) {
    throw new Error("useRefContext deve ser usado dentro de um RefContextProvider");
  }
  return context;
};
