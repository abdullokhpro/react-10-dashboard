import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.scss";
import headerIcon from "../../assets/photo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <GiHamburgerMenu />

          <div className="header__left">
            <p className="header__left__text">Jones Ferdinand</p>
            <img src={headerIcon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
