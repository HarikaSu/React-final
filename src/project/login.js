import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./ptroutes";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Email must contain @ symbol.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <div className="password-container" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ flex: 1 }}
          />
          <button 
            type="button" 
            className="eye-icon" 
            onClick={() => {
              setShowPassword(!showPassword);
              if (showPassword) setPassword("");
            }}
            style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;




