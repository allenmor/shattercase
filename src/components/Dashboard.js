import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import NavBar from "./NavBar";

function Dashboard() {
  const { currentUser } = useAuth();

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
      <NavBar email={currentUser.email}/>
      <div className="dashboard-content">
        <h2>Get a Quote</h2>
        <div className="dashboard">
          <form onSubmit={handleSubmit}>
            <label>Location:</label>
            <input
              required
              name="address"
              onChange={handleChange}
              type="text"
              value={formData.address}
              placeholder='Enter your location'
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
            <input
              type="text"
              required
              name="device"
              onChange={handleChange}
              value={formData.device}
              placeholder='Enter your device model'
            />

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
