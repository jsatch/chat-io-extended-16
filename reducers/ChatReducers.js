var chat = function (state = {}, action){
  switch (action.type) {
    case 'ENVIAR_MENSAJE':
      console.log('Agregado');
      return Object.assign({},state, {
        usuario: action.usuario,
        texto: action.texto
      });
    case 'RECIBIR_MENSAJE':
      console.log('Recibimos', action);
      return Object.assign({},state, {
        chats : action.chats
      });
    default:
      return state;
  }
};
module.exports = chat;
