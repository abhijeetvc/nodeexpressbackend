const db=require("../models")

const User1=db.users

exports.create=(req,res)=>{

    console.log(req.body);
    
    const user=new User1({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city
    })

    user.save(user)
        .then(data=>{
            res.send(data)
        })
}