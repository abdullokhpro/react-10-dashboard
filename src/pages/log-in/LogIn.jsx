import axios from "../../api";
import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let user = { username, password };
    setLoading(true);

    axios
      .post("/auth/login", user)
      .then((res) => {
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/products");
      })
      .catch((err) => {
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="log-in">
      <div className="container log-in__container">
        <form onSubmit={handleLogin} className="log-in__form">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="log-in__input"
            type="text"
            value={username}
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            className="log-in__input"
            type="password"
            value={password}
          />
          <button disabled={loading} className="log-in__form__btn">
            {loading ? "Loading..." : "Log in"}
          </button>
        </form>
        <button onClick={() => navigate(-1)} className="log-in__btn ">
          Go back
        </button>
      </div>
    </div>
  );
};

export default LogIn;
