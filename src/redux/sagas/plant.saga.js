import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const getPlants = function* () {
  try {
    // gets data from server
    const response = yield axios.get(`/api/plant-details`);

    console.log('SAGAS - response', response.data);

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
    console.log('SAGAS - response', response);

    yield put({
      type: 'SET_PLANTS',
      payload: response,
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
    // console.log(action.payload);
    yield axios.post(`/api/plant-details`, action.payload);
    yield put({
      type: 'GET_PLANTS',
    });
  } catch (err) {
    console.error('CLIENT - post an error occurred', err);
  }
}

function* getPlantsBySection(action) {
  try {
    console.log('action', action);
    const response = yield axios.get(`/api/section/${action.payload.data}`);
    console.log('response', response.data);
    if (response.data === undefined || response.data.length <= 0) {
      console.log('invalid response');
      return;
    }
    yield put({
      type: 'SET_PLANTS_BY_SECTION',
      payload: response.data,
    });
    action.payload.onComplete();
  } catch (err) {
    console.error('CLIENT - get plant by section an error occurred', err);
  }
}

function* plantSaga() {
  // listen for this and do function
  yield takeLatest('GET_PLANTS', getPlants);
  yield takeLatest('GET_SINGLE_PLANT_DETAIL_VIEW', getSinglePlantDetailView);
  yield takeLatest('ADD_PLANT', addPlant);
  yield takeLatest('SEARCH_PLANTS', searchPlants);
  yield takeLatest('GET_PLANTS_BY_SECTION', getPlantsBySection);
} // end plantSaga

export default plantSaga;
