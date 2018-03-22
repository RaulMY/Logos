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
    .populate("authorId")
    .then(lists=>res.status(200).json(lists))
    .catch(e=>res.status(500).send(e));
});

router.get('/rateup/:commentid/:authorid', function(req, res, next) {
    Comment.findById(req.params.commentid)
    .then(comment=>{
        console.log(comment);
        if (comment.rating.indexOf(req.params.authorid)>=0){
            res.status(200).json(comment)
            .catch(e=>res.status(500).send(e));
        } else {
            comment.rating.push(req.params.authorid);
            comment.save()
            .then(com => res.status(200).json(comment)
            .catch(e=>res.status(500).send(e)));
        }
    })
});

router.get('/ratedown/:commentid/:authorid', function(req, res, next) {
    Comment.findById(req.params.commentid)
    .then(comment=>{
        console.log(comment);
        if (comment.rating.indexOf(req.params.authorid)==-1){
            res.status(200).json(comment)
            .catch(e=>res.status(500).send(e));
        } else {
            comment.rating.splice(comment.rating.indexOf(req.params.authorid), 1);
            comment.save()
            .then(com => res.status(200).json(comment)
            .catch(e=>res.status(500).send(e)));
        }
    })
});

router.post('/new', function(req, res, next) {
    const idea = new Idea({
        authorId: req.user._id,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        picPath: `/images/svg/${req.body.category}`,
        tags: req.body.tags   
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
        link: req.body.link
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
                        .then(idea=>res.status(201).json(idea))
                    }
                })
              });
            }
        })
      });
});

router.post('/:userid/notify', function(req, res, next) {
    User.findById(req.params.userid, (error, user) => {
        if (error) {
            next(error);
        } else {
            console.log("user",user, user.notifications, user.messages)
          let arri=user.notifications
          console.log("array", arri)
          console.log(req.body)
          arri.push(req.body)
          user.notifications= arri;
          console.log(user.notifications)
          user.save()
          .then(list=>res.status(201).json(list));
        }
    })
});

router.post('/contact', function(req, res, next) {
        User.findById(req.body.recId, (error, user) => {
            if (error) {
                next(error);
            } else {
              let array=user.messages
              array.push(req.body)
              user.messages= array;
              user.save()
              .then(list=>res.status(201).json(list));
            }
        })
});

router.get('/:id', function(req, res, next) {
    Idea.findById(req.params.id)
    .populate("comments")
    .populate("authorId")
    .then(ideas=>{
        Comment.find({ideaId: req.params.id})
        .populate("authorId")
        .then(comments=>{
            let result = ideas;
            result.comments=comments;
            console.log(result);
            res.status(200).json(result);
        })
    })
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

router.post('/:id', function(req, res, next) {
    Idea.findById(req.params.id)
    .then(idea=>{
        idea.title = req.body.title;
        idea.description = req.body.description;
        idea.save()
        .then(ideaUp =>res.status(200).json(ideaUp))
    })
});
module.exports = router;