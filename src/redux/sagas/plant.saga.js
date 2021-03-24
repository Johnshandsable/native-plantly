import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const getPlants = function* () {
  try {
    // gets data from server
    const response = yield axios.get(`/api/v2`);
    console.log('SAGAS - response', response.data);

    if (response.data.length < 1) {
      console.log('Could not search for particular result');
      return;
    }

    yield put({
      type: 'SET_PLANTS',
      payload: response.data,
    });
  } catch (err) {
    console.error('SAGAS - ', err);
  }
}; // end getPlants

const searchPlants = function* (action) {
  try {
    // gets data from server
    console.log('payload', action.payload);
    const response = yield axios.get(`/api/search/${action.payload}`);
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
    console.log('single plant', action.payload);
    const response = yield axios.get(
      `/api/plant-details/${action.payload.data}`
    );
    yield put({
      type: 'SET_DETAILED_PLANT',
      payload: response.data,
    });
    action.payload.onComplete();
  } catch (err) {
    console.error('SAGAS - ', err);
  }
}

function* addPlant(action) {
  try {
    yield axios.post(`/api/plant-details`, action.payload);
  } catch (err) {
    console.error('CLIENT - post an error occurred', err);
  }
}

function* getPlantsBySection(action) {
  try {
    console.log('action', action);
    const response = yield axios.get(`/api/section/${action.payload.data}`);
    console.log('getting plants by section', response.data);
    if (response.data === undefined || response.data.length < 1) {
      yield put({
        type: 'RESET_PLANTS',
        payload: [],
      });
      return;
    }
    yield put({
      type: 'SET_PLANTS_BY_SECTION',
      payload: response.data,
    });
  } catch (err) {
    console.error('CLIENT - get plant by section an error occurred', err);
  }
}

function* deletePlant(action) {
  try {
    console.log('payload', action.payload);
    const response = yield axios.delete(
      `/api/plant-details/${action.payload.id}/${action.payload.sectionId}`
    ); // returns section id of deleted row, so we can update the garden table
    console.log('data', response.data);
    console.log('response', response);
    yield put({
      type: 'GET_PLANTS_BY_SECTION',
      payload: {
        data: response.data[0].section_id,
      },
    });
    console.log('something is happening');
    // action.payload.onComplete();
  } catch (err) {
    console.error('CLIENT - delete plant by section an error occurred', err);
  }
}

function* plantSaga() {
  // listen for this and do function
  yield takeLatest('GET_PLANTS', getPlants);
  yield takeLatest('GET_SINGLE_PLANT_DETAIL_VIEW', getSinglePlantDetailView);
  yield takeLatest('ADD_PLANT', addPlant);
  yield takeLatest('SEARCH_PLANTS', searchPlants);
  yield takeLatest('GET_PLANTS_BY_SECTION', getPlantsBySection);
  yield takeLatest('DELETE_PLANT', deletePlant);
} // end plantSaga

export default plantSaga;
