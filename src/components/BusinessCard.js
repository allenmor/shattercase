import React from "react";
import guarentee from "../images/guarentee.jpeg";
import { useNavigate } from "react-router-dom";
function BusinessCard() {
    const navigate = useNavigate()
    function handleSeeCasesClick() {
        navigate('/iphone')
    }
  return (
    <div className="business-card-full-div">
      <div className="business-card-container">
        <p className="shatter-header-p">Shatter & Case</p>
        <div className="insideBusiness">
          <div className="buy-hours-div">
            <p className="buy-fix-p">
              Buy - Fix - Sell - Unlock Phones & Tablets
            </p>
            <p className="mall-p">Holyoke Mall Hours Of Operation</p>
            <div>
              <p className="customer-service-p">Customer Service</p>
              <p
                className="number-p"
                onClick={() => (window.location.href = "tel:4132734641")}
              >
                413-273-4641
              </p>

              <p className="available-p">Available for iMessage and FaceTime</p>
              <p
                className="email-p"
                onClick={() =>
                  (window.location.href = "mailto:admin@shatterandcase.com")
                }
              >
                admin@shatterandcase.com
              </p>

              <div className="logo-div">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://www.facebook.com/ShatterHolyoke/"
                  className="fa fa-facebook"
                  aria-label="Visit our Facebook page"
                ></a>{" "}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://www.instagram.com/shatter.case/?hl=en"
                  className="fa fa-instagram"
                  aria-label="Visit our Instagram page"
                ></a>{" "}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://www.facebook.com/ShatterHolyoke/"
                  className="fa fa-snapchat-ghost"
                  aria-label="Visit our Snapchat account"
                ></a>{" "}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              </div>
              <p className="prof-tech-p">Professional Electronics Technician</p>
            </div>
          </div>
          <div className="guarentee-div">
            <img className="guarentee-img" src={guarentee} alt="guarentee" />
            <p>Cracked Screens</p>
            <p>Liquid Damage</p>
            <p>& More</p>
            <p className="certified-p">
              Certified Technicians Around The Clock
            </p>
          </div>
        </div>
      </div>
      <button onClick={handleSeeCasesClick} className="cases-button">Click To See Our Cases</button>
    </div>
  );
}

export default BusinessCard;
