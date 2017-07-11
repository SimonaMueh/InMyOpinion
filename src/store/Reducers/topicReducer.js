

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETTOPICS':
      let newState = [...action.topics];
      console.log('in da newState',newState);
      return newState;
    case 'VOTEFORTOPIC':
      newState = Object.assign([], state);
      let myId;
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].id === action.topicID) {
          myId=i;
        }
      }
      newState[myId].votes.push({selection:action.voteSelection});
      return newState;
    default:
      return state;
  }
}


export default topicReducer;
