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

app.get("/api",(req,res)=>{
    res.json({"message":"First Backend Program"})
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
    
})

