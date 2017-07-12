

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETTOPICS':
      return [...action.topics];
      // console.log('in da newState',newState);
    case 'VOTEFORTOPIC':
     let  newState = Object.assign([], state);
      let myId;
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].id === action.topicID) {
          myId=i;
        }
      }
      newState[myId].votes.push({selection:action.voteSelection});
      return newState;
    case 'ADDTOPIC':
      return [...state, action.topic];
    default:
      return state;
  }
}


export default topicReducer;
