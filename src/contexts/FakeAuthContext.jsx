/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const intialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };
  }
}

const FAKE_USER = {
  name: "ahmed",
  email: "ahmed@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/150?img=65",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    intialState
  );

  function login(email, password) {
    email === FAKE_USER.email && password === FAKE_USER.password
      ? dispatch({ type: "login", payload: FAKE_USER })
      : alert("Your username or password are not correct !");
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
