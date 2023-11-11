import React from "react";

const Loader = (props) => {
  const { status } = props;
  return (
    <>
      {status ? (
        <div className="loader">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
