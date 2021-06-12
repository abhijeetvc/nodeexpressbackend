module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            city: String
        }
    )
    const User=mongoose.model("user",schema)
    return User
}