import React, { PropTypes } from 'react';

// Presentational Component
const Mensaje = ({usuario, texto}) => {
  return <li className="collection-item avatar">
    <span className="title">{usuario}</span>
    <img src="http://g01.a.alicdn.com/kf/HTB1kvviJVXXXXXhXVXXq6xXFXXX2/New-Gold-V-m%C3%A1scara-de-la-venganza-para-hombre-disfraz-de-Halloween-fiesta-de-disfraces-m%C3%A1scara.jpg" alt="" className="circle" />
    <p>{texto}</p>
  </li>;
};

Mensaje.propTypes = {
  usuario : PropTypes.string,
  texto : PropTypes.string
};

export default  Mensaje;
