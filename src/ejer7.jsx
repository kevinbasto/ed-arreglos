import React from 'react';

const Calificaciones = () => {
  const calificaciones = [
    [5.5, 8.6, 10.0],
    [8.0, 5.5, 10.0],
    [9.0, 4.1, 7.8],
    [10.0, 2.2, 8.1],
    [9.5, 8.2, 7.0],
    [6.0, 4.0, 6.5],
    [8.0, 9.2, 7.0],
    [9.0, 9.4, 5.0],
    [4.0, 7.0, 9.2],
    [10.0, 9.0, 8.4],
    [9.0, 4.6, 7.5]
  ];

  const calcularPromedioAlumno = () => {
    return calificaciones.map(fila => {
      const suma = fila.reduce((acc, num) => acc + num, 0);
      return (suma / fila.length).toFixed(1);
    });
  };

  const encontrarPromedioAltoYBajo = (promedios) => {
    let max = Math.max(...promedios);
    let min = Math.min(...promedios);
    return { max, min };
  };

  const contarReprobados = () => {
    return calificaciones.flat().filter(nota => nota < 7.0).length;
  };

  const distribuirCalificaciones = (promedios) => {
    const distribucion = {
      '0-4.9': 0,
      '5.0-5.9': 0,
      '6.0-6.9': 0,
      '7.0-7.9': 0,
      '8.0-8.9': 0,
      '9.0-10.0': 0,
    };

    promedios.forEach(promedio => {
      if (promedio >= 0 && promedio <= 4.9) distribucion['0-4.9']++;
      else if (promedio >= 5.0 && promedio <= 5.9) distribucion['5.0-5.9']++;
      else if (promedio >= 6.0 && promedio <= 6.9) distribucion['6.0-6.9']++;
      else if (promedio >= 7.0 && promedio <= 7.9) distribucion['7.0-7.9']++;
      else if (promedio >= 8.0 && promedio <= 8.9) distribucion['8.0-8.9']++;
      else if (promedio >= 9.0 && promedio <= 10.0) distribucion['9.0-10.0']++;
    });

    return distribucion;
  };

  const promediosAlumnos = calcularPromedioAlumno();
  const { max: promedioMax, min: promedioMin } = encontrarPromedioAltoYBajo(promediosAlumnos);
  const totalReprobados = contarReprobados();
  const distribucionFinal = distribuirCalificaciones(promediosAlumnos);

  return (
    <div>
      <h3>Resultados de Calificaciones</h3>
      <h4>Promedio de cada alumno</h4>
      <ul>
        {promediosAlumnos.map((promedio, index) => (
          <li key={index}>Alumno {index + 1}: {promedio}</li>
        ))}
      </ul>
      <p>Promedio más alto: {promedioMax}</p>
      <p>Promedio más bajo: {promedioMin}</p>
      <p>Total de parciales reprobados (menores a 7.0): {totalReprobados}</p>
      <h4>Distribución de calificaciones finales</h4>
      <ul>
        {Object.entries(distribucionFinal).map(([rango, cantidad], index) => (
          <li key={index}>{rango}: {cantidad} Alumnos</li>
        ))}
      </ul>
    </div>
  );
};

export default Calificaciones;
