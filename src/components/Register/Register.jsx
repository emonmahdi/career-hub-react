// Register.js
import { useState } from "react";
import "./Register.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";

function Register() {
  const { register, user } = useAuth();
  console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // try {
    //   await register(email, password);
    // } catch (error) {
    //   setError(error.message);
    // }
    try {
      await register(email, password)
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

      setSuccess("Registration successful!");
      setError("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2 className="register-title">Create Account</h2>
        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">{success}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="register-input"
        />
        <button type="submit" className="register-button">
          Register
        </button>
        <br />
        <p>
          Already Have Account{" "}
          <Link className="text-blue-700 font-bold ml-2 pt-3" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
