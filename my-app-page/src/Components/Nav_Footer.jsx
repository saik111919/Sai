import React from "react";
import NavModal from "./NavModal";

const NavFooter = (props) => {
  const { DATA } = props;
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <div className="center">
            <span className="navbar-text fw-bold">My App</span>
          </div>
          <NavModal />
        </div>
      </nav>
      <div className="container">
        <DATA />
      </div>
      <footer>Footer</footer>
    </>
  );
};

export default NavFooter;
