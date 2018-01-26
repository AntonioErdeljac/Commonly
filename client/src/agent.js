import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';
import { apis } from './constants';

const superagent = superagentPromise(_superagent, global.Promise);
const getBody = res => res.body;

const routes = {
  get: url =>
    superagent.get(`${apis.API_ROOT}${url}`).then(getBody),
  post: (url, body) =>
    superagent.post(`${apis.API_ROOT}${url}`, body).then(getBody),
};

const Auth = {
  login: (email, password) =>
    routes.post('/login', { user: { email, password } }),
};

export default {
  Auth,
};
