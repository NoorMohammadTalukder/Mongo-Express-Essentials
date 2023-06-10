const express=require("express");
const studentController=require("../controller/StudentController")
const router=  express.Router();

//---------APIs
router.post("/insert-student",studentController.insertStudent);
router.get("/read-all-student",studentController.readAllStudent);
router.post("/update-student/:id",studentController.updateStudent);
router.post("/delete-student/:id",studentController.deleteStudent);

module.exports=router;