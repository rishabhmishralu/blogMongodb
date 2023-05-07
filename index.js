const express= require("express")
const connect = require("./config/config")
const route=require("./router/router")

const app= express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.use(route)


app.listen(4000,async()=>{
    console.log("port is working  fine")
    await connect()
})