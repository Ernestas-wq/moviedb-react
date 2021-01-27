import React, { useContext, useReducer, useEffect, useState } from 'react';
import reducer from './reducer';
import useFetchMovies from './utils/useFetchMovies';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  isSidebarOpen: false,
  searchValue: 'happy',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data: movies, error, isLoading } = useFetchMovies(`&s=${state.searchValue}`);
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };
  const searchMovie = value => {
    dispatch({ type: 'SEARCH_MOVIE', payload: value });
  };

  console.log(process.env.REACT_APP_MOVIE_API_KEY);
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        movies,
        error,
        isLoading,
        searchMovie,
        isHomeOpen,
        setIsHomeOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
