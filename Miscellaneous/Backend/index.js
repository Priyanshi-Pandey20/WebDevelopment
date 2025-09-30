 const express = require("express");
 const app = express();
 const port = 8080;

 app.use(express.urlencoded({extended:true}));

 app.get("/register",(req,res)=>{
    let{user,paasword} = req.query;
    res.send(`standard GET request. Welcome ${user}`);
 })

 app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("standard POST request");
 })


 app.listen(port,()=>{
    console.log(`listening to port ${port}`);
 })