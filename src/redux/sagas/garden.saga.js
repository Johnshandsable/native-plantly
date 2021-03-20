import { put, takeLatest } from 'redux-saga/effects';
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

function* deleteDropdown(action) {
  try {
    console.log('payload', action.payload);
    yield axios.delete(`/garden/dropdown/${action.payload}`);
    yield put({
      type: 'GET_DROPDOWN',
    });
  } catch (err) {
    console.error('CLIENT - an error occurred deleting a dropdown');
  }
}

function* editDropdown(action) {
  try {
    console.log('payload', action.payload);
    yield axios.put(`/garden/dropdown/${action.payload}`);
    yield put({
      type: 'GET_DROPDOWN',
    });
  } catch (err) {
    console.error('CLIENT - an error occurred updating a dropdown name');
  }
}

function* gardenSaga() {
  // listen for this and do function
  yield takeLatest('GET_DROPDOWN', getDropdown);
  yield takeLatest('ADD_DROPDOWN_SECTION', addDropdown);
  yield takeLatest('DELETE_DROPDOWN_SECTION', deleteDropdown);
  yield takeLatest('EDIT_DROPDOWN_SECTION', editDropdown);
} // end plantSaga

export default gardenSaga;
