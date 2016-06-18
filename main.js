import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './components/ChatApp.react';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import chat from './reducers/ChatReducers';
import firebase from 'firebase'
import thunk from 'redux-thunk';

import {startListeningToChats} from './actions'


var config = {
  apiKey: "AIzaSyANPcpMiWs7bt_qAJQpsLGVI-TqWzcoDxw",
  authDomain: "chat-io-extended-16.firebaseapp.com",
  databaseURL: "https://chat-io-extended-16.firebaseio.com",
  storageBucket: "",
};
let app = firebase.initializeApp(config);

// Aplicamos el middleware para que al llamar al dispatch podamos
// llamarlo con una funcion que se ejecute asincronamente.
let store = createStore(chat, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('content'));

store.dispatch(startListeningToChats());
