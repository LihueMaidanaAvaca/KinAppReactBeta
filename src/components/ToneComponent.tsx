import React from "react";

type ToneComponentProps = {
  toneImage: string | null;
};

export default function ToneComponent({ toneImage }: ToneComponentProps) {
  if (!toneImage) return null; // si no hay imagen, no renderiza nada

  return (
    <div>
      <img
        src={toneImage}
        alt="Imagen de tono"
        style={{ width: '100px', height: 'auto' }}
      />
    </div>
  );
}