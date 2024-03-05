import React, { useState } from "react";
import "./Gateway.css";
import ModalBooking from "../ModalBooking/ModalBooking";
import { useNavigate } from "react-router-dom";

export const Gateway: React.FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handalseat = () => {
    navigate("/Gateway");
  };

  return (
    <>
      <div className="app">
        <div
          className="profile"
          onClick={() => {
            navigate("/Profile");
          }}
        >
          <img
            src="https://i.ibb.co/j8JtSVk/profile-img.jpg"
            alt=""
            className="image1"
          />
        </div>

        <div className="selection">
          <div className="buttons">
            {/* Date picker */}
            <button type="button" className="btn3">
              Date
            </button>
            {/* Time picker */}
            <button type="button" className="btn3">
              Time
            </button>
          </div>
        </div>

        <div className="main1">
          <div className="component">
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
            <div className="bench"></div>
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="component">
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
            <div className="bench"></div>
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="component">
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
            <div className="bench"></div>
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="component">
            <div className="seats">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
            <div className="bench long"></div>
            <div className="seats side">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="Athoercomponent">
            <div className="bench left"></div>
            <div className="seats athoer">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="component rightc">
            <div className="seats rights">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="bench rightb"></div>

          <div className="component anotherc">
            <div className="seats rights">
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
              <div className="seat" onClick={handalseat}></div>
            </div>
          </div>

          <div className="bench toright"></div>
          <div className="bench torighta"></div>
        </div>
      </div>

      <div className="main2">
        <div className="gateway">
          <div className="head2">
            <p className="title ">Book a Seat</p>
          </div>

          <div className="info1">
            <h2 className="tsx"> Seat no. 33 </h2>
            <p className="addr1">
              <p>Old Nagardas Road,</p>
              <p>Nr Andheri Metro Station,</p>
              <p>Andheri (East)</p>
            </p>
            <p className="status">
              Status: <span> not booked </span>
            </p>
          </div>

          <div className="buttons">
            <button
              className="btn3"
              type="reset"
              onClick={() => {
                navigate("/mainpage");
              }}
            >
              {" "}
              Cancel{" "}
            </button>
            <button
              type="submit"
              className="book openModalBtn btn3"
              onClick={() => {
                setModalOpen(true);
              }}
              onTouchStart={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Book{" "}
            </button>
          </div>

          {modalOpen && <ModalBooking setOpenModal={setModalOpen} />}
        </div>
      </div>
    </>
  );
};
