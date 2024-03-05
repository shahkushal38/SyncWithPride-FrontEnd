import React, { useState } from "react";
import "./Mainpage.css";
import { useNavigate } from "react-router-dom";
import { Datepicker } from "../Datepicker/Datepicker";
// import { Timepicker } from "../Timepicker/Timepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Mainpage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  // const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const handalseat = () => {
    navigate("/Gateway");
  };

  // const handleSelectTime = (time: string | null) => {
  //   console.log(time);
  // };

  const handleDateButtonClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  // const handleTimeButtonClick = () => {
  //   setIsTimePickerOpen(!isTimePickerOpen);
  //   setIsDatePickerOpen(false);
  // };

  return (
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
        <div className="buttons4">
          <button
            type="button"
            className="btn4"
            onClick={handleDateButtonClick}
          >
            Date
          </button>
          <div className="datepicker">
            {isDatePickerOpen && <Datepicker />}
          </div>

          <button
            type="button"
            className="btn4"
            // onClick={handleTimeButtonClick}
          >
            Time
          </button>
          {/* {isTimePickerOpen && <Timepicker onSelectTime={handleSelectTime} />} */}
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
  );
};
