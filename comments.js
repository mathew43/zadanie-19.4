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

    case actions.EDIT_COMMENT:
      return [
          state.map( comment => {
            return comment.id === action.id ?
              Object.assign({}, comment, {
                  text: action.text
                  }) :
                comment
          })
      ]

    case actions.THUMB_UP_COMMENT:
        return [
            state.map( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                        votes: comment.votes + 1
                    }) :
                    comment
            })
        ]

    case actions.THUMB_DOWN_COMMENT:
        return [
            state.map ( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                        votes: comment.votes - 1
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
