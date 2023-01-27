import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom';


function Dashboard() {
    // const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()
    
    async function handleLogOut(){
        // setError('')

        try {
            await logout()
            navigate('/login')
        } catch {
            // setError('Failed to logout') 
        }
    }

  return (
    <div>Dashboard
        <h2>Profile</h2>
        <strong>Email: </strong> {currentUser.email}
        <Link to='update-profile'>Update Profile</Link>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Dashboard