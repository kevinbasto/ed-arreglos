import React, { useState } from 'react';

const CalificacionesComponent = () => {
  const [calificaciones, setCalificaciones] = useState([
    [5.5, 8.6, 10],
    [8.0, 5.5, 10],
    [9.0, 4.1, 7.8],
    [10.0, 2.2, 8.1],
    [7.0, 9.2, 7.1],
    [9.0, 4.0, 6.0],
    [6.5, 5.0, 5.0],
    [4.0, 7.0, 4.0],
    [8.0, 8.0, 9.0],
    [10.0, 9.4, 9.2],
    [5.0, 10.0, 8.4],
    [9.0, 4.6, 7.5],
  ]);

  function calcularPromedios() {
    return calificaciones.map(alumno => {
      const promedio = (alumno.reduce((acc, nota) => acc + nota, 0) / alumno.length).toFixed(1);
      return parseFloat(promedio);
    });
  }

  function obtenerPromedioMasAlto(promedios) {
    return Math.max(...promedios);
  }

  function obtenerPromedioMasBajo(promedios) {
    return Math.min(...promedios);
  }

  function contarReprobados() {
    return calificaciones.flat().filter(nota => nota < 7.0).length;
  }

  function distribuirCalificaciones(promedios) {
    const distribucion = {
      '0.0 - 4.9': 0,
      '5.0 - 5.9': 0,
      '6.0 - 6.9': 0,
      '7.0 - 7.9': 0,
      '8.0 - 8.9': 0,
      '9.0 - 10.0': 0,
    };

    promedios.forEach(promedio => {
      if (promedio >= 0 && promedio <= 4.9) distribucion['0.0 - 4.9']++;
      else if (promedio >= 5.0 && promedio <= 5.9) distribucion['5.0 - 5.9']++;
      else if (promedio >= 6.0 && promedio <= 6.9) distribucion['6.0 - 6.9']++;
      else if (promedio >= 7.0 && promedio <= 7.9) distribucion['7.0 - 7.9']++;
      else if (promedio >= 8.0 && promedio <= 8.9) distribucion['8.0 - 8.9']++;
      else if (promedio >= 9.0 && promedio <= 10.0) distribucion['9.0 - 10.0']++;
    });

    return distribucion;
  }

  const promedios = calcularPromedios();
  const promedioMasAlto = obtenerPromedioMasAlto(promedios);
  const promedioMasBajo = obtenerPromedioMasBajo(promedios);
  const reprobados = contarReprobados();
  const distribucion = distribuirCalificaciones(promedios);

  return (
    <div>
      <h2>Calificaciones</h2>
      <table border="1" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {calificaciones.map((alumno, index) => (
            <tr key={index}>
              {alumno.map((nota, subIndex) => (
                <td key={subIndex} style={{ padding: '5px', textAlign: 'center' }}>{nota}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Resultados</h3>
      <ul>
        {promedios.map((promedio, index) => (
          <li key={index}>Alumno {index + 1}: Promedio = {promedio}</li>
        ))}
      </ul>
      <p>El promedio más alto es: {promedioMasAlto}</p>
      <p>El promedio más bajo es: {promedioMasBajo}</p>
      <p>Parciales reprobados (menores a 7.0): {reprobados}</p>
      <h4>Distribución de Calificaciones Finales:</h4>
      <ul>
        {Object.entries(distribucion).map(([rango, cantidad]) => (
          <li key={rango}>{rango}: {cantidad} Alumnos</li>
        ))}
      </ul>
    </div>
  );
};

export default CalificacionesComponent;
