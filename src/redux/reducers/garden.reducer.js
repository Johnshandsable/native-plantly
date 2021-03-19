import { combineReducers } from 'redux';

const gardenReducer = (state = [], action) => {
  console.log('Garden Reducer - ', action.payload);
  switch (action.type) {
    case 'SET_DROPDOWN':
      return action.payload;
    default:
      return state;
  }
};

export default gardenReducer;
