

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETTOPICS':
      const newState = [...action.topics]
      console.log('in da newState',newState);
      return newState;
    default:
      return state;
  }
}


export default topicReducer;
