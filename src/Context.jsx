// create a context
// Provider
// consumer /usecontext hook
// custom hooks complete/
import React, { useContext } from "react";

import { Children } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="anish">{children}</AppContext.Provider>;
};

// GLOBALHOOKS
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };


break 