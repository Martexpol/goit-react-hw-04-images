import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import FormContextProvider from "./components/FormContextProvider/FormContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>,
);