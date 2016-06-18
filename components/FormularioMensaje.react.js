import React, { PropTypes } from 'react';

// Presentational Component
const FormularioMensaje = ({onClick}) => {
  let inputUsuario, inputTexto
  return <div className="card-panel teal lighten-5">
    <div className="row">
      <label className="blue-text text-darken-2">Mensaje</label>
      <input
        type="text"
        placeholder="Ingrese su usuario"
        ref={c => inputUsuario = c}/>
      <textarea
        placeholder="Ingrese su mensaje"
        ref={c => inputTexto = c}>

      </textarea>
    </div>
    <button
      className="waves-effect waves-light btn"
      onClick={e => {
         e.preventDefault();
         onClick(inputUsuario.value, inputTexto.value);
       }}>Enviar</button>
  </div>;
};

FormularioMensaje.propTypes = {
  onClick: PropTypes.func.isRequired
}

module.exports = FormularioMensaje;
