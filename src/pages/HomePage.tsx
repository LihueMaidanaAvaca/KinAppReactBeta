import React, { useState, useEffect } from 'react';
import { calculateKin, KinResult } from '../utils/calculateKin.ts';
import KinComponent from '../components/KinCompenent.tsx';

type HomePageProps = {
  selectedDate: string;
};

function HomePage({ selectedDate }: HomePageProps) {
  const [kinData, setKinData] = useState<KinResult | null>(null);

  useEffect(() => {
    if (selectedDate) {
      setKinData(calculateKin(selectedDate));
    }
  }, [selectedDate]);

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Mostrar las imágenes */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <KinComponent toneImage={kinData?.toneImage || null} sealImage={kinData?.sealImage || null} />
      </div>

      {/* Mostrar el número Kin calculado */}
      {kinData?.kinNumber && (
        <h1 style={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
          Kin : {kinData.kinNumber}<br/>
          {kinData.sealName} {kinData.toneName}
        </h1>
      )}

      {/* Mostrar info de tono y sello */}
      {kinData && (
        <h1 style={{ textAlign: 'center' }}>
          Tono Lunar: {kinData.toneName} <br />
          Sello Solar: {kinData.sealName}
        </h1>
      )}
    </div>
  );
}

export default HomePage;