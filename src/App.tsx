import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ChangerDate from './components/ChangerDate.tsx';

function App() {
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Al montar, setear fecha de hoy
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    console.log(today, "todayyyy")
    setSelectedDate(today);
  }, []);

  return (
    <>
      {/* Ahora le pasamos fecha y setter al componente */}
      <ChangerDate selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <Router>
        <Routes>
          {/* Pasamos la fecha como prop a cada página */}
          <Route path="/" element={<HomePage selectedDate={selectedDate} />} />
          {/* Las futuras páginas también recibirán selectedDate */}
        </Routes>
      </Router>
    </>
  );
}

export default App;