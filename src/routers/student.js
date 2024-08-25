 const express = require('express');
//1. Create a new router
const Student = require('../models/students');

const router = new express.Router();

//2. we need to define the router
router.get("/vikash" , (req,res) => {
    res.send("Hello What's Up Guys...");
});


// Create a New Student using promises
// router.post ("/students",  (req,res) => {
//     // Fetching restapi data
//     console.log(req.body);
//     const user = new Student(req.body);
//     // to save this data in database
//     user.save().then(() =>  {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e); 
//     })
// }); 

// Create a New Student using async await 
router.post ("/students", async (req,res) => {
    try {
        const user = new Student(req.body); 
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) 
    {
        res.status(400).send(error); 
    } 


})

// Reading the data of registered students
router.get("/students", async (req,res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);  
    } catch(err) {
        res.send(err); 
    }
})

// get the individual student data using id
 
router.get("/students/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);  
    } catch(err) {
        res.status(500).send(err); 
    }
})

// Update the students data using id 

router.get("/students/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);  
    } catch(err) {
        res.status(500).send(err); 
    }
})


router.patch("/students/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body  );
        res.send(updateStudents);  
    } catch(err) {
        res.status(500).send(err); 
    }
})

router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);

        if (!deleteStudent) {
            return res.status(404).send({ error: "Student not found" });
        }

        res.send(deleteStudent);  
    } catch (error) {
        res.status(500).send(error); 
    }
});

module.exports = router;