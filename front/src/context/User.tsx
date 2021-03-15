import React from "react";

const UserContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: {}, dispatch: () => {} });

type State =
  | {}
  | {
      username: string;
      JWT: string;
    };

type Action = {
  type: "login";
  payload: { username: string; jwt: string };
};

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case "login":
      return { ...action.payload };
    default:
      return { ...state };
  }
}

export const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, {});
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
