const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_MODAL":
      return {
        ...state,
        openOrder: action.payload,
      };
    case "SET_ORDER_LIST":
      return {
        ...state,
        orderList: action.payload,
        loading: false,
      };
    case "SET_ORDER_HISTORY_LIST":
      return {
        ...state,
        orderHistoryList: action.payload,
        loading: false,
      };
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload.order,
        orderId: action.payload.orderId,
      };
    default:
      return state;
  }
};

export default OrderReducer;
