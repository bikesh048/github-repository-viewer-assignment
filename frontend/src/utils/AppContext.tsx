import { ReactNode, createContext, useState } from 'react';

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValue {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<AppContextValue | undefined>(undefined);
const AppContext: React.FC<AppContextProps> = (props) => {
  const [search, setSearch] = useState(false);
  return (
    <Context.Provider value={{ search, setSearch }}>
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
