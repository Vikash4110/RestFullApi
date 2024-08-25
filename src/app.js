const express = require('express');
const app = express();
const port = process.env.PORT || 8000; 
const StudentRouter = require('./routers/student');

app.use(express.json());
require('./db/conn');
//  we need to use the router
app.use(StudentRouter);




app.listen(port, () => {
    console.log(`Connection at port no ${port}` );
})
