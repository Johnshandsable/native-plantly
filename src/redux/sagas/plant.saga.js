import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const getPlants = function* (action) {
  try {
    // gets data from server
    console.log('in getPlants Saga');
    const response = yield axios.get('/api/plant-details');

    console.log('SAGAS - response', response.data);

    yield put({
      type: 'SET_PLANTS',
      payload: response.data,
    });
  } catch (err) {
    console.error('SAGAS - ', err);
  }
}; // end getPlants

function* getSinglePlantDetailView(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`/api/plant-details/${action.payload}`);
    yield put({
      type: 'SET_DETAILED_PLANT',
      payload: response.data,
    });
  } catch (err) {
    console.error('SAGAS - ', err);
  }
}

function* plantSaga() {
  // listen for this and do function
  yield takeEvery('GET_PLANTS', getPlants);
  yield takeEvery('GET_SINGLE_PLANT_DETAIL_VIEW', getSinglePlantDetailView);
} // end plantSaga

export default plantSaga;
