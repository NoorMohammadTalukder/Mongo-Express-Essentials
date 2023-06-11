const express=require("express");
const studentController=require("../controller/StudentController");
const tokenIssue=require("../controller/TokenIssue");
const tokenVerfy=require("../middleware/TokenVerify");
const router=  express.Router();

//---------APIs
router.post("/create-student",studentController.insertStudent);
router.get("/get-all-student",tokenVerfy.tokenVerify,studentController.readAllStudent);
router.post("/update-student/:id",studentController.updateStudent);
router.post("/delete-student/:id",studentController.deleteStudent);
router.get("/get-token",tokenIssue.generateToken);

module.exports=router;