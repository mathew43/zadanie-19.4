import {ADD_COMMENT} from './actions'


function reducer (state = initialState, action){
  switch(action.type){
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text
        votes: 0
      }
      , ...state.comments];

    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });

    default:
      return state;
  }
}

const initialState = {
  comments: [],
  users: []
};
