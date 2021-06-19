module.exports=app=>{
    const users=require("../controllers/user.controller")

    var router=require("express").Router()

    router.post("/",users.create)

    router.get("/getAllUsers",users.findAll)

    router.get("/searchUsers/:query",users.searchUsers)
    app.use("/api/users",router)
}