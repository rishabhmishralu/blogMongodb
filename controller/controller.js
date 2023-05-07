const blogdata = require("../model.js")

const getbollywod=async(req,res)=>{
    try{
        const result=await blogdata.blogdata.find()
      
        console.log(result) 
         res.send(result)
    }
    catch{
        console.log("bollywod err")
    }
}

const getfood=async(req,res)=>{
    try{
        const result=await blogdata.Food.find()
      
        console.log(result) 
         res.send(result)
    }
    catch{
        console.log("bollywod err")
    }
}
const gethollywood=async(req,res)=>{
    try{
        const result=await blogdata.hollywood.find()
      
        console.log(result) 
         res.send(result)
    }
    catch{
        console.log("bollywod err")
    }
}
const getfitness=async(req,res)=>{
    try{
        const result=await blogdata.fitness.find()
      
        console.log(result) 
         res.send(result)
    }
    catch{
        console.log("bollywod err")
    }
}

const gettechnology=async(req,res)=>{
    try{
        const result=await blogdata.technology.find()
      
        console.log(result) 
         res.send(result)
    }
    catch{
        console.log("bollywod err")
    }
}

module.exports={getbollywod,getfitness,getfood,gethollywood,gettechnology}