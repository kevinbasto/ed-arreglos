import React from 'react';

const Ventas = () => {
  const ventas = [
    [5, 16, 10, 12, 24, 10, 18],
    [40, 55, 10, 11, 14, 17, 22],
    [35, 22, 8, 11, 15, 19, 20],
    [50, 21, 10, 15, 28, 18, 25],
    [70, 40, 5, 12, 22, 30, 18],
    [45, 40, 32, 9, 12, 14, 20],
    [50, 20, 19, 13, 12, 16, 21],
    [22, 33, 12, 15, 17, 13, 25],
    [34, 15, 20, 25, 12, 28, 30],
    [40, 45, 15, 46, 22, 18, 22],
    [30, 18, 17, 16, 20, 25, 21],
    [50, 22, 13, 14, 15, 18, 19],
  ];

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const encontrarMenorVenta = () => {
    let menor = ventas[0][0];
    let mes = 0;
    let dia = 0;
    ventas.forEach((fila, i) => {
      fila.forEach((venta, j) => {
        if (venta < menor) {
          menor = venta;
          mes = i;
          dia = j;
        }
      });
    });
    return { menor, mes: mes + 1, dia: diasSemana[dia] };
  };

  const encontrarMayorVenta = () => {
    let mayor = ventas[0][0];
    let mes = 0;
    let dia = 0;
    ventas.forEach((fila, i) => {
      fila.forEach((venta, j) => {
        if (venta > mayor) {
          mayor = venta;
          mes = i;
          dia = j;
        }
      });
    });
    return { mayor, mes: mes + 1, dia: diasSemana[dia] };
  };

  const calcularVentaTotal = () => {
    return ventas.flat().reduce((acc, venta) => acc + venta, 0);
  };

  const calcularVentaPorDia = () => {
    const ventasPorDia = Array(7).fill(0);
    ventas.forEach(fila => {
      fila.forEach((venta, j) => {
        ventasPorDia[j] += venta;
      });
    });
    return ventasPorDia;
  };

  const menorVenta = encontrarMenorVenta();
  const mayorVenta = encontrarMayorVenta();
  const ventaTotal = calcularVentaTotal();
  const ventasPorDia = calcularVentaPorDia();

  return (
    <div>
      <h3>Resultados de Ventas</h3>
      <p>Menor venta: ${menorVenta.menor}, Mes: {menorVenta.mes}, Día: {menorVenta.dia}</p>
      <p>Mayor venta: ${mayorVenta.mayor}, Mes: {mayorVenta.mes}, Día: {mayorVenta.dia}</p>
      <p>Venta total: ${ventaTotal}</p>
      <h4>Venta por día de la semana</h4>
      <ul>
        {ventasPorDia.map((venta, index) => (
          <li key={index}>{diasSemana[index]}: ${venta}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ventas;
