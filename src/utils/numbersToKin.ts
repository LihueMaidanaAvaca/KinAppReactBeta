// Importar las funciones dayAndMonthK y yearK (suponiendo que estén en los archivos correspondientes)
import dayMonthToNumber from './dayMonthToNumber.ts';  // Ajusta la ruta según tu estructura de archivos
import yearToNumber from './yearToNumber.ts';  // Ajusta la ruta según tu estructura de archivos

// Nueva función que suma los resultados de dayAndMonthK y yearK, y resta 260 si el resultado supera 260
export default function numbersToKin(day: number, month: number, year: number): number {
  // Obtener los resultados de las dos funciones
  const resultDayMonth = dayMonthToNumber(day, month);
  const resultYear = yearToNumber(year);

  // Sumar los dos resultados
  let total = resultDayMonth + resultYear;

  // Si el total supera 260, restar 260
  if (total > 260) {
    total -= 260;
  }

  // Devolver el resultado ajustado
  return total;
}
