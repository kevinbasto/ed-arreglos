import React, { useState } from 'react';

const VentasComponent = () => {
  const [ventas, setVentas] = useState([
    [5, 65, 10, 12, 24, 11, 22],
    [40, 55, 10, 11, 11, 19, 12],
    [15, 41, 78, 14, 51, 14, 51],
    [25, 30, 7, 9, 24, 32, 21],
    [12, 26, 30, 12, 9, 10, 20],
    [50, 20, 50, 50, 16, 35, 25],
    [20, 3, 25, 20, 10, 15, 6],
    [10, 22, 14, 12, 32, 8, 15],
    [35, 22, 8, 5, 8, 12, 10],
    [20, 10, 15, 12, 25, 16, 18],
    [50, 23, 24, 15, 16, 82, 45],
    [5, 30, 46, 25, 12, 22, 15],
  ]);

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  function obtenerVentaMenor() {
    let minVenta = Infinity;
    let dia = '';
    let mes = -1;

    ventas.forEach((mesVentas, mesIndex) => {
      mesVentas.forEach((venta, diaIndex) => {
        if (venta < minVenta) {
          minVenta = venta;
          dia = diasSemana[diaIndex];
          mes = mesIndex + 1;
        }
      });
    });

    return { minVenta, dia, mes };
  }

  function obtenerVentaMayor() {
    let maxVenta = -Infinity;
    let dia = '';
    let mes = -1;

    ventas.forEach((mesVentas, mesIndex) => {
      mesVentas.forEach((venta, diaIndex) => {
        if (venta > maxVenta) {
          maxVenta = venta;
          dia = diasSemana[diaIndex];
          mes = mesIndex + 1;
        }
      });
    });

    return { maxVenta, dia, mes };
  }

  function obtenerVentaTotal() {
    return ventas.flat().reduce((acc, venta) => acc + venta, 0);
  }

  function obtenerVentasPorDia() {
    const ventasPorDia = Array(7).fill(0);

    ventas.forEach(mesVentas => {
      mesVentas.forEach((venta, diaIndex) => {
        ventasPorDia[diaIndex] += venta;
      });
    });

    return ventasPorDia;
  }

  const { minVenta, dia: diaMenor, mes: mesMenor } = obtenerVentaMenor();
  const { maxVenta, dia: diaMayor, mes: mesMayor } = obtenerVentaMayor();
  const ventaTotal = obtenerVentaTotal();
  const ventasPorDia = obtenerVentasPorDia();

  return (
    <div>
      <h2>Ventas Mensuales</h2>
      <table border="1" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {ventas.map((mesVentas, mesIndex) => (
            <tr key={mesIndex}>
              {mesVentas.map((venta, diaIndex) => (
                <td key={diaIndex} style={{ padding: '5px', textAlign: 'center' }}>{venta}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Resultados</h3>
      <p>La menor venta fue: {minVenta} en el mes {mesMenor} y día {diaMenor}.</p>
      <p>La mayor venta fue: {maxVenta} en el mes {mesMayor} y día {diaMayor}.</p>
      <p>Venta total: ${ventaTotal}</p>
      <h4>Venta por día:</h4>
      <ul>
        {ventasPorDia.map((venta, index) => (
          <li key={index}>{diasSemana[index]}: ${venta}.00</li>
        ))}
      </ul>
    </div>
  );
};

export default VentasComponent;
