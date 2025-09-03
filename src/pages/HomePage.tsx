import React, { useState, useEffect } from 'react';
import kinDetails, { KinDetails } from '../utils/kinDetails.ts';
import { calculateKin, KinResult } from '../utils/calculateKin.ts';
import KinComponent from '../components/KinComponent.tsx';

type HomePageProps = {
  selectedDate: string;
};

function HomePage({ selectedDate }: HomePageProps) {
  const [kinData, setKinData] = useState<KinResult | null>(null);
  const [kinInfo, setKinInfo] = useState<KinDetails | null>(null);

  useEffect(() => {
    if (selectedDate) {
      const result = calculateKin(selectedDate);
      setKinData(result);
      
      // Obtener detalles completos (nombres + descripciones)
      const details = kinDetails(result.kinNumber);
      setKinInfo(details);
    }
  }, [selectedDate]);

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Mostrar las imágenes */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <KinComponent 
          toneImage={kinData?.toneImage || null} 
          sealImage={kinData?.sealImage || null} 
        />
      </div>

      {/* Mostrar el número Kin calculado */}
      {kinData?.kinNumber && (
        <h1 style={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
          Kin: {kinData.kinNumber}<br/>
          {kinInfo?.sealName} {kinInfo?.toneName}
        </h1>
      )}

      {/* Mostrar info detallada de tono y sello */}
      {kinInfo && (
        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ marginBottom: '10px' }}>
              Tono {kinInfo.toneNumber}: {kinInfo.toneName}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#484848ff' }}>
              {kinInfo.toneDescription}
            </p>
          </div>
          
          <div>
            <h2 style={{ marginBottom: '10px' }}>
              Sello {kinInfo.sealNumber}: {kinInfo.sealName}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#484848ff' }}>
              {kinInfo.sealDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;