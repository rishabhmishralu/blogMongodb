const mongoose=require("mongoose")

const url=`mongodb+srv://rishabhmishra514:rishabh08@ecommerce.qfis9jg.mongodb.net/blogProject?retryWrites=true&w=majority`

const connect=async()=>{

   await mongoose.connect(url)
    console.log("mongodb connected")

}

module.exports=connect