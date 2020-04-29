const stringsNeededReducer = (state = [], action) => {
  if(action.type === 'SET_NEEDED_STRINGS'){
    return action.payload.data;
  }
  return state
};

// user will be on the redux state at:
// state.user
export default stringsNeededReducer;
