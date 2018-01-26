const auth = require('../auth');
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();

const User = mongoose.model('User');

router.post('/register', (req, res, next) => {
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

router.post('/login', (req, res, next) => {
  if(!req.body.user.email) {
    return res.status(402).json({ errors: { email: 'is required' } });
  }

  if(!req.body.user.password) {
    return res.status(402).json({ errors: { password: 'is required' } });
  }

  passport.authenticate('local', { session: false }, (err, user, info) => {
    if(err) return next(err);

    if(user) {
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()})
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.get('/current', auth.required, (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if(!user) { return res.sendStatus(422); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

router.use(function(err,req,res,next){
  if(err.name === 'ValidationError'){
      return res.status(422).json({
          errors: Object.keys(err.errors).reduce(function(errors, key){
              errors[key] = err.errors[key].message;

              return errors;
          }, {})
      })
  }
  return next(err);
});


module.exports = router;