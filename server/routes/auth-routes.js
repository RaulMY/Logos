const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const Idea       = require('../models/Idea');

// Our user model
const User       = require('../models/User');

const authRoutes = express.Router();
/* GET home page. */


authRoutes.post('/signup', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
    }
  
    User.findOne({ username }, '_id', (err, foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: 'The username already exists' });
        return;
      }
  
      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
  
      const theUser = new User({
        username,
        password: hashPass
      });
  
      theUser.save((err) => {
        if (err) {
          res.status(400).json({ message: 'Something went wrong' });
          return;
        }
  
        req.login(theUser, (err) => {
          if (err) {
            res.status(500).json({ message: 'Something went wrong' });
            return;
          }
            
        User.findById(req.user._id)
        .populate("ideas")
        .then(user => res.status(200).json(user));
        });
      });
    });
  });

  authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong Local' });
        return;
      }
  
      if (!theUser) {
        res.status(401).json(failureDetails);
        return;
      }
  
      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong Login' });
          return;
        }
        
        User.findById(req.user._id)
        .populate("ideas")
        .then(user => res.status(200).json(user));  
        });
    })(req, res, next);
  });

  authRoutes.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
  });

  authRoutes.get('/loggedin', (req, res, next) => {
    if (req.isAuthenticated()) {
      User.findById(req.user._id)
      .populate("ideas")
      .populate("following")
      .populate("comments")
      .then(user => res.status(200).json(user));
      
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  });

  authRoutes.get('/loggedinhome', (req, res, next) => {
    if (req.isAuthenticated()) {
      User.findById(req.user._id)
      .then(user => res.status(200).json(user));
      
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  });

  authRoutes.get('/private', (req, res, next) => {
    if (req.isAuthenticated()) {
      res.json({ message: 'This is a private message' });
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  });

  module.exports = authRoutes;