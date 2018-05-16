const exprss = require('express');
const User = require('../models/user.js');

exports.register= function(req, res){
    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save((err, user)=>{
        if(err){
            res.json({msg: 'Failed to add the User'});
        }
        else{
            res.json({msg: 'User is added successfully'});
        }
    });
}


exports.login = function (req, res) {
  
    User.findOne({username:req.body.username, password:req.body.password}, function (err, user) {
        if (err) {
            throw err;
        } else if (user) {
           
                    // var token = jwt.sign(user, config.secret, { expiresIn: 10000 });
                    res.render("home");
        } 
        
        else {
            res.send({ success: false, message: 'Authentication failed.' })
        }
    });
}













exports.getAll = function (req, res) {
    User
        .find({})
        .exec(function (error, user) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(user);
            }
        })
}

exports.delete = function(req, res, next){
    User.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
}