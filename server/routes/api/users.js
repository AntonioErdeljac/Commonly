const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');

router.post('/users', (req,res,next) => {
  console.log(req.body);
  if(!req.body.user.username) {
    return res.status(402).json({ errors: { username: 'is required' } });
  }

  if(!req.body.user.email) {
    return res.status(402).json({ errors: { email: 'is required' } });
  }

  if(!req.body.user.password) {
    return res.status(402).json({ errors: { password: 'is required' } });
  }

  const user = new User(req.body.user);
  user.setPassword(req.body.user.password);

  return user.save().then(() => {
    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

module.exports = router;