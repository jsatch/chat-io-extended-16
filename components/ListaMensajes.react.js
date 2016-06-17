import React from 'react';
import Mensaje from './Mensaje.react';

// Presentational Component
const ListaMensajes = () => {
  return <div>
    <h5>Lista de Mensajes</h5>
    <div className="divider"></div>
    <ul className="collection">
      <Mensaje />
      <Mensaje />
    </ul>
  </div>;
};module.exports = ListaMensajes;
