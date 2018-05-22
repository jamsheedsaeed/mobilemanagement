const exprss = require('express');
const supplier = require('../models/supplier.js');
var app = exprss();



 exports.opensupplier =function(req,res){
     res.render("supplier");
 }

exports.viewsupplier =function(req,res){

    supplier.find({}).exec(function(err,result){
        if(err){
            res.status(500).send({error:err});
        }
        else{
            res.render("viewsupplier",{supplier:result});
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
    let newSupplier = new supplier({
        name: req.body.name,
        cellno: req.body.cellno,
        email: req.body.email,
        company: req.body.company
        
    });
    newSupplier.save((err, supplier)=>{
        if(err){
            res.json({msg: 'Failed to add the Supplier'});
        }
        else{
            res.json({msg: 'Supplier is added successfully'});
        }
    });
}





exports.getAll = function (req, res) {
    supplier
        .find({})
        .exec(function (error, supplier) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(supplier);
            }
        })
}


exports.delete = function(req, res, next){
    supplier.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
        supplier.find({}).then(function(result){
            console.log('data is deleted');
            res.render("viewsupplier",{supplier:result});
        })
        // res.json(result);
    }
    });
 } 
