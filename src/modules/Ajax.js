const tokenStorage = {
  token: undefined,
};

function attachHeaders(method, body, binary) {
  const headers = new Headers();

  if (tokenStorage.token) {
    // console.log('appending token', tokenStorage.token);
    headers.set('X-Csrf-Token', tokenStorage.token);
  }

  const request = {
    method: method,
    credentials: 'include',
  };

  request.headers = headers;
  if (body) {
    if (!binary) {
      request.body = JSON.stringify(body);
    } else {
      request.body = body;
    }
  }

  return request;
}

function clearToken() {
  if (tokenStorage.token) {
    console.log('clearing token');
    tokenStorage.token = undefined;
  }
}

class Ajax {
  constructor(url) {
    this.apiAddr = url;

    try {
      const apiToken = localStorage.getItem('apitoken');
      if (!(tokenStorage.token) && apiToken) {
        tokenStorage.token = apiToken;
      }
    } catch (e) {
      console.log(e);
    }
  }

  clearToken() {
    clearToken();
  }

  request(method, path, body, binary) {
    return new Promise((resolve, reject) => {
      fetch(this.apiAddr + path, attachHeaders(method, body, binary))
          .then((res) => {
            if (res.status !== 200) {
              reject(Error('status is not 200'));
            } else {
              if (res.headers.has('X-Csrf-Token')) {
                tokenStorage.token = res.headers.get('X-Csrf-Token');
                localStorage.setItem('apitoken', tokenStorage.token);
              }

              resolve(res);
            }
          })
          .catch((err) => reject(err));
    });
  }

  jsonRequest(method, path, body) {
    return this.request(method, path, body)
        .then((res) => res.json());
  }
}

export default Ajax;
