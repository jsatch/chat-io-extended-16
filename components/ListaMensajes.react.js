import React, { PropTypes } from 'react';
import Mensaje from './Mensaje.react';

// Presentational Component
const ListaMensajes = ({chats}) => {
  console.log("chats", chats);
  return <div>
    <h5>Lista de Mensajes</h5>
    <div className="divider"></div>
    <ul className="collection">
      {
        chats.map(mensaje => {
          return <Mensaje key={mensaje.id} usuario={mensaje.usuario} texto={mensaje.texto}/>
        })
      }
    </ul>
  </div>;
};

ListaMensajes.propTypes = {
  chats : PropTypes.array
};

export default ListaMensajes
