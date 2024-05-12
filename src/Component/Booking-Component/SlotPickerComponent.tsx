import React, { useState } from "react";

import "./SlotPickerComponent.css";

interface SlotPickerProps {
  onSlotChange: (slot: string) => void;
}

const SlotPickerComponent: React.FC<SlotPickerProps> = ({ onSlotChange }) => {
  const [selectedSlot, setSelectedSlot] = useState<string>("9:00");

  const handleSlotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlot(event.target.value);
    onSlotChange(event.target.value); // Call the parent callback directly here
  };

  return (
    <div className="slot-picker-container">
      <select value={selectedSlot} onChange={handleSlotChange}>
        {Array.from({ length: 12 }, (_, i) => 9 + i).map((hour) => (
          <option key={hour} value={`${hour}:00`}>
            {`${hour}:00`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SlotPickerComponent;
