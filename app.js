const express=require('express')
const app=express()
const port=8585

app.get('/',(req,res)=>{
    res.send('Hello Node Express')
})

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);  
})

// NodeJS
// Express JS --> A web application framework with built in 
                 // functionality which provides routing
// Mongoose --> ODM(Object Data Modelling)  - It allows iconnection between the express application 
                // and the DBMS(MongoDB)  