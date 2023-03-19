import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

const NavBar = ({email}) => {

  // const { logout, currentUser } = useAuth();

    // const navigate = useNavigate()

    // function handleUpdateProfileClick() {
    //     navigate('/update-profile')
    // }

    // async function handleLogOut() {
    //     try {
    //       await logout();
    //       navigate("/login");
    //     } catch {
    //       // handle error
    //     }
    //   }
      // function handleCasesClick() {
      //     navigate('/iphone11')
      // }
      function handleCallClick() {
        window.location.href = `tel:4132734641}`;
      }
  return (
      <div className='nav'>
          {/* <p>{email}</p> */}
          {/* <p onClick={handleCasesClick}>Cases</p> */}
          {/* {currentUser ? <p onClick={handleUpdateProfileClick}>Update Profile</p>: ''} */}
          {/* <p onClick={handleLogOut}>{currentUser ? 'Log Out': 'Log In'}</p> */}
          <h1>SHATTER & CASE</h1>
          <i onClick={handleCallClick} className="fa fa-phone" style={{
            fontSize: '24px', 
            backgroundColor: 'black', 
            padding: '10px',
            borderRadius: '50%', 
            color: 'white',
            margin: 'auto'
            }}></i>
      </div>
  );
}

export default NavBar;
