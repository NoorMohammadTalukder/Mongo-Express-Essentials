const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},

    roll:{type:Number,
        required:true,
        min:[1,"Min is 1 max is 10 but got {VALUE}"],
        max:[10,"Max is 10 min is 6 but got {VALUE}"],
    },

    email:{type:String,
        unique:true,
        required:true,
        validate:{
            validator:(value)=>{
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            },
            message:props=>`${props.value} is not valid email`
        },
       
    },

    class:{type:String,required:true},

    remarks:{type:String,default:"No comments"},

    mobile:{type:String,
        required:true,
        validate:{
            validator:(value)=>{
                if(value.length!==11){
                    return false;
                }else{
                    return true;
                }
            },
            message:"11 digit phone no. required"
        }
    },

    date:{type:Date,default:Date.now}
},{versionKey:false})


const studentModel=mongoose.model("students",studentSchema);
module.exports=studentModel;