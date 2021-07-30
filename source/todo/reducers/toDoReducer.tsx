//import React from 'react';
const initialState = {};

interface Action {
  type: string;
  payload?: any;
}

const toDoReducer = (state = initialState, action: Action) => {
  const {type, payload} = action;

  switch (type) {
    case 'typeName':
      return {...state, ...payload};

    default:
      return state;
  }
};

export default toDoReducer;
