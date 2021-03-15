import { put, takeLatest } from 'redux-saga/effects';
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
    console.error(err);
  }
}; // end getPlants

function* plantSaga() {
  // listen for this and do function
  yield takeLatest('GET_PLANTS', getPlants);
} // end plantSaga

export default plantSaga;
