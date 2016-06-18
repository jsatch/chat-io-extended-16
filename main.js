import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './components/ChatApp.react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chat from './reducers/ChatReducers';

//export let store = createStore(chat);
let store = createStore(chat);

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('content'));
