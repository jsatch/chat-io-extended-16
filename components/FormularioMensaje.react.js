import React, { PropTypes } from 'react';

// Presentational Component
const FormularioMensaje = ({onClick}) => {
  return <div className="card-panel teal lighten-5">
    <div className="row">
      <label className="blue-text text-darken-2">Mensaje</label>
      <input type="text" placeholder="Ingrese su usuario"/>
      <textarea placeholder="Ingrese su mensaje"></textarea>
    </div>
    <button
      className="waves-effect waves-light btn"
      onClick={e => {
         e.preventDefault();
         onClick('usuario1', 'mensaje1');
       }}>Enviar</button>
  </div>;
};

FormularioMensaje.propTypes = {
  onClick: PropTypes.func.isRequired
}

module.exports = FormularioMensaje;
