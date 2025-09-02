import kinToTone from '../utils/kinToTone.ts';  
import kinToSeal from '../utils/kinToSeal.ts';  
  
const toneNames = [  
  "", "Magnético", "Lunar", "Eléctrico", "AutoExistente",  
  "Entonado", "Rítmico", "Resonante", "Galáctico",  
  "Solar", "Planetario", "Espectral", "Cristal", "Cósmico"  
];  
  
const sealNames = [  
  "Sol", "Dragón", "Viento", "Noche", "Semilla",  
  "Serpiente", "Enlazador de Mundos", "Mano", "Estrella",  
  "Luna", "Perro", "Mono", "Humano", "Caminante del Cielo",  
  "Mago", "Águila", "Guerrero", "Tierra", "Espejo", "Tormenta"  
];  
  
export default function kinData({ kinNumber }: { kinNumber: number }): { toneNumber: number, sealNumber: number, toneName: string, sealName: string } {
  const toneNumber = kinToTone(kinNumber);  
  const sealNumber = kinToSeal(kinNumber);  
  
  return {  
    toneNumber,  
    sealNumber,  
    toneName: toneNames[toneNumber] || "",  
    sealName: sealNames[sealNumber] || ""  
  };  
}