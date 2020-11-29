import React from "react";
import NavMenu from "./NavMenu";
import logo from "./mp_logo.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <img src={logo} alt="" />
          <NavMenu />
        </div>
      </header>
    );
  }
}

export default Header;
