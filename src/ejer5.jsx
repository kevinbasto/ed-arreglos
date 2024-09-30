import React, { useState } from 'react';

const MatrizComponent = () => {
  const [matrix, setMatrix] = useState(generateMatrix());
  const [sumRows, setSumRows] = useState([]);
  const [avgRows, setAvgRows] = useState([]);
  const [sumCols, setSumCols] = useState([]);
  const [avgCols, setAvgCols] = useState([]);

  function generateMatrix() {
    const newMatrix = [];
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(Math.floor(Math.random() * 10) + 1);
      }
      newMatrix.push(row);
    }
    return newMatrix;
  }

  function calculateSumsAndAverages() {
    const rowSums = matrix.map(row => row.reduce((acc, num) => acc + num, 0));
    const rowAverages = rowSums.map(sum => (sum / 10).toFixed(1));

    const colSums = Array(10).fill(0);
    matrix.forEach(row => {
      row.forEach((num, index) => {
        colSums[index] += num;
      });
    });
    const colAverages = colSums.map(sum => (sum / 5).toFixed(1));

    setSumRows(rowSums);
    setAvgRows(rowAverages);
    setSumCols(colSums);
    setAvgCols(colAverages);
  }

  function handleGenerateNewMatrix() {
    const newMatrix = generateMatrix();
    setMatrix(newMatrix);
    calculateSumsAndAverages();
  }

  React.useEffect(() => {
    calculateSumsAndAverages();
  }, [matrix]);

  return (
    <div>
      <h2>Matriz</h2>
      <table border="1" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((num, colIndex) => (
                <td key={colIndex} style={{ padding: '5px', textAlign: 'center' }}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Resultados</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h4>A (Suma de Filas)</h4>
          <ul>
            {sumRows.map((sum, index) => (
              <li key={index}>{sum}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>B (Promedio de Filas)</h4>
          <ul>
            {avgRows.map((avg, index) => (
              <li key={index}>{avg}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>C (Suma de Columnas)</h4>
          <ul>
            {sumCols.map((sum, index) => (
              <li key={index}>{sum}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>D (Promedio de Columnas)</h4>
          <ul>
            {avgCols.map((avg, index) => (
              <li key={index}>{avg}</li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={handleGenerateNewMatrix}>Generar Nueva Matriz</button>
    </div>
  );
};

export default MatrizComponent;
