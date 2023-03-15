const base_url = 'http://localhost:3001';

class Auth {
  _handleResponce(res) {
      if (!res.ok) {
          return Promise.reject(`${res.status}`);
      }
      return res.json();
  }

  request = ({
    url,
    method = 'POST',
    token,
    data
  }) => {
    return fetch(`${base_url}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...!!token && { 'Authorization': `Bearer ${token}` }
      },
      ...!!data && { body: JSON.stringify(data) }
    })
    .then(this._handleResponce);
  };

  register = (name, email, password) => {
    return this.request({
        url:'/signup',
        data: {name, email, password}
    })
  };
  authorization = ( email, password) => {
    return this.request({
        url:'/signin',
        data: {email, password}
    })
  };
  checkToken = (token)=> {
    return this.request({
        url:'/api/users/me',
        method: 'GET',
        token
    });
  };
};

const auth = new Auth();
export default auth;