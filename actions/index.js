import firebase from 'firebase';

// Inicializamos el listener a chats
module.exports = {
  startListeningToChats : function(){
    return function(dispatch,getState){
      firebase.database().ref('chats').on('value', function(snapshot){
        console.log("Llega evento de recepcion");
        dispatch({
          type : 'RECIBIR_MENSAJE',
          chats : snapshot.val()
        });
      });
    }
  },
  sendChatMessage : (usuario, texto) => {
    var database = firebase.database();

    // Agregamos un nuevo mensaje a Firebase
    console.log('Agregamos ');
    database.ref('chats').push({
      usuario : usuario,
      texto : texto
    });
    return function(dispatch,getState){
      dispatch({
        type : 'ENVIAR_MENSAJE',
        usuario : usuario,
        texto : texto
      })
    }
  }
};
