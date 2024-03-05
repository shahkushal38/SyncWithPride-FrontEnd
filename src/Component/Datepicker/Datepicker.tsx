import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Datepicker: React.FunctionComponent = () => {
  const today = new Date();
  const nextSevenDays = new Date();
  nextSevenDays.setDate(today.getDate() + 7);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      minDate={today}
      maxDate={nextSevenDays}
      placeholderText="Select a Date"
      showMonthDropdown={false}
      showYearDropdown={false}
    />
  );
};
