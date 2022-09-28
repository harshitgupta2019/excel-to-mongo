var mongoose  =  require('mongoose');  
   
var excelSchema = new mongoose.Schema({
    name:String,
    email:{type:String},
    mobile:{type:String},
    dob:{type:Date},
    experience:{type:String},
    resume:{type:String},
    location:{type:String},
    address:{type:String},
    employer:{type:String},
    designation:{type:String}
});


module.exports = mongoose.model('excelData',excelSchema); 