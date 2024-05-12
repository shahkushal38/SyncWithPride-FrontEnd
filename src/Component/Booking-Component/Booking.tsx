import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "./DatePickerComponent";
import SlotPickerComponent from "./SlotPickerComponent";
import "./Booking.css";
// npm install react-datepicker moment

export function Booking(): JSX.Element {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string>("9:00");
  
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };
  
    const handleSlotChange = (slot: string) => {
      setSelectedSlot(slot);
    };
  
    const handleApply = () => {
      if (selectedDate) {
        console.log(`Selected Date: ${selectedDate.toDateString()}`);
        console.log(`Selected Slot: ${selectedSlot}`);
      }
    };
  
    return (
      <div className="main-container">
        <div className="content">
          <h2>Date Picker
          <DatePickerComponent onDateChange={handleDateChange} />
          </h2>
          <h2>Slot Picker
          <SlotPickerComponent onSlotChange={handleSlotChange} />
          </h2>
        </div>
        {selectedDate && (
          <button className="apply-button" onClick={handleApply}>Apply</button>
        )}
      </div>
    );
}

export default Booking
