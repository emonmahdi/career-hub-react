// Login.js
import { useState } from "react";
// import { useAuth } from './AuthContext';
import "./Login.css"; // Import the CSS file
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setError(error.code);
          setError(error.message);
          // ..
        });
      setSuccess("Login successful!");
      setError("");
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      setError("Failed to log in. Please check your credentials.", err.message);
      setSuccess("");
    }
    // console.log(setError, setSuccess);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        {error && <p className="login-error">{error}</p>}
        {success && <p className="login-success">{success}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <p>
          New Here! Please Register{" "}
          <Link to="/register" className="text-blue-700 font-bold ml-2 mt-3">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
