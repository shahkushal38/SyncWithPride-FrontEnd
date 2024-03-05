import React from "react";
import "./ModalLogout.css";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
  const navigate = useNavigate();

  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <div className="titleCloseBtn1">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            onTouchStart={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title1">
          <h1 className="lisson1">Are You Sure You Want to Log out?</h1>
        </div>
        <div className="footer1">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            onTouchStart={() => {
              setOpenModal(false);
            }}
            className="mBtn"
            id="cancelBtn1"
          >
            Cancel
          </button>
          <button
            className="mBtn"
            onClick={() => {
              navigate("/");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
