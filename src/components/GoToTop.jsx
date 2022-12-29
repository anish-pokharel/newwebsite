import React from "react";

const gotoBtn = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const GoToTop = () => {
  return (
    <div className="top-btn" onClick={gotoBtn}>
      GoToTop
    </div>
  );
};

export default GoToTop;
