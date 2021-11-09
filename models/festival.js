const mongoose = require('mongoose'); 
 
const festivalSchema= mongoose.Schema({
    festivalname:{
          firstname:{
               type:String,
               required:true},
          lastname:{
               type:String,
               required:true}     
            },
    location:{
          locationname:{
               type:String,
               required:true},
          zipcode:{
               type:String,
               required:true},
          cityname:{
               type:String,
               required:true},
          statename:{
               type:String,
               required:true}               
           
},
    festivetime:{
          type:String,
          required:true
     }
            
             
});



 module.exports=mongoose.model('Festival',festivalSchema); 