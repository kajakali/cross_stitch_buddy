const projectBeingAddedReducer = (state = [], action) => {
  console.log(action.payload);
  if(action.type === 'SET_PROJECT_BEING_ADDED'){
    return action.payload.data[0];
  }
  return state
};

// user will be on the redux state at:
// state.user
export default projectBeingAddedReducer;
