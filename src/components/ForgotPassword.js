import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useAuth(); // <-- changed the function call to login instead of signup



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        setError('')
      await resetPassword(email)
      console.log("Password Reset successful!");
      // redirect user to success page or display success message
      setError('Check inbox for further instructions')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <h2>Password Reset</h2>
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
        <button type="submit">Reset Password</button>
      </form>
      <p>Need an account? <Link to='/signup'>Sign Up</Link></p>
      <Link to='/login'>Log In</Link>
      {error && <p>{error}</p>}
    </>
  );
}
export default ForgotPassword;
