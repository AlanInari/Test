import React from 'react';
import cangrejo from '../assets/cangrejo.jpg';

const Logo = () => {
  return (
    <>
      <table>
        <th>
          <tr>
            <td className="primeraColumna" >
              Primera columna
            </td>
            <td>
              Segunda columna
            </td>
            <td>
              Tercera columna
            </td>
            <td>
              Cuarta columna
            </td>
          </tr>
        </th>
      </ table>
      <a>
        <img src={cangrejo} className="logo animarCangrejo react" alt="Vite logo" />
      </a>
    </>
  )
}

export default Logo