import {ADD_COMMENT,
EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, REMOVE_COMMENT} from './actions'


function reducer (state = initialState, action){
  switch(action.type){
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text
        likes: 0,
        dislikes: 0
      }
      , ...state.comments];

    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });

    case EDIT_COMMENT:
      return [
          state.map( comment => {
            return comment.id === action.id ?
              Object.assign({}, comment, {
                  text: action.text
                  }) :
                comment
          })
      ]

    case THUMB_UP_COMMENT:
        return [
            state.map( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                        likes: comment.likes + 1
                    }) :
                    comment
            })
        ]

    case THUMB_DOWN_COMMENT:
        return [
            state.map ( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                        dislikes: comment.dislikes + 1
                    }) :
                    comment
            })
        ]
    default:
      return state;
  }
}

const initialState = {
  comments: [],
  users: []
};
