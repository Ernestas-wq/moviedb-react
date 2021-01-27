const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen };

    case 'SEARCH_MOVIE':
      console.log(action.payload);
      return { ...state, searchValue: action.payload };

    default:
      throw new Error('No matching action type');
  }
};
export default reducer;
