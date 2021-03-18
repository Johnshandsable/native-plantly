import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getDropdown() {
  try {
    const response = yield axios.get('/garden/dropdown');
    yield put({
      type: 'SET_DROPDOWN',
      payload: response.data,
    });
  } catch (err) {
    console.error('CLIENT - an error occurred grabbing dropdown items', err);
  }
}

function* addDropdown(action) {
  try {
    const response = yield axios.post(`/garden/dropdown`, action.payload);
    console.log('got back a response from server', response);
    yield put({
      type: 'GET_DROPDOWN',
    });
  } catch (err) {
    console.error('CLIENT - an error occurred adding a dropdown', err);
  }
}

function* gardenSaga() {
  // listen for this and do function
  yield takeLatest('GET_DROPDOWN', getDropdown);
  yield takeEvery('ADD_DROPDOWN_SECTION', addDropdown);
} // end plantSaga

export default gardenSaga;
