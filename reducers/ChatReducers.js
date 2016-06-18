var chat = function (state = {}, action){
  switch (action.type) {
    case 'ENVIAR_MENSAJE':
      return Object.assign({},{
        usuario: action.usuario,
        texto: action.texto
      });
      break;
    case 'RECIBIR_MENSAJE':

      break;
    default:

  }
};
module.exports = chat;
