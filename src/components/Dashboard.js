import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logout();
      navigate("/login");
    } catch {
      // handle error
    }
  }

  const [location, setLocation] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

        axios
          .get(url)
          .then((response) => {
            const address = response.data.results[0].formatted_address;
            setLocation({ address });
          })
          .catch((error) => {
            console.log(error);
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
        {location.address && <p>Address: {location.address}</p>}
      </div>
    </div>
  );
}

export default Dashboard;
