import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchStrings(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`/api/strings`, {params: action.payload});
    console.log(response);
    
    yield put({type: 'SET_STRINGS', payload: response});
  } 
  catch (error) {
    console.log('Error with getting strings:', error);

  }
}


function* addString(action) {
  try {
   
    yield axios.post('/api/strings', action.payload);

    yield put({ type: 'FETCH_STRINGS' });

  } catch (error) {
    console.log('Error with adding a string:', error);
  }
}

function* StringSaga() {
  yield takeLatest('FETCH_STRINGS', fetchStrings);
  yield takeLatest('ADD_STRING', addString);
}

export default StringSaga;
