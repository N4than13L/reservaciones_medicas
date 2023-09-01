import { Global } from "helpers/global";
import React from "react";
import { useState, useEffect, createContext } from "react";

const AuthConext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [counters, setCounters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async (async) => {
    // Sacar datos del usuario identificado del localStorage.
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      setLoading(false);
      return false;
    }

    // Transformar datos en objeto de javascript.
    const userObj = JSON.parse(user);
    const UserId = userObj.id;
    /* hacer peticion ajax al backend para que me compruebe si esta en la base de datos.*/
    const request = await fetch(Global.url + "usuario/perfil/" + UserId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await request.json();
    // console.log(data.user);

    // setear datos del usuario
    setAuth(data.user);
  };

  return (
    <AuthConext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthConext.Provider>
  );
};

export default AuthConext;
