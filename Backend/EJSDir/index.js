
// TEMPLATING -->(EJS)

const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public/JS"));
app.use(express.static("public/CSS"));
app.set("view engine","ejs");
// app.use("view",path.join(__dirname,"/views"));


// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// })


// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     res.render("instagram.ejs",{username});
// })


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

//INTERPOLATION SYNTAX    --> Embedded Expression(TO MAKE HTML DYNAMIC)

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
})


//  CONDITIONAL STATEMENTS 

// app.get("/ig/:username",(req,res)=>{
//     let followers = ["adam","bob","steve","abc"]
//     let {username} = req.params;

//     res.render("instagram.ejs",{username,followers});
// })

app.get("/ig/:username",(req,res)=>{
     let {username} = req.params;
   const instaData = require("./data.json");
   const data = instaData[username];
   if(data){
    res.render("instagram.ejs",{data});
   }else{
    res.render("error.ejs",{data});
   }
})





