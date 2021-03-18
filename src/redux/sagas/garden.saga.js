import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDropdown() {
  try {
    const response = yield axios.get('garden/dropdown');
    // console.log('CLIENT - response', response);
    yield put({
      type: 'SET_DROPDOWN',
      payload: response.data,
    });
  } catch (err) {
    console.error('CLIENT - an error occurred grabbing dropdown items', err);
  }
}

function* gardenSaga() {
  // listen for this and do function
  yield takeLatest('GET_DROPDOWN', getDropdown);
} // end plantSaga

export default gardenSaga;
