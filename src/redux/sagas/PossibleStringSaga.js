import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPossibleStrings(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`/api/strings/possible`);
    console.log(response);
    
    yield put({type: 'SET_POSSIBLE_STRINGS', payload: response});
  } 
  catch (error) {
    console.log('Error with getting strings:', error);

  }
}




function* possibleStringSaga() {
  yield takeLatest('FETCH_POSSIBLE_STRINGS', fetchPossibleStrings);
}

export default possibleStringSaga;
