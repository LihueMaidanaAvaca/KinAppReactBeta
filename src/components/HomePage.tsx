import React, { useState, useEffect } from 'react';
import numbersToKin from '../utils/numbersToKin.ts';
import kinToTone from '../utils/kinToTone.ts';
import kinToSeal from '../utils/kinToSeal.ts';

function HomePage() {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [kinNumber, setKinNumber] = useState<number | null>(null);

  const [kinData, setKinData] = useState({
    toneImage: '',
    sealImage: '',
  });

  // Establecer la fecha de hoy por defecto y calcular el número Kin, tono y sello
  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; 
    const currentYear = today.getFullYear();

    setDay(currentDay);
    setMonth(currentMonth);
    setYear(currentYear);

    const result = numbersToKin(currentDay, currentMonth, currentYear);
    setKinNumber(result); // Establecer el número kin calculado

    const toneResult = kinToTone(result); 
    const sealResult = kinToSeal(result);

    setKinData({
      toneImage: require(`../images/tones/${toneResult}.png`),
      sealImage: require(`../images/seals/${sealResult}.png`),
    });
  }, []); 

  const calculateKin = () => {
    const result = numbersToKin(day, month, year);
    setKinNumber(result);

    const toneResult = kinToTone(result);
    const sealResult = kinToSeal(result);

    setKinData({
      toneImage: require(`../images/tones/${toneResult}.png`),
      sealImage: require(`../images/seals/${sealResult}.png`),
    });
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Mostrar las imágenes una al lado de la otra */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img src={kinData.toneImage} alt="Imagen de tono" style={{ width: '100px', height: 'auto' }} />  
        <img src={kinData.sealImage} alt="Imagen de sello" style={{ width: '200px', height: 'auto', marginRight: '38px' }} />  
      </div>

      {/* Mostrar el número Kin calculado */}
      {kinNumber !== null && (
        <h3 style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '50px', textAlign: 'center' }}>
          Kin es: {kinNumber}
        </h3>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {/* Fila para Día */}
        <div style={{ width: '100%', maxWidth: '60px' }}>
          <label htmlFor="day">Día</label>
          <input
            id="day"
            type="number"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            style={{
              width: '100%',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '4px',
              textAlign: 'center',
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              border: '2px solid #3f51b5',
            }}
          />
        </div>

        {/* Fila para Mes */}
        <div style={{ width: '100%', maxWidth: '60px' }}>
          <label htmlFor="month">Mes</label>
          <input
            id="month"
            type="number"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            style={{
              width: '100%',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '4px',
              textAlign: 'center',
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              border: '2px solid #3f51b5',
            }}
          />
        </div>

        {/* Fila para Año */}
        <div style={{ width: '100%', maxWidth: '100px' }}>
          <label htmlFor="year">Año</label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            style={{
              width: '100%',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '4px',
              textAlign: 'center',
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              border: '2px solid #3f51b5',
            }}
          />
        </div>
      </div>

      {/* Botón para calcular el número Kin */}
      <button
        onClick={calculateKin}
        style={{
          marginTop: '20px',
          padding: '12px',
          fontSize: '16px',
          width: '100%',
          backgroundColor: '#3f51b5',
          color: '#fff',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Calcular Kin
      </button>
    </div>
  );
}

export default HomePage;
