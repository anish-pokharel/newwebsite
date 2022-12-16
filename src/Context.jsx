// create a context
// Provider
// consumer /usecontext hook
// custom hooks complete/
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../src/reducer";
import { Children } from "react";

const AppContext = React.createContext();
const API = "https://thapareactapi.up.railway.app/";
const initialState = {
  name: " ",
  image: " ",
  services: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "Home_Update",
      payload: {
        name: "Anish Pokharel",
        image: "./images/hero.svg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "About_Update",
      payload: {
        name: "Karthik Pokharel",
        image: "./images/about1.svg",
      },
    });
  };
  // to get api data
  const getService = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  // to call api
  useEffect(() => {
    getService(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// GLOBALHOOKS
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
