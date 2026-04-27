/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Daniel - Added comment tracking
-- 2026-03-26 : Daniel - Added Login css
*/

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../css/Login.css";
import logo from "../images/logo.png";

const Login = () => {
  const { login } = useAuth(); // ✅ ALWAYS at top

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    login(data); // ✅ use inside function
  };

  return (
    <div className="login">
      <img src={logo} id="logo" alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="bubbleinput"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bubbleinput"
        />
        <button type="submit" id="login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
