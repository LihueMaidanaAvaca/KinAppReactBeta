import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material'; 
import numbersToKin from '../utils/numbersToKin.ts';
import kinToTone from '../utils/kinToTone.ts';
import kinToSeal from '../utils/kinToSeal.ts';

function HomePage() {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [kinNumber, setKinNumber] = useState<number | null>(null);
  
  const [kinData, setKinData] = useState({
    toneImage: '',
    sealImage: '',
  });

  // Establecer la fecha de hoy por defecto y calcular el número Kin, tono y sello
  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; 
    const currentYear = today.getFullYear();
    
    setDay(currentDay);
    setMonth(currentMonth);
    setYear(currentYear);
    
    const result = numbersToKin(currentDay, currentMonth, currentYear);
    setKinNumber(result); // Establecer el número kin calculado

    const toneResult = kinToTone(result); 
    const sealResult = kinToSeal(result); 

    setKinData({
      toneImage: require(`../images/tones/${toneResult}.png`),
      sealImage: require(`../images/seals/${sealResult}.png`),
    });
  }, []); 

  const calculateKin = () => {
    const result = numbersToKin(day, month, year);
    setKinNumber(result);

    const toneResult = kinToTone(result);
    const sealResult = kinToSeal(result);

    setKinData({
      toneImage: require(`../images/tones/${toneResult}.png`),
      sealImage: require(`../images/seals/${sealResult}.png`),
    });
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '20px' }}>
      {/* Mostrar las imágenes una al lado de la otra */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img src={kinData.toneImage} alt="Imagen de tono" style={{ width: '25%', height: 'auto' }} />  
        <img src={kinData.sealImage} alt="Imagen de sello" style={{ width: '50%', height: 'auto', marginRight: '38px' }} />  
      </div>

      {/* Mostrar el número Kin calculado */}
      {kinNumber !== null && (
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ marginTop: '20px', fontWeight: 'bold', fontSize: '50px' }}  
        >
          Kin es : {kinNumber}
        </Typography>
      )}

      <Grid container spacing={2}>
        {/* Fila para Día y Mes */}
        <Grid item xs={6} sm={4}>
          <TextField
            label="Día"
            type="number"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              '& .MuiInputBase-root': {
                paddingLeft: '12px',
                fontSize: '40px',
                fontWeight: 'bold',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3f51b5',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3f51b5',
              },
              textAlign: 'center', // Centrar el número
              width: '100%', // Ajustar el ancho en pantallas pequeñas
            }}
          />
        </Grid>

        <Grid item xs={6} sm={4}>
          <TextField
            label="Mes"
            type="number"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              '& .MuiInputBase-root': {
                paddingLeft: '12px',
                fontSize: '40px',
                fontWeight: 'bold',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3f51b5',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3f51b5',
              },
              textAlign: 'center', // Centrar el número
              width: '100%', // Ajustar el ancho en pantallas pequeñas
            }}
          />
        </Grid>

        {/* Fila para Año */}
        <Grid item xs={12}>
          <TextField
            label="Año"
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              '& .MuiInputBase-root': {
                paddingLeft: '12px',
                fontSize: '40px',
                fontWeight: 'bold',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3f51b5',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFEB3B',
              },
              textAlign: 'center', // Centrar el número
              width: '100%', // Ajustar el ancho en pantallas pequeñas
            }}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={calculateKin}
        fullWidth
        sx={{
          marginTop: '20px',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
        }}
      >
        Calcular Kin
      </Button>
    </Container>
  );
}

export default HomePage;
