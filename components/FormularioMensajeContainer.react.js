import React from 'react';

import FormularioMensaje from './FormularioMensaje.react'

import { connect } from 'react-redux'
import {sendChatMessage} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return state || {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick : (usuario, mensaje) => sendChatMessage(usuario, mensaje)
  }
};

const FormularioMensajeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormularioMensaje);

export default FormularioMensajeContainer;


/*class FormularioMensajeContainer extends React.Component{
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render(){
    const props = this.props;
    const state = store.getState();

    return (
      <FormularioMensaje
        onClick={(usuario, mensaje) => store.dispatch({
          type : 'ENVIAR_MENSAJE',
          usuario : usuario,
          texto : mensaje
        })
      }/>
    )
  }
}

module.exports = FormularioMensajeContainer;*/
