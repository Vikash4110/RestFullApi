const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/students-api")
.then( () => {
    console.log("Connection succesful");
}) .catch((err) => {
    console.log("No Connection");
})