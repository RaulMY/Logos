var express = require('express');
var router = express.Router();
const request = require('request');
const Idea       = require('../models/Idea');
const Comment = require ('../models/Comment');
const User = require ('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
    Idea.find()
    .populate("comments")
    .populate("followers")
    .populate("authorId")
    .then(lists=>res.status(200).json(lists))
    .catch(e=>res.status(500).send(e));
});

router.post('/new', function(req, res, next) {
    const idea = new Idea({
        authorId: req.user._id,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        picPath: `/images/svg/${req.body.category}`   
      });
       console.log(idea)
      idea.save((err) => {
        User.findById(req.user._id, (error, user) => {
            if (error) {
                next(error);
            } else {
              let array=user.ideas
              array.push(idea._id)
              user.ideas= array;
                user.save()
                .then(list=>res.status(201).json(list))
                .catch(e=>res.status(500).send(e));
            }
        })
      });
});

router.post('/contribute', function(req, res, next) {
    const comment = new Comment({
        authorId: req.body.authorId,
        ideaId: req.body.ideaId,
        content: req.body.content,
        type: req.body.type,
        link: req.body.link,
        rating: 0
      });
      comment.save((err) => {
        User.findById(req.body.authorId, (error, user) => {
            if (error) {
                next(error);
            } else {
              let array=user.comments
              array.push(comment._id)
              user.comments= array;
              user.save((err) => {
                Idea.findById(req.body.ideaId, (error, idea) => {
                    if (error) {
                        next(error);
                    } else {
                      let array=idea.comments
                      array.push(comment._id)
                      idea.comments= array;
                        idea.save()
                        .then(list=>res.status(201).json(list))
                        .catch(e=>res.status(500).send(e));
                    }
                })
              });
            }
        })
      });
});

router.get('/:id', function(req, res, next) {
    Idea.findById(req.params.id)
    .populate("comments")
    .populate("followers")
    .populate("authorId")
    .then(lists=>{
        console.log(lists);
        res.status(200).json(lists);
    })
    .catch(e=>res.status(500).send(e));
});

router.post('/follow', function(req, res, next) {
    Idea.findById(req.body.id)
    .then(idea=>{
        let array = idea.followers
        array.push(req.body.userid)
        idea.followers=array
        idea.save()
        .then(id =>{
            User.findById(req.body.userid)
            .then( user => {
                let array = user.following
                array.push(req.body.id)
                user.following=array
                user.save()
                .then(list=>res.status(200).json(list))
            })
        })
    })
});

router.post('/unfollow', function(req, res, next) {
    Idea.findById(req.body.id)
    .then(idea=>{
        let array = idea.followers
        array.splice(array.indexOf(req.body.userid), 1)
        idea.followers=array
        idea.save()
        .then(id =>{
            User.findById(req.body.userid)
            .then( user => {
                let array = user.following
                array.splice(array.indexOf(req.body.id), 1)
                user.following=array
                user.save()
                .then(list=>res.status(200).json(list))
            })
        })
    })
});

module.exports = router;