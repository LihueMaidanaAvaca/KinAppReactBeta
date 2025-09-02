import React from "react";
import ToneComponent from "./ToneComponent.tsx";  
import SealComponent from "./SealComponent.tsx";

type KinComponentProps = {
  toneImage: string | null;
  sealImage: string | null;
};

export default function KinComponent({ toneImage, sealImage }: KinComponentProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <ToneComponent toneImage={toneImage} />
      <SealComponent sealImage={sealImage} />
    </div>
  );
}

