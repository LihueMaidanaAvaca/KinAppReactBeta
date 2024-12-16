import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import ChangerDate from './components/ChangerDate.tsx';

function App() {
  return (
    <>
    <ChangerDate></ChangerDate>
    <Router>  {/* Envolver toda la app con Router */}
          {/* Definir las rutas usando Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />  {/* Ruta para Home */}
            {/* Otras rutas pueden ser añadidas aquí */}
          </Routes>
    </Router>
    </>
  );
}

export default App;
