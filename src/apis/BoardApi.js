import Api from '../modules/Api';

const localApiAddr = 'http://localhost:8080';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;

export default class BoardApi extends Api {
  constructor() {
    super(apiAddr);
  }

  fetchBoards(userId) {
    return this.get(`/board/user/${userId}`);
  }

  fetchBoard(id) {
    return this.get(`/board/${id}`);
  }

  createBoard(name) {
    return this.post(`/board`, {name: name});
  }

  updateBoard(id, name) {
    return this.put(`/board/${id}`, {name: name});
  }

  deleteBoard(id) {
    return this.del(`/board/${id}`);
  }

  createGroup(name, boardId) {
    return this.post('/card-group', {name: name, board_id: boardId});
  }

  renameGroup(name, boardId, id) {
    return this.put(`/card-group/${id}`, {name: name, board_id: boardId});
  }

  deleteGroup(id) {
    return this.del(`/card-group/${id}`);
  }

  createCard(caption, cardGroupId) {
    return this.post('/cards', {caption: caption, card_group_id: cardGroupId});
  }

  deleteCard(id) {
    return this.del(`/cards/${id}`);
  }

  updateCard(cardId, update) {
    return this.put(`/cards/${cardId}`, update);
  }

  addComment(cardId, userId, comment) {
    return this.post(`/comments`, {
      user_id: userId,
      card_id: cardId,
      text: comment,
    });
  }

  attachUserToCard(userId, cardId) {
    return this.post('/cards/user/attach', {
      user_id: userId,
      card_id: cardId,
    });
  }


  detachUserFromCard(userId, cardId) {
    return this.post('/cards/user/detach', {
      user_id: userId,
      card_id: cardId,
    });
  }

  deleteComment(commentId) {
    return this.del(`/comments/${commentId}`);
  }
}
