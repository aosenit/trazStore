import {
  ReactComponentElement,
  createContext,
  useContext,
  useState,
} from "react";

interface ITheme {
  theme: string;
  setTheme: (theme: string) => void;
}

const initialState = {
  theme: "light",
  setTheme: () => {},
};

const Theme = createContext<ITheme>(initialState);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);
