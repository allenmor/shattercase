import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar = ({email}) => {

  const { logout, currentUser } = useAuth();

    const navigate = useNavigate()

    function handleUpdateProfileClick() {
        navigate('/update-profile')
    }

    async function handleLogOut() {
        try {
          await logout();
          navigate("/login");
        } catch {
          // handle error
        }
      }
      function handleCasesClick() {
          navigate('/iphone11')
      }
  return (
      <div className='nav'>
          <p>{email}</p>
          <p onClick={handleCasesClick}>Cases</p>
          {currentUser ? <p onClick={handleUpdateProfileClick}>Update Profile</p>: ''}
          <p onClick={handleLogOut}>{currentUser ? 'Log Out': 'Log In'}</p>
      </div>
  );
}

export default NavBar;
