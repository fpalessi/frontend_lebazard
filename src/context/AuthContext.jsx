import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setJwt = (newToken) => {
    setToken(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setJwt,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
