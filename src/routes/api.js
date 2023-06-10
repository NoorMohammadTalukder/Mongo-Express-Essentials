const express=require("express");
const studentController=require("../controller/StudentController")
const router=  express.Router();

//---------APIs
router.post("/insert-student",studentController.insertStudent)

module.exports=router;