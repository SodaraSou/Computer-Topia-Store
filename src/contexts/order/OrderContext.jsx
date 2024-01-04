import { createContext, useReducer } from "react";
import OrderReducer from "./OrderReducer";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialState = {
    orderList: [],
    orderHistoryList: [],
    order: {},
    orderId: "",
    loading: false,
    openOrder: false,
    totalOrder: 0,
    totalRevenue: 0,
    monthlyOrders: {},
  };
  const [state, orderDispatch] = useReducer(OrderReducer, initialState);

  return (
    <OrderContext.Provider value={{ ...state, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
