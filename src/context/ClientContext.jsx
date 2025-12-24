import { createContext, useContext, useState } from "react";

const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const updateClientData = (data) => {
    setClientData(data);
  };

  const clearClientData = () => {
    setClientData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <ClientContext.Provider value={{ clientData, updateClientData, clearClientData }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }
  return context;
};
