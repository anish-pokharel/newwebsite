// import React from "react";
const reducer = (state, action) => {
  if (action.type === "Home_Update") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }
  if (action.type === "About_Update") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }
  //  if (action.type === "GET_SERVICES") {
  //   return {
  //     ...state,
  //     service: action.payload,
  //   };
  // }
  return state;
  About_Update;
};
export default reducer;
