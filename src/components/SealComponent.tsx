import React from "react";

type SealComponentProps = {
  sealImage: string | null;
};

export default function SealComponent({ sealImage }: SealComponentProps) {
  if (!sealImage) return null; // si no hay imagen, no renderiza nada

  return (
    <div>
      <img
        src={sealImage}
        alt="Imagen de sello"
        style={{ width: "200px", height: "auto", marginRight: "38px" }}
      />
    </div>
  );
}