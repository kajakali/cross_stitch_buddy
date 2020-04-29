import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchNeededStrings(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`/api/strings`, {params: action.payload});
    console.log(response);
    
    yield put({type: 'SET_NEEDED_STRINGS', payload: response});
  } 
  catch (error) {
    console.log('Error with getting strings:', error);

  }
}


function* addNeededString(action) {
  try {
   
    const response = yield axios.post('/api/strings/needed', {data: action.payload});
    yield put({ type: 'FETCH_NEEDED_STRINGS', payload: {project_id: response.data[0]}});
 

  } catch (error) {
    console.log('Error with adding a needed string:', error);
  }
}

function* deleteNeededString(action) {
  try {
    yield console.log(action.payload.thread_needed_id);
    const response = yield axios.delete(`/api/strings/needed/${action.payload.thread_needed_id}`);
    yield put({ type: 'FETCH_NEEDED_STRINGS', payload: {project_id: response.data[0]}});
 

  } catch (error) {
    console.log('Error with deleting a needed string:', error);
  }
}

function* StringSaga() {
  yield takeLatest('ADD_NEEDED_STRING', addNeededString);
  yield takeLatest('FETCH_NEEDED_STRINGS', fetchNeededStrings);
  yield takeLatest('DELETE_NEEDED_STRING', deleteNeededString);
}

export default StringSaga;
