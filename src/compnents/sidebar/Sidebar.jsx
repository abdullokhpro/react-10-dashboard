import React, { memo } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiMiniCube } from "react-icons/hi2";
import { MdIncompleteCircle } from "react-icons/md";
import { MdFiberSmartRecord } from "react-icons/md";
import { MdOutlineDevicesFold } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__intro">
        <HiMiniCube className="sidebar__intro__cube" />

        <h2 className="sidebar__title">Dashboard</h2>
      </div>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"products"}>
            <MdIncompleteCircle />
            Products
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"users"}>
            <MdOutlineDevicesFold />
            Users
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"posts"}>
            <MdFiberSmartRecord />
            Posts
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/"}>
            Contacts
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/"}>
            Agents
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/"}>
            Articles
          </NavLink>
        </li>
      </ul>

      <div className="sidebar__buttons">
        <button className="sidebar__logout" onClick={handleLogOut}>
          <RxExit />
          Log out
        </button>
        <button className="sidebar__back" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
          Back
        </button>
      </div>
    </div>
  );
};

export default memo(Sidebar);
