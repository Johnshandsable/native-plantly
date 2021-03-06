import { combineReducers } from 'redux';

const plantReducer = (state = [], action) => {
  // console.log('Plant Reducer - ', action.payload);
  switch (action.type) {
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

const singlePlantReducer = (state = {}, action) => {
  // console.log('Single Plant Reducer - ', action.payload);
  switch (action.type) {
    case 'SET_DETAILED_PLANT':
      return action.payload;
    default:
      return state;
  }
};

const plantsBySectionReducer = (state = [], action) => {
  console.log('payload', action.payload);
  switch (action.type) {
    case 'SET_PLANTS_BY_SECTION':
      return action.payload;
    case 'RESET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  plantReducer,
  singlePlantReducer,
  plantsBySectionReducer,
});
