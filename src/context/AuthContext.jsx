import { useState, useContext, createContext } from "react";

const USUARIOS_FAKE = [
  { id: 1, usuario: import.meta.env.VITE_ADMIN_USER, contrasenia: import.meta.env.VITE_ADMIN_PASS, rol: "admin", nombre: "AlumnoNico" },
  { id: 2, usuario: import.meta.env.VITE_ADMIN2_USER, contrasenia: import.meta.env.VITE_ADMIN2_PASS, rol: "admin", nombre: "ProfeJoaco" },
  { id: 3, usuario: import.meta.env.VITE_JAQUE_USER, contrasenia: import.meta.env.VITE_JAQUE_PASS, rol: "usuario", nombre: "Jaque" },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  // 🔹 Inicializamos el estado leyendo localStorage
  const [usuario, setUsuario] = useState(() => {
    const storedUsername = localStorage.getItem("authUser");
    if (storedUsername) {
      return USUARIOS_FAKE.find(u => u.usuario === storedUsername) || null;
    }
    return null;
  });

  const login = (nombreUsuario, contrasenia) => {
    const usuarioLogin = USUARIOS_FAKE.find(
      (u) => u.usuario === nombreUsuario && u.contrasenia === contrasenia
    );

    if (usuarioLogin) {
      const token = `fake-token-${nombreUsuario}`;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", usuarioLogin.usuario);

      setUsuario(usuarioLogin);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
