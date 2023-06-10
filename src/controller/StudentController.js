const studentModel = require("../models/StudentsModel");

exports.insertStudent = (req, res) => {
  let body = req.body;
  studentModel.create(body, (err, data) => {
    if (err) {
      res.status(200).json({ message: "data insert failed", error: err });
    } else {
      res.status(201).json({ message: "data insert successful", data: data });
    }
  });
};
