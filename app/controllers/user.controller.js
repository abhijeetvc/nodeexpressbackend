const db=require("../models")

const User1=db.users

exports.create=(req,res)=>{

    console.log(req.body);
    
    const user=new User1({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city
    })

    user.save(user)  // saving to mongodb  --> user
        .then(data=>{
            res.send(data)   //return to client
        })
}

exports.findAll=(req,res)=>{

    User1.find()     // return list of user objects
       .then(data=>{
           res.send(data)
       })
}

exports.searchUsers=(req,res)=>{
    var query=req.params.query 
    console.log(query);
    
    User1.find({
        $text:{$search:query}
    },function(err,result){
        if(result){
            res.json(result)
        }
    })
}