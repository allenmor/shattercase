import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // <-- changed the function call to login instead of signup

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
      console.log("Login successful!");
      // redirect user to success page or display success message
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Need an account? <Link to='/signup'>Sign Up</Link></p>
      <Link to='/forgot-password'>Forgot Password</Link>
      {error && <p>{error}</p>}
    </>
  );
}
export default Login;
