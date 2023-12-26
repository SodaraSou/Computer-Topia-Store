const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
    case "SET_LIST_PRODUCT":
      return {
        ...state,
        listProduct: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
