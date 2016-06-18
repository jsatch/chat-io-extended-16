import React from 'react';

import ListaMensajes from './ListaMensajes.react'

import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  if (state.chats == null){
    return {
      chats : []
    }
  }else{
    return {
      chats : Object.keys(state.chats).map(key => Object.assign({id : key}, state.chats[key]))
    }
  }

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

const ListaMensajesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaMensajes);

export default ListaMensajesContainer;
