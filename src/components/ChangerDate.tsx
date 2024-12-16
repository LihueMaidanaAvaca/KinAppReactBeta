import React, { useState, useEffect } from 'react';

function ChangerDate() {
  // Estado para almacenar la fecha
  const [currentDate, setCurrentDate] = useState<string>('');

  // Usar useEffect para establecer la fecha cuando el componente se monte
  useEffect(() => {
    const today = new Date();
    // Formateamos la fecha a un formato más legible
    const formattedDate = today.toLocaleDateString(); // Puedes personalizar el formato
    setCurrentDate(formattedDate);
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  return (
    <div style={{ textAlign: 'start', padding: '3px', background: '#f0f0f0' }}>
      <h2>{currentDate}</h2>
    </div>
  );
}

export default ChangerDate;
