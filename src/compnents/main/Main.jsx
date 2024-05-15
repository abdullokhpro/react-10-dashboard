import React from "react";
import "./main.scss";
import { NavLink } from "react-router-dom";

const Main = () => {
  let isLogin = localStorage.getItem("x-auth-token");

  return (
    <div className="main">
      <div className="container">
        <div className="main__card">
          <h1 className="main__card__title">Welcome home</h1>
          <ul className="main__card__list">
            <li className="main__card__item">
              <NavLink className="main__card__link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="main__card__item">
              <NavLink
                className="main__card__link"
                to={isLogin ? "/admin/products" : "/login"}
              >
                {isLogin ? "Account" : "Log in"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
