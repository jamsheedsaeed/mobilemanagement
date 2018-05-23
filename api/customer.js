const exprss = require('express');
const customer = require('../models/customer.js');
var app = exprss();



 exports.opencustomer =function(req,res){
     res.render("customers");
 }

exports.viewcustomer =function(req,res){

    customer.find({}).exec(function(err,result){
        if(err){
            res.status(500).send({error:err});
        }
        else{
            res.render("customers",{customer:result});
        }
    });
}
// const multer = require('multer');
// const uploads = multer({dest: './uploads'});
// var storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, './uploads')
//     },
//     filename: function (req, file, callback) {
//       callback(null, Date.now() + file.originalname)
//     }
//   })

  exports.add= function(req, res){
    let newCustomer = new customer({
        phonename: req.body.phonename,
        price: req.body.price,
        name: req.body.name,
        cellno: req.body.cellno,
        address: req.body.address,
        email: req.body.email,
        date: req.body.date
    });

    newCustomer.save((err, customer)=>{
        if(err){
            res.json({msg: 'Failed to add the customer'});
        }
        else{
            res.json({msg: 'customer is added successfully'});
        }
    });
}





exports.getAll = function (req, res) {
    customer
        .find({})
        .exec(function (error, customer) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(customer);
            }
        })
}


exports.delete = function(req, res, next){
    customer.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
        customer.find({}).then(function(result){
            console.log('data is deleted');
            res.render("customers",{customer:result});
        })
        // res.json(result);
    }
    });
 } 
