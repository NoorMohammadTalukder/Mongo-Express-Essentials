const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:String,
    roll:String,
    class:String,
    remarks:{type:String,default:"No comments"},
    date:{type:Date,default:Date.now}
},{versionKey:false})

const studentModel=mongoose.model("students",studentSchema);
module.exports=studentModel;