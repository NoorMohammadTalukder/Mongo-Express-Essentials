const studentModel = require("../models/StudentsModel");

//insert student data
exports.insertStudent = (req, res) => {
  let body = req.body;
  studentModel.create(body, (err, data) => {
    if (err) {
      res.status(400).json({ message: "data insert failed", error: err });
    } else {
      res.status(200).json({ message: "data insert successful", data: data });
    }
  });
};

// read student data
exports.readAllStudent = (req, res) => {
  let query = {};
  let projection = "name roll class remarks";

  studentModel.find(query, projection, (err, data) => {
    if (err) {
      res.status(400).json({ message: "data reading failed", error: err });
    } else {
      res.status(200).json({ message: "data reading successful", data: data });
    }
  });
};

exports.updateStudent=(req,res)=>{
    let id=req.params.id;
    let query={_id:id};
    let body=req.body;
    
    studentModel.updateOne(query,body,(err,data)=>{
        if (err) {
            res.status(400).json({ message: "data update failed", error: err });
          } else {
            res.status(200).json({ message: "data update successful", data: data });
          }
    })
}

exports.deleteStudent=(req,res)=>{
    let id=req.params.id;
    let query={_id:id};

    studentModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({"message":"data deletion failed",error:err});
        }else{
            res.status(200).json({"message":"data deletion successful",data:data})
        }
    })
}