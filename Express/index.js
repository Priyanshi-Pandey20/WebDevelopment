// const express = require("express");   // this is used to send type of info to that request
// const app = express();

// console.dir(app);
// let port = 8080;

// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`);
// })

// app.use((req,res)=>{
    // console.log("request received");
    // res.send({                     // this is in the form of obj
    //     name:"apple",
    //     color:"red"
    // });

//    let code = "<h1>Fruits</h1><ul><li>Apple<li><li>Yellow<li><li>Green<li><ul>"    // This is in the form of list
//    res.send(code);
// })




// ROUTING

// app.get("/",(req,res)=>{                     // these are routes --> to send the specific request to specific path
//     res.send("you contacted root path");
// })

// app.get("/apple",(req,res)=>{
//     res.send("you contacted  apple root path");
// })

// app.get("/orange",(req,res)=>{
//     res.send("you contacted  orange root path");
// })
// app.post("/",(req,res)=>{
//     res.send("you send a post request");
// })

// app.get("/:username", (req,res)=>{
//     console.log(req.params);
//     let{username} = req.params;
//     let htmlStr = `<h1>Welcome to the page ${username}</h1>`
//     res.send(htmlStr);
// })

// QUERY STRINGS

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("no result");
// })









