// src/utils/kinDetails.ts
import kinToTone from './kinToTone.ts';
import kinToSeal from './kinToSeal.ts';
import { toneData } from '../data/toneData.ts';
import { sealData } from '../data/sealData.ts';

export interface KinDetails {
  toneNumber: number;
  sealNumber: number;
  toneName: string;
  toneDescription: string;
  sealName: string;
  sealDescription: string;
}

export default function kinDetails(kinNumber: number | null): KinDetails | null {
  if (kinNumber == null) return null;

  const toneNumber = kinToTone(kinNumber);
  const sealNumber = kinToSeal(kinNumber);

  const tone = toneData.find(t => t.id === toneNumber);
  const seal = sealData.find(s => s.id === sealNumber);

  return {
    toneNumber,
    sealNumber,
    toneName: tone?.name ?? '',
    toneDescription: tone?.description ?? '',
    sealName: seal?.name ?? '',
    sealDescription: seal?.description ?? '',
  };
}