import React from "react";
import "./ModalBooking.css";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBooking: React.FC<ModalProps> = ({ setOpenModal }) => {
  const navigate = useNavigate();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="lisson">Do you want to book a Seat?</h1>
        </div>
        <div className="footer">
          <button
            className="no"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            no
          </button>
          <button
            className="yes"
            onClick={() => {
              navigate("/Booking");
            }}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
