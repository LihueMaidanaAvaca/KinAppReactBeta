export default function yearToNumber(year: number): number {
    let y = year;
  
    // Ajustar el año según los rangos
    if (y < 1957) {
      while (y < 1957){
        y += 52
      } 
    } else if (y >= 2009) {
      while (y > 2009) {
        y -= 52; // Restar 52 repetidamente
      }
    }
    console.log("year", y)
    // Calcular la "key" del año ajustado
    const key = (y - 1957).toString().padStart(2, '0');
    const unit = parseInt(key[1]);
    const tens = parseInt(key[0]) * 10;
  
    // Mapa para el cálculo de los valores de "unit"
    const unitMap: { [key: number]: number } = {
      0: 3,
      1: 108,
      2: 213,
      3: 58,
      4: 163,
      5: 8,
      6: 113,
      7: 218,
      8: 63,
      9: 168
    };
    console.log( "resultado re xd", tens + (unitMap[unit] || 0))
    // Retornar el valor sumado de "tens" y el valor correspondiente de "unitMap"
    return tens + (unitMap[unit] || 0);
  }
  