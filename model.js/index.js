const mongoose=require("mongoose")


const blogschema=new mongoose.Schema({
    name:String,
    title:String,
    category:String,
    img:String,
    description:String,
    pic:String,
    

})


const blogdata=mongoose.model("bollywood",blogschema)
const Food=mongoose.model("food",blogschema)
const hollywood=mongoose.model("hollywood",blogschema)
const fitness=mongoose.model("fitness",blogschema)
const technology=mongoose.model("technology",blogschema)

module.exports={blogdata,Food,hollywood,fitness,technology}