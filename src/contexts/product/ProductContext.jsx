import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    loading: false,
    listProduct: [],
    product: {},
  };
  const [state, productDispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
