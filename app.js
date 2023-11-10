const express = require('express')
const app = express()
const path = require('path')


app.listen(3000,()=> {console.log("Server abierto")})
app.use(express.static("public"))
app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"/views/home.html"))})
app.get("/registro",(req,res)=>{res.sendFile(path.join(__dirname,"/views/register.html"))})
app.get("/inicio-sesion",(req,res)=>{res.sendFile(path.join(__dirname,"/views/login.html"))})