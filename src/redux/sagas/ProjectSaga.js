import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchProjects(action) {
  try {
    const response = yield axios.get('/api/projects');
    console.log(response);
    
    yield put({type: 'SET_PROJECTS', payload: response});
  } 
  catch (error) {
    console.log('Error with getting projects:', error);

  }
}


function* addProject(action) {
  try {
   
    yield axios.post('/api/projects', action.payload);

    yield put({ type: 'FETCH_PROJECTS' });

  } catch (error) {
    console.log('Error with adding a project:', error);
  }
}

function* ProjectSaga() {
  yield takeLatest('FETCH_PROJECTS', fetchProjects);
  yield takeLatest('ADD_PROJECT', addProject);
}

export default ProjectSaga;
