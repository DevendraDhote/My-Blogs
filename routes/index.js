const express = require('express');
const router = express.Router();
const model = require('./users')

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/create', function(req, res){
  model.create({
    post: req.body.text
  })
  .then(function(userblog){
    res.redirect('/show');
  });
});

router.get('/show', function(req, res){
  model.find()
  .then(function(allblogs){
    res.render('showpage', {blog: allblogs});
  });
});

router.get('/read/:uread', function(req, res){
  model.findOne({_id:req.params.uread})
  .then(function(readdata){
    res.render('readpage', {readblog: readdata});
  });
});

router.get('/delete/:del', function(req, res){
  model.findOneAndDelete({_id: req.params.del})
  .then(function(deletedblog){
    res.redirect('/show');
  });
});

router.get('/update/:up', function(req, res){
  model.findOne({_id: req.params.up})
  .then(function(foundedblog){
    res.render('updatepage', {updateblog: foundedblog});
  });
});

router.post('/update/:updated', function(req, res){
  model.findOneAndUpdate({_id:req.params.updated}, {post: req.body.updatedtext})
  .then(function(blogupdated){
    res.redirect('/show');
  })
})

module.exports = router;
