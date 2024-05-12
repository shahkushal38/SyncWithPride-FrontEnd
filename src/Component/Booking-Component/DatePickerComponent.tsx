import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import "./DatePickerComponent.css";

interface DatePickerProps {
  onDateChange: (date: Date) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    moment().add(1, "days").toDate()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date!);
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={moment().toDate()}
        maxDate={moment().endOf("week").toDate()}
      />
    </div>
  );
};

export default DatePickerComponent;
