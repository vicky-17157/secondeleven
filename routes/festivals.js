const express = require('express');
const router = express.Router();
const Festival = require('../models/festival');

//getting all the datas
router.get('/', async(req,res) =>{
     try{
         const festival = await Festival.find();
         res.json(festival);
        }
        catch (err){
            res.json({message:err});
        }
});


// getting a post by id

router.get('/:festivalid', async(req,res) =>{
     try{
          const festival = await Festival.findById(req.params.festivalid);
           res.json(festival);
         }
         catch(err){
              res.json({message:err});
          }
});     

 // creating a post

router.post('/',(req,res)=>{
     const festival =new Festival({
         festivalname:{firstname:req.body.festivalname.firstname,lastname:req.body.festivalname.lastname},
         location:{locationname:req.body.location.locationname,zipcode:req.body.location.zipcode,cityname:req.body.location.cityname,
                    statename:req.body.location.statename},
        festivetime:req.body.festivetime
     });
         festival.save().
         then(data =>{
             res.json(data);
          }).catch (err=>{
               res.json({message:err});
     })
});

// deleting a post

router.delete('/:festivalid', async(req,res) =>{
     try{
           const removepost = await Festival.deleteOne({_id: req.params.festivalid});
           res.json(removepost);
     }
     catch(err){
          res.json({message:err});
     }
});

// updating a post by id

router.patch('/:festivalid', async(req,res) =>{
     try{
          const festival = await Festival.findOne({_id: req.params.festivalid});
          if(req.body.festivalname){
                if(req.body.festivalname.firstname){
                     festival.festivalname.firstname=req.body.festivalname.firstname;
                    }
                if(req.body.festivalname.lastname){
                    festival.festivalname.lastname=req.body.festivalname.lastname;
               }  
               }
          if(req.body.location){
               if(req.body.location.locationname){
                    festival.location.locationname=req.body.location.locationname;
               }
               if(req.body.location.zipcode){
                    festival.location.zipcode=req.body.location.zipcode;
               }
               if(req.body.location.cityname){
                    festival.location.cityname=req.body.location.cityname;
               }
               if(req.body.location.statename){
                    festival.location.statename=req.body.location.statename;
               }
          }
          if(req.body.festivetime){
               festival.festivetime=req.body.festivetime;
          }
          await festival.save();
           res.json(festival);
          }
          catch(err){
          res.json({message:err});
         }
});


module.exports= router;