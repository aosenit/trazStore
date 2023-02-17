import { createContext, useContext, useEffect, useReducer } from "react";

interface AuthAction {
  type: string;
  payload: any;
}

interface AuthState {
  user: any;
}

export const Auth = createContext<any>(null);

const reducer = (state: AuthState, action: AuthAction) => {
  const { type, payload } = action;
  switch (type) {
    case "login":
      localStorage.setItem("user", JSON?.stringify(payload));
      return {
        user: payload,
      };

    case "logout":
      localStorage.removeItem("user");
      return { user: null };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user) dispatch({ type: "login", payload: user });
  }, []);

  return (
    <Auth.Provider value={{ ...state, dispatch }}>{children}</Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
