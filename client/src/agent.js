import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';
import { apis } from './constants';

let token;
const superagent = superagentPromise(_superagent, global.Promise);
const getBody = res => res.body;
const tokenPlugin = (req) => {
  if (token) {
    req.set('Authorization', `Token ${token}`);
  }
};

const routes = {
  get: url =>
    superagent.get(`${apis.API_ROOT}${url}`).use(tokenPlugin).then(getBody),
  post: (url, body) =>
    superagent.post(`${apis.API_ROOT}${url}`, body).use(tokenPlugin).then(getBody),
};

const Auth = {
  current: () =>
    routes.get('/user/current'),
  login: (email, password) =>
    routes.post('/user/login', { user: { email, password } }),
};

const Tasks = {
  all: () =>
    routes.get('/tasks'),
};

export default {
  Auth,
  Tasks,
  setToken: (_token) => { token = _token; },
};
