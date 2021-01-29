const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR': {
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }
    case 'SEARCH_MOVIE': {
      return { ...state, searchValue: action.payload };
    }
    case 'ADD_TO_CART': {
      const delete_id = new Date().getTime().toString();
      const newItem = { ...action.payload, delete_id: delete_id };
      const newCart = {
        ...state.cart,
        items: [...state.cart.items, newItem],
        amount: state.cart.amount + 1,
      };
      return { ...state, cart: newCart };
    }
    case 'REMOVE_FROM_CART': {
      const items = [...state.cart.items];
      const newItems = items.filter(item => item.delete_id !== action.payload);
      const newCart = {
        ...state.cart,
        items: newItems,
        amount: state.cart.amount - 1,
      };
      return { ...state, cart: newCart };
    }

    default:
      throw new Error('No matching action type');
  }
};
export default reducer;
