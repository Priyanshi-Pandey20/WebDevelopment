// // let smallImages = document.getElementById("oldImg");

// // for(let i = 0;i<smallImages.length;i++){
// //     smallImages[i].src ="spiderman_img.png";
// //     console.log(`value of image no.${i} is changed`);

// // }

// let para1 = document.createElement('p');
// para1.innerText ="Hi I am there!";
// document.querySelector('body').append(para1);
// para1.classList.add("red");


// let h3 = document.createElement('h3');
// h3.innerText="I am blue h3!";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// h1.innerText="HI Goodmorning";
// p.innerText="You Too";

// div.append(h1);
// div.append(p);
// div.classList.add('box');
// document.querySelector('body').append(div);


// let btn = document.createElement('button');
// let input = document.createElement('input');

// btn.innerText="CLICK ME!";

// document.querySelector('body').append(btn);
// document.querySelector('body').append(input);

// btn.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

// document.querySelector('#btn').append(button);

//  let h4 = document.createElement('h4');
//  h4.innerHTML='<u>DOM PRACTISE<u>';
// document.querySelector('body').append(h4);
// h4.style.color="purple";

// let p = document.createElement('p');
// p.innerHTML='Apna College <b>Delta</b> Practice'
// document.querySelector('body').append(p);


// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para is clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse was clicked");
// })

// // let inp = document.querySelector("input");
// // inp.addEventListener("keydown",function(){
// //     console.log("key is pressed");
// // })

// inp.addEventListener("keydown" ,function(event){
//     console.log("key = ",event.key);
//      console.log("code = ",event.code);
   
    
// })

// let btn = document.querySelector("button");
// btn.addEventListener("click",changeColor);
//     function changeColor(){
//        console.dir(this.innerText);
//        btn.style.backgroundColor="green";
//     }


// let input = document.querySelector("input");
// let h3 = document.querySelector("h3");
// input.addEventListener("input",function(){
//     h3.innerText = input.value;
// })





// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random()*10 +1);
//     if(internetSpeed>4){
//         console.log("your data was saved");
//     }
//     else{
//         console.log("weak connection, try again");
//     }
// }

//PROMISES

// function savetoDb(data){                           
//    return new Promise((resolve,reject) =>{
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed >4){
//         resolve("data was saved");
//     }
//     else{
//         reject("failure");
//     }
//    });
// }

// let request= savetoDb("apna college"); // req = promise object
// request.then(()=>{
//     console.log("promise was resolved")
// })
// .catch(()=>{
//      console.log("promise was rejected");
// })

//PROMISE CHAINING 

// savetoDb("apna College")
// .then((result) =>{
//     console.log("data 1 was saved");
//     console.log("result of promise : " ,result);
//     return savetoDb("hello world");
// })
// .then((result) =>{
//     console.log("data 2 was saved");
//     console.log("result of promise : " ,result);
//     return savetoDb("shradha");
// })
// .then((result) =>{
//     console.log("data 3 was saved");
//     console.log("result of promise : " ,result);
    
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of the promise" ,error);
// })

//   h1 = document.querySelector("h1");

// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          h1.style.color = color;
//          console.log(`color changed to ${color}!`)
//         resolve("color changed");
//     },delay);
//     });
    
// } 
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was changed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was changed");
//     return changeColor("green",1000);
// }).then(()=>{
//     console.log("green color was changed");
//     return changeColor("yellow",1000);
// }).then(()=>{
//     console.log("yellow color was changed");
   
// });

// PROMISE USING ASYNC FUNCTION

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     changeColor("blue",1000);
// }



// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("yellow",1000);
//             })
//         })
//     })
// })


 // ASYNC FUNCTION


// async function greet(){
//        throw "404 page not found";
//     return "hello";
// }

// greet()
// .then(()=>{
//     console.log("promise was resolved")
//     console.log("result was: ",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected",err);
// })


// let demo = ()=>{
//     return 5;
// }

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//          console.log(num);
//          resolve();
//         },1000);
        
//     })
   
// }

// async function demo(){
//    await getNum();
//     await getNum();
//       getNum();

// }







