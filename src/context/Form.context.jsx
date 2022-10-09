import React, { useState, createContext } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    workspaceType: "myself",
  });

  const handleFormUpdate = (event) => {
    const name = event.target.name;
    setData({ ...data, [name]: event.target.value });
  };

  const handleWorkspaceType = (name) => {
    setData({ ...data, workspaceType: name });
  };

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        handleFormUpdate,
        handleWorkspaceType,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
