import React from 'react';

// Presentational Component
const FormularioMensaje = () => {
  return <div className="card-panel teal lighten-5">
    <div className="row">
      <label className="blue-text text-darken-2">Mensaje</label>
      <input type="text" placeholder="Ingrese su usuario"/>
      <textarea placeholder="Ingrese su mensaje"></textarea>
    </div>
    <button className="waves-effect waves-light btn">Enviar</button>
  </div>;
};

module.exports = FormularioMensaje;
