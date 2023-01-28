import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar = ({email}) => {

  const { logout } = useAuth();

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
          navigate('/cases')
      }
  return (
      <div className='nav'>
          <p>{email}</p>
          <p onClick={handleCasesClick}>Cases</p>
          <p onClick={handleUpdateProfileClick}>Update Profile</p>
          <p onClick={handleLogOut}>Logout</p>
      </div>
  );
}

export default NavBar;
