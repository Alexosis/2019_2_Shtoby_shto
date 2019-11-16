import BoardApi from '../apis/BoardApi';

// import * as boardActions from './Board';

const boardApi = new BoardApi();

function addCard(cardModel) {
  return function(dispatch, getState) {
    const newModel = {};

    Object.entries(cardModel).forEach(([name, value]) => {
      if (name !== 'card_group_id') {
        if (name !== 'type') {
          newModel[name] = value ? value : (name === 'text' ? '' : []);
        }
      } else {
        newModel['cardGroupId'] = value;
      }
    });

    dispatch({
      type: 'ADD_CARD',
      ...{
        ...newModel,
        users: [getState().user.id],
      },
    });
  };
}

export function createCard(caption, cardGroupId) {
  return function(dispatch) {
    boardApi.createCard(caption, cardGroupId)
        .then((card) => {
          dispatch(addCard(card));
        });
  };
}

function updateCard(id, update) {
  return {
    type: 'UPDATE_CARD',
    id,
    update,
  };
}

// function getBoardId(state, cardId) {
//   let foundId = undefined;

//   const {boards} = state;

//   boards.forEach((b) => {
//     b.cardGroups.forEach((gr) => {
//       gr.cards.forEach((c) => {
//         if (c.id === cardId) {
//           foundId = b.id;
//         }
//       });
//     });
//   });

//   return foundId;
// }

export function addComment(cardId, comment) {
  return function(dispatch, getState) {
    const state = getState();
    const userId = state.user.id;
    // const boardId = getBoardId(state, cardId);

    boardApi.addComment(cardId, userId, comment)
        .then((comment) => {
          // const newComment = {};

          // newComment.id = comment.id;
          // newComment.text = comment.text;
          // newComment.userId = comment['user_id'];
          // newComment.cardId = comment['card_id'];

          dispatch({
            type: 'ADD_COMMENT',
            comment: comment,
          });
        });
  };
}

export function deleteComment(id) {
  return function(dispatch) {
    boardApi.deleteComment(id)
        .then(() => {
          dispatch({type: 'DELETE_COMMENT', id});
        });
  };
}

export function setCaption(
    cardId, newCaption) {
  return function(dispatch) {
    boardApi.updateCard(cardId, {caption: newCaption})
        .then(() => {
          dispatch(updateCard(cardId, {caption: newCaption}));
        });
  };
}

export function setText(
    cardId, newText) {
  return function(dispatch) {
    boardApi.updateCard(cardId, {text: newText})
        .then(() => {
          dispatch(updateCard(cardId, {text: newText}));
        });
  };
}


export function deleteCard(id) {
  return function(dispatch) {
    boardApi.deleteCard(id)
        .then(() => {
          dispatch({
            type: 'DELETE_CARD',
            id: id,
          });
        });
  };
}
