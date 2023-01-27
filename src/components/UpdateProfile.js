import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // <-- added state variable to keep track of error message
  const { currentUser, updateEmail, updatePassword } = useAuth();

  const navigate = useNavigate();

  const handleSubmit =  (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match"); // <-- set error message
      return;
    }
    const promises = [];
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      });
    setError(""); // <-- reset error message
    try {
      // await signup(email, password);
      console.log("Signup successful!");
      // redirect user to success page or display success message
      navigate("/");
    } catch (error) {
      setError(error.message); // <-- set error message
    }
  };

  return (

    <div className="login-container">
      <h2>Update Profile</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            defaultValue={currentUser.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Leave blank to keep the same"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Leave blank to keep the same"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <p>
        <Link to="/">Cancel</Link>
      </p>
      {error && <p>{error}</p>}{" "}
      {/* <-- display error message if there is one */}
    </div>

  );
}

export default UpdateProfile;
