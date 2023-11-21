const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.listen(3000,()=> {console.log("Server abierto")})
app.use(express.static("public"))
app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"/views/home.html"))})
app.get("/registro",(req,res)=>{res.sendFile(path.join(__dirname,"/views/register.html"))})
app.get("/inicio-sesion",(req,res)=>{res.sendFile(path.join(__dirname,"/views/login.html"))})

app.post("/register", (req,res) => {
    console.log(req.body)
    res.redirect("/inicio-sesion")
});
app.post("/login", (req,res) => {
    console.log(req.body)
    res.redirect("/")
});