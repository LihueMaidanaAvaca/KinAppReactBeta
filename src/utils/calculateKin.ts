import numbersToKin from './numbersToKin.ts';
import kinToTone from './kinToTone.ts';
import kinToSeal from './kinToSeal.ts';
import kinData from './kinData.ts';

// Auxiliar para evitar el bug de UTC
function safeDateFromString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export type KinResult = {
  kinNumber: number;
  toneName: string;
  sealName: string;
  toneImage: string;
  sealImage: string;
};

export function calculateKin(dateString: string): KinResult {
  const date = safeDateFromString(dateString);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  const kinNumber = numbersToKin(d, m, y);

  const toneResult = kinToTone(kinNumber);
  const sealResult = kinToSeal(kinNumber);

  return {
    kinNumber,
    toneName: kinData({ kinNumber }).toneName,
    sealName: kinData({ kinNumber }).sealName,
    toneImage: require(`../images/tones/${toneResult}.png`),
    sealImage: require(`../images/seals/${sealResult}.png`),
  };
}