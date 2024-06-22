import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export default function FormContextProvider({ children }) {
  const [images, setImages] = useState([]);

  return (
    <FormContext.Provider value={{ images, setImages }}>
      {children}
    </FormContext.Provider>
  );
}

FormContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
