import React from 'react';

type ChangerDateProps = {
  selectedDate: string; // formato 'YYYY-MM-DD'
  onDateChange: (date: string) => void;
};

function toLocalDate(dateStr?: string): Date {
  if (!dateStr) return new Date();
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function formatYMD(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function ChangerDate({ selectedDate, onDateChange }: ChangerDateProps) {
  const handleStep = (delta: number) => {
    const base = toLocalDate(selectedDate || formatYMD(new Date()));
    base.setDate(base.getDate() + delta);
    onDateChange(formatYMD(base));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        gap: '8px',
        margin: '10px 0',
      }}
    >
      {/* Botón izquierdo con triángulo */}
      <button
        type="button"
        onClick={() => handleStep(-1)}
        aria-label="Día anterior"
        title="Día anterior"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: '0',
          height: '0',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderRight: '12px solid #ffcc00ff',
        }}
      />

      <input
        type="date"
        id="fecha"
        name="fecha"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        style={{
          appearance: 'none',          // quita estilos del navegador
          WebkitAppearance: 'none',    // Safari/Chrome
          MozAppearance: 'none',       // Firefox
          outline: 'none',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '8px 12px',
          fontSize: '16px',
          fontFamily: 'inherit',
          backgroundColor: '#fff',
          color: '#333',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = '#007bff')
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = '#ccc')
        }
      />

      {/* Botón derecho con triángulo */}
      <button
        type="button"
        onClick={() => handleStep(1)}
        aria-label="Día siguiente"
        title="Día siguiente"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: '0',
          height: '0',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: '12px solid #ffcc00ff',
        }}
      />
    </div>
  );
}

export default ChangerDate;