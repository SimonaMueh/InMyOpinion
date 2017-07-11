
const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETCATEGORIES':
      const newState = action.categories.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
      }, {});
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}


export default categoryReducer;
