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
    case "SET_TOTAL":
      return {
        ...state,
        totalOrder: action.payload.totalOrdered,
        totalRevenue: action.payload.totalRevenue,
        totalIncome: action.payload.totalIncome,
      };
    case "SET_ORDER_TOTAL":
      return {
        ...state,
        dailyOrders: action.payload.dailyOrders,
        monthlyOrders: action.payload.monthlyOrders,
        weeklyOrders: action.payload.weeklyOrders,
        weeklyIncomes: action.payload.weeklyIncomes,
        weeklyRevenues: action.payload.weeklyRevenues,
        monthlyIncomes: action.payload.monthlyIncomes,
        monthlyRevenues: action.payload.monthlyRevenues,
        dailyRevenues: action.payload.dailyRevenues,
        dailyIncomes: action.payload.dailyIncomes,
      };
    default:
      return state;
  }
};

export default OrderReducer;
