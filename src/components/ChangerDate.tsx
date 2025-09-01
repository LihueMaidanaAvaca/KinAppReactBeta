import React from 'react';

type ChangerDateProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

function ChangerDate({ selectedDate, onDateChange }: ChangerDateProps) {
  return (
    <div style={{ textAlign: 'start', padding: '3px', background: '#f0f0f0', margin: '3px' }}>
      <input
        type="date"
        id="fecha"
        name="fecha"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
}

export default ChangerDate;