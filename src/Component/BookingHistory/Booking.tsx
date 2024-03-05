import React from "react";
import "./Booking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Booking: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="Booking-main">
      <div
        className="back"
        onClick={() => {
          navigate("/mainpage");
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="section">
        <div className="info first">
          <h2> Seat no. 33 </h2>
          <p className="addr">
            <p>Old Nagardas Road,</p>
            <p>Nr Andheri Metro Station,</p>
            <p>Andheri (East)</p>
          </p>
          <p className="detail"> Show more </p>
        </div>
        <div className="info">
          <h2> Seat no. 33 </h2>
          <p className="addr">
            <p>Old Nagardas Road,</p>
            <p>Nr Andheri Metro Station,</p>
            <p>Andheri (East)</p>
          </p>
          <p className="detail"> Show more </p>
        </div>
        <div className="info">
          <h2> Seat no. 33 </h2>
          <p className="addr">
            <p>Old Nagardas Road,</p>
            <p>Nr Andheri Metro Station,</p>
            <p>Andheri (East)</p>
          </p>
          <p className="detail"> Show more </p>
        </div>
      </div>
    </div>
  );
};
