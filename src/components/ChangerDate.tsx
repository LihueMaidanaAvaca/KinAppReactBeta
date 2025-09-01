import React, { useState, useEffect } from 'react';

function ChangerDate() {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    // Convertimos a formato ISO corto (YYYY-MM-DD) que entiende <input type="date">
    const isoDate = today.toISOString().split('T')[0];
    setCurrentDate(isoDate);
  }, []);

  return (
    <div style={{ textAlign: 'start', padding: '3px', background: '#f0f0f0', margin: '3px' }}>
      <label htmlFor="fecha" style={{ marginRight: '8px' }}>Selecciona una fecha:</label>
      <input
        type="date"
        id="fecha"
        name="fecha"
        value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
    </div>
  );
}

export default ChangerDate;