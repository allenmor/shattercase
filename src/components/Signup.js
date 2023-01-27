import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // <-- added state variable to keep track of error message
    const {signup} = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        if (password !== confirmPassword) {
            setError("Error: Passwords do not match"); // <-- set error message
            return;
        }
        setError(''); // <-- reset error message

        try {
            await signup(email, password);
            console.log("Signup successful!");
            // redirect user to success page or display success message
            navigate('/')
        } catch (error) {
            setError(error.message); // <-- set error message
        }
    }

    return (
        <>
        <h2>Sign Up</h2>
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
            <p>Have an account? <Link to='/login'>Log In</Link></p>
            {error && <p>{error}</p>} {/* <-- display error message if there is one */}
        </>
    )
}

export default Signup;
