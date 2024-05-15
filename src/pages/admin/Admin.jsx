import React from "react";
import Sidebar from "../../compnents/sidebar/Sidebar";
import "./admin.scss";
import { Outlet } from "react-router-dom";
import Header from "../../compnents/header/Header";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
