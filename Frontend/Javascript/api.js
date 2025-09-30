// let jsonData = '{"fact":"A healthy cat has a temperature between 38 and 39 degrees Celcius.","length":66}';
// console.log(jsonData);

// let validRes = JSON.parse(jsonData);
// console.log(validRes.fact);


// fetch(url)
// .then((res)=>{
//  console.log(res);      // acessing the data 
//  res.json().then((data)=>{
//      console.log(data.fact);
//      return fetch(url);
//  })
//  .then((res)=>{
//     return res.json();
//  })
//  .then((data2)=>{
//     console.log(data2.fact);
//  })

// })

// .catch((err)=>{
//   console.log("ERROR" ,err);
// })


//APIs USING ASYNC-AWAIT FUNCTION


// async function getFacts(){
//     try{
//         let res = await fetch(url);
//     let data =await res.json();
//     console.log(data);
//     }
//     catch(e){
//         console.log("error",err);
//     }
//     console.log("bye");
// }

//APIs USING AXIOS LIBRARY(library to make http requests)

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     }
//     catch{
//         console.log("error -",err);
//     }
// }


// let url ="https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

//  let btn = document.querySelector("button");

// btn.addEventListener("click",async()=>{
//   let fact =  await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//     return res.data.fact;
//     }
//     catch{
//         console.log("error -",err);
//         return "No facts found";
//     }
// }

// btn.addEventListener("click",async()=>{
//    let link = await getImage();

//    let img = document.querySelector("#result");
//    img.setAttribute("src",link);
//    console.log(link);
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//        return res.data.message;
//     }
//     catch(e){
//       console.log("error-",e);
//       return "No Image found";
//     }
// }

//THIS IS HOW WE CAN PASS HEADERS IN AXIOS FORMAT
// const url = "https://icanhazdadjoke.com/"

// async function getJokes(){
//     try{
//         const config = {headers: {Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//     console.log(err);
//     }
// }

 //THIS IS HOW WE CAN GET THE DATA OF VARIOUS COLLEGES IN ALL OVER COUNTRY

let url = "http://universities.hipolabs.com/search?name=India";
let btn = document.querySelector("button");

btn.addEventListener("click" ,async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
  
    let colArr = await getColleges(country);
    console.log(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res =await axios.get(url+country);
     return res.data;
    }
    catch(e){
        console.log("error",e);
        return[];
    }
}







