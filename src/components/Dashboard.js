import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  // const [error, setError] = useState('')
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    // setError('')

    try {
      await logout();
      navigate("/login");
    } catch {
      // setError('Failed to logout')
    }
  }

  const [location, setLocation] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      // Handle the case where geolocation is not supported by the browser
    }
  };
  
  return (
    <div>
      Dashboard
      <h2>Profile</h2>
      <strong>Email: </strong> {currentUser.email}
      <Link to="update-profile">Update Profile</Link>
      <button onClick={handleLogOut}>Log Out</button>
      <div>
        <button onClick={getLocation}>Get Location</button>
        {location.lat && <p>Latitude: {location.lat}</p>}
        {location.lng && <p>Longitude: {location.lng}</p>}
      </div>
    </div>
  );
}

export default Dashboard;
