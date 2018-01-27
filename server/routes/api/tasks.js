const auth = require('../auth');
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();

const Task = mongoose.model('Task');
const User = mongoose.model('User');

router.post('/new', auth.required, (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if(!user) {return res.sendStatus(422)};

    if(!req.body.task.info) {
      return res.status(402).json({ errors: { info: 'is required' } });
    }

    if(!req.body.task.time) {
      return res.status(402).json({ errors: { time: 'is required' } });
    }

    if(!req.body.task.icon) {
      return res.status(402).json({ errors: { icon: 'is required' } });
    }

    const task = new Task(req.body.task);
    task.author = user;

    return task.save().then(() => {
      user.tasks = user.tasks.concat([task]);
      return user.save().then(() => {
        return res.json({ task: task.toJSON() });
      })
    });
  }).catch(next);
});

router.get('/', auth.required, (req,res,next) => {
  User.findById(req.payload.id).then((user) => {
    if(!user) {return res.sendStatus(422);}

    Task.find({author: user._id})
    .populate('author')
    .then((tasks) => {
      return res.json({tasks});
    });
  }).catch(next);
});



module.exports = router;