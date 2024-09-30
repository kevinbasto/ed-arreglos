import React, { useState } from 'react';

const Matriz = () => {
  const filas = 5;
  const columnas = 10;

  const generarMatriz = () => {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
      const fila = [];
      for (let j = 0; j < columnas; j++) {
        fila.push(Math.floor(Math.random() * 10) + 1); // Números aleatorios del 1 al 10
      }
      matriz.push(fila);
    }
    return matriz;
  };

  const matriz = generarMatriz();

  const calcularSumaYPromedioFilas = () => {
    const sumaFilas = [];
    const promedioFilas = [];
    matriz.forEach(fila => {
      const suma = fila.reduce((acc, num) => acc + num, 0);
      sumaFilas.push(suma);
      promedioFilas.push((suma / columnas).toFixed(1));
    });
    return { sumaFilas, promedioFilas };
  };

  const calcularSumaYPromedioColumnas = () => {
    const sumaColumnas = Array(columnas).fill(0);
    matriz.forEach(fila => {
      fila.forEach((num, index) => {
        sumaColumnas[index] += num;
      });
    });
    const promedioColumnas = sumaColumnas.map(suma => (suma / filas).toFixed(1));
    return { sumaColumnas, promedioColumnas };
  };

  const { sumaFilas, promedioFilas } = calcularSumaYPromedioFilas();
  const { sumaColumnas, promedioColumnas } = calcularSumaYPromedioColumnas();

  return (
    <div>
      <h3>Matriz</h3>
      <table border="1">
        <tbody>
          {matriz.map((fila, i) => (
            <tr key={i}>
              {fila.map((num, j) => (
                <td key={j}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Resultados</h3>
      <table border="1">
        <tbody>
          <tr>
            <th>A (Suma de filas)</th>
            <th>B (Promedio de filas)</th>
          </tr>
          {sumaFilas.map((suma, i) => (
            <tr key={i}>
              <td>{suma}</td>
              <td>{promedioFilas[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table border="1">
        <tbody>
          <tr>
            <th>C (Suma de columnas)</th>
            <th>D (Promedio de columnas)</th>
          </tr>
          <tr>
            <td>{sumaColumnas.join(' ')}</td>
            <td>{promedioColumnas.join(' ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Matriz;
