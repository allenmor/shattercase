import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();


  const initialFormData = {
    name: "",
    number: "",
    device: "",
    issue: "",
    address: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleLogOut() {
    try {
      await logout();
      navigate("/login");
    } catch {
      // handle error
    }
  }

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

            setFormData({ ...formData, address });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      // Handle the case where geolocation is not supported by the browser
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send formData to your server
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        Dashboard
        <div className="dashboard">
          <h2>Profile</h2>
          <p>
            <strong>Email: </strong> {currentUser.email}
          </p>
          <Link to="update-profile">Update Profile</Link>
          <button onClick={handleLogOut}>Log Out</button>
 
          <form onSubmit={handleSubmit}>
            <label>Location:</label>
            <input
              required
              name="address"
              onChange={handleChange}
              type="text"
              value={formData.address}
            />
            <button onClick={getLocation}>Get Current Location</button>
            <br />
            <label>Name:</label>

            <input
              required
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              value={formData.name}
            />
            <br />
            <label>Number:</label>

            <input
              required
              name="number"
              onChange={handleChange}
              type="tel"
              placeholder="Enter your number"
              value={formData.number}
            />
            <br />
            <label>Device:</label>
            <select
              required
              name="device"
              onChange={handleChange}
              value={formData.device}
            >
              <option value="">Please select a device</option>
              <option value="iPhone">iPhone</option>
              <option value="iPhone 3G">iPhone 3G</option>
              <option value="iPhone 3GS">iPhone 3GS</option>
              <option value="iPhone 4">iPhone 4</option>
              <option value="iPhone 4S">iPhone 4S</option>
              <option value="iPhone 5">iPhone 5</option>
              <option value="iPhone 5c">iPhone 5c</option>
              <option value="iPhone 5s">iPhone 5s</option>
              <option value="iPhone 6">iPhone 6</option>
              <option value="iPhone 6 Plus">iPhone 6 Plus</option>
              <option value="iPhone 6s">iPhone 6s</option>
              <option value="iPhone 6s Plus">iPhone 6s Plus</option>
              <option value="iPhone SE (1st generation)">
                iPhone SE (1st generation)
              </option>
              <option value="iPhone 7">iPhone 7</option>
              <option value="iPhone 7 Plus">iPhone 7 Plus</option>
              <option value="iPhone 8">iPhone 8</option>
              <option value="iPhone 8 Plus">iPhone 8 Plus</option>
              <option value="iPhone X">iPhone X</option>
              <option value="iPhone XR">iPhone XR</option>
              <option value="iPhone XS">iPhone XS</option>
              <option value="iPhone XS Max">iPhone XS Max</option>
              <option value="iPhone 11">iPhone 11</option>
              <option value="iPhone 11 Pro">iPhone 11 Pro</option>
              <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
              <option value="iPhone SE (2nd generation)">
                iPhone SE (2nd generation)
              </option>
              <option value="iPhone 12 mini">iPhone 12 mini</option>
              <option value="iPhone 12">iPhone 12</option>
              <option value="iPhone 12 Pro">iPhone 12 Pro</option>
              <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
              <option value="iPhone 13 mini">iPhone 13 mini</option>
              <option value="iPhone 13">iPhone 13</option>
              <option value="iPhone 13 Pro">iPhone 13 Pro</option>
              <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
              <option value="iPhone SE (3rd generation)">
                iPhone SE (3rd generation)
              </option>
              <option value="iPhone 14">iPhone 14</option>
              <option value="iPhone 14 Plus">iPhone 14 Plus</option>
              <option value="iPhone 14 Pro">iPhone 14 Pro</option>
              <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
            </select>

            <br />
            <label>Issue:</label>

            <textarea
              required
              name="issue"
              onChange={handleChange}
              placeholder="Enter your issue with device"
              value={formData.issue}
            ></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
