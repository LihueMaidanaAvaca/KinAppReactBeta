import React, { useState, useEffect } from 'react';
import numbersToKin from '../utils/numbersToKin.ts';
import kinToTone from '../utils/kinToTone.ts';
import kinToSeal from '../utils/kinToSeal.ts';
import kinData from '../utils/kinData.ts';

function HomePage() {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [kinNumber, setKinNumber] = useState<number | null>(null);
  const [kinInfo, setKinInfo] = useState<{ toneName: string; sealName: string } | null>(null);

  const [kinImages, setKinImages] = useState({
    toneImage: '',
    sealImage: '',
  });

  // Función reutilizable que calcula kin, imágenes e info.
  const calculateKin = (d: number = day, m: number = month, y: number = year) => {
    setDay(d);
    setMonth(m);
    setYear(y);

    const result = numbersToKin(d, m, y);
    setKinNumber(result);

    const toneResult = kinToTone(result);
    const sealResult = kinToSeal(result);

    setKinImages({
      toneImage: require(`../images/tones/${toneResult}.png`),
      sealImage: require(`../images/seals/${sealResult}.png`),
    });

    const info = kinData({ kinNumber: result });
    setKinInfo(info);
  };

  // Al cargar la app por primera vez → usar la fecha actual
  useEffect(() => {
    const today = new Date();
    calculateKin(today.getDate(), today.getMonth() + 1, today.getFullYear());
  }, []);

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Mostrar las imágenes una al lado de la otra */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        {kinImages.toneImage && (
          <img src={kinImages.toneImage} alt="Imagen de tono" style={{ width: '100px', height: 'auto' }} />
        )}
        {kinImages.sealImage && (
          <img src={kinImages.sealImage} alt="Imagen de sello" style={{ width: '200px', height: 'auto', marginRight: '38px' }} />
        )}
      </div>

      {/* Mostrar el número Kin calculado */}
      {kinNumber !== null && (
        <h1 style={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
          Kin es: {kinNumber}
        </h1>
      )}

      {kinInfo && (
        <h1 style={{ textAlign: 'center' }}>
          Tono: {kinInfo.toneName} <br />
          Sello: {kinInfo.sealName}
        </h1>
      )}

      {/* Inputs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        
        {/* Día */}
        <div style={{ width: '100%', maxWidth: '60px' }}>
          <label htmlFor="day">Día</label>
          <input
            id="day"
            type="number"
            value={day}
            onChange={(e) => setDay(Math.min(31, Math.max(1, Number(e.target.value))))}
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

        {/* Mes */}
        <div style={{ width: '100%', maxWidth: '60px' }}>
          <label htmlFor="month">Mes</label>
          <input
            id="month"
            type="number"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            onBlur={() => {
              const num = Number(month);
              if (!num) return setMonth(1);
              setMonth(Math.min(12, Math.max(1, num)));
            }}
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

        {/* Año */}
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

      {/* Botón */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={() => calculateKin()}
          style={{
            marginTop: '20px',
            padding: '12px',
            fontSize: '20px',
            width: '20%',
            backgroundColor: '#3f51b5',
            color: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Calcular Kin
        </button>
      </div>
    </div>
  );
}

export default HomePage;