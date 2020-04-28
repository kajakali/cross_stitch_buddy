const projectsReducer = (state = [], action) => {
  if(action.type === 'SET_PROJECTS'){
    return action.payload.data;
  }
  return state
};

// user will be on the redux state at:
// state.user
export default projectsReducer;
