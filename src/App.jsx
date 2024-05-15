import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LogIn from "./pages/log-in/LogIn";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageProducts from "./pages/admin/manage-products/ManageProducts";
import ManageUsers from "./pages/admin/manage-users/ManageUsers";
import ManagePosts from "./pages/admin/manage-posts/ManagePosts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="products" element={<ManageProducts />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="posts" element={<ManagePosts />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
