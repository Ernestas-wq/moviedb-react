const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR': {
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }
    case 'SEARCH_MOVIE': {
      return { ...state, searchValue: action.payload };
    }
    case 'ADD_TO_CART': {
      const newCart = {
        ...state.cart,
        items: [...state.cart.items, action.payload],
        amount: state.cart.amount + 1,
      };

      return { ...state, cart: newCart };
    }
    default:
      throw new Error('No matching action type');
  }
};
export default reducer;
