

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

// 
// const topicReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'GETTOPICS':
//       const newState = action.topics.reduce((acc, topic) => {
//         acc[topic.id] = topic;
//         return acc;
//       }, {});
//       return Object.assign({}, state, newState);
//     default:
//       return state;
//   }
// }
//
//
// export default topicReducer;
