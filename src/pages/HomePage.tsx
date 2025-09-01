import React, { useState, useEffect } from 'react';
import numbersToKin from '../utils/numbersToKin.ts';
import kinToTone from '../utils/kinToTone.ts';
import kinToSeal from '../utils/kinToSeal.ts';
import kinData from '../utils/kinData.ts';

// Función auxiliar para parsear la fecha en LOCAL y no en UTC
function safeDateFromString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // ✅ evita corrimiento de día
}

// Tipo para las props
type HomePageProps = {
  selectedDate: string;  // viene desde ChangerDate (App maneja el estado global)
};

function HomePage({ selectedDate }: HomePageProps) {
  const [kinNumber, setKinNumber] = useState<number | null>(null);
  const [kinInfo, setKinInfo] = useState<{ toneName: string; sealName: string } | null>(null);
  const [kinImages, setKinImages] = useState({
    toneImage: '',
    sealImage: '',
  });

  const calculateKin = (dateString: string) => {
    const date = safeDateFromString(dateString);
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

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

  // recalcula siempre que cambie la fecha seleccionada global
  useEffect(() => {
    if (selectedDate) {
      calculateKin(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Mostrar las imágenes */}
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
          Kin : {kinNumber}
        </h1>
      )}

      {/* Mostrar info de tono y sello */}
      {kinInfo && (
        <h1 style={{ textAlign: 'center' }}>
          Tono: {kinInfo.toneName} <br />
          Sello: {kinInfo.sealName}
        </h1>
      )}
    </div>
  );
}

export default HomePage;