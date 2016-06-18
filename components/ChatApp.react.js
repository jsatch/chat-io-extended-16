import React from 'react';
import FormularioMensajeContainer from './FormularioMensajeContainer.react';
import ListaMensajesContainer from './ListaMensajesContainer.react';

// Presentational Component
const ChatApp = () => {
  return <div className="container">
    <h1>IO Extended Chat</h1>
    <div className="row">
      <div className="col s12 m4">
        <FormularioMensajeContainer />
      </div>
      <div className="col s12 m8">
        <ListaMensajesContainer />
      </div>
    </div>
  </div>;
}

module.exports = ChatApp;
