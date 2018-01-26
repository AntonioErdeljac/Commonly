const jwt = require('express-jwt');
const secret = require('../config').secret;

function getTokenFromHeaders(req) {
  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token'){
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

const auth = {
  required: jwt({
    secret,
    getToken: getTokenFromHeaders,
    userProperty: 'payload',
  }),
  optional: jwt({
    secret,
    credentialsRequired: false,
    getToken: getTokenFromHeaders,
    userProperty: 'payload',
  })
};

module.exports = auth;