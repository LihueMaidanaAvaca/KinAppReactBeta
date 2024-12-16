export default function dayMonthToNumber(day: number, month: number): number {
    // Verificar que el día esté en un rango válido
    if (day < 1 || day > 31) {
      return -1;  // Valor de error cuando el día no es válido
    }
  
    // Definir los valores en un objeto, donde cada mes tiene su valor correspondiente
    const monthOffsets: { [key: number]: number } = {
      1: 54,    // Enero
      2: 85,    // Febrero
      3: 113,   // Marzo
      4: 144,   // Abril
      5: 174,   // Mayo
      6: 205,   // Junio
      7: 235,   // Julio
      8: 6,     // Agosto
      9: 37,    // Septiembre
      10: 67,   // Octubre
      11: 98,   // Noviembre
      12: 128   // Diciembre
    };
  
    // Obtener el valor correspondiente al mes
    const offset = monthOffsets[month];
  
    // Si el mes es válido, devolver el cálculo
    if (offset !== undefined) {
      console.log("dM", day+offset)
      return day + offset;
    } else {
      console.log("jodeme")
      return -1;  // Valor de error cuando el mes no es válido
    }
  }