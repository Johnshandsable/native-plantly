import { combineReducers } from 'redux';

const plantReducer = (state = [], action) => {
  console.log('Reducer - ', action.payload);
  switch (action.type) {
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  plantReducer,
});
