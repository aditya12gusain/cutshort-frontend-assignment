import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// context provider
import FormProvider from "./context/Form.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
