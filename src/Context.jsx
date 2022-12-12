// create a context
// Provider
// consumer /usecontext hook

import { Children } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
