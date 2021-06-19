// express, mongoose, body-parser, cors

const express=require('express')

//cross origin
const cors=require('cors')
const app=express()
const port=8787

var corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

// parsing all requests of content-type application/json
app.use(express.json())

// app.get("/api",(req,res)=>{
//     res.json({"message":"First Backend Program"})
// })

const db=require("./app/models")

db.mongoose
    .connect(db.url,{
        useUnifiedTopology: true,
    })
        .then(()=>{
            console.log("Connected to database...");     
        })

require("./app/routes/user.routes")(app)

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);   
})

// finance
// user
// sales


