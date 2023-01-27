import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {signup} = useAuth() // <-- use destructuring to access the signup function directly

  
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
          console.error("Error: Passwords do not match");
          return;
        }
    
        try {
          await signup(email, password);
          console.log("Signup successful!");
          // redirect user to success page or display success message
        } catch (error) {
          console.error(error);
          // display error message
        }
      }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default Signup;
