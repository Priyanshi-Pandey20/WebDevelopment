


// let light ="yellow";
// if(light=="red"){
//     console.log("stop");
// }
// else if(light == "yellow"){
//     console.log("get ready");
// }
// else{
//     console.log("go");
// }


// let size = "S";
// if(size== "XL"){
//     console.log("price : 250");

// }
// else if( size == "L"){
//     console.log("price : 200");
// }
// else if( size == "M"){
//     console.log("price : 100");
// }
// else{
//     console.log("price : 50");
// }

// let str ="";
// if(str[0] == 'a' && str.length>3){
//     console.log("good");
// }
// else{
//     console.log("not a good string")
// }


// let number = 20;
// if(number%10==0){
//     console.log("good no.")
// }
// else{
//     console.log("bad")
// }



// let a = 33;
// let b = 10;
// let c = 80;
// if(a>b){
//     if(a>c){
//         console.log("a is greatest");
//     }
//     else{
//         console.log("c is greatest")
//     }
// }
// else{
//     if(b>c){
//         console.log("b is greatest");
//     }
//     else{
//         console.log("c is the greatest");
//     }
// }

//  let msg = "ApnaCollege";
//   let newmsg = msg.replace("l","t");

//  console.log(newmsg);



 
// let  heroes = [["ironman","spiderman","thor"],["superman","wonder women","splash"]];
// for(let i = 0;i<heroes.length;i++){
//     console.log( i,heroes[i].length);
//     for(let j = 0;j<heroes[i].length;j++){
//         console.log(j,heroes[j])
//     }
// }


// let todo = [];
// let req = prompt("please enter your request");

// while(true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//    else if(req == "list"){
//     console.log("-----------");
//     for(let i =0;i<todo.length;i++){
//         console.log(i,todo[i]);
//     }

       
//         console.log("------------")
//     }
//     else if( req == "add"){
//      let task=prompt("please enter your task you want to add");
//         todo.push(task);
//         console.log("task added..");
//     }
//     else if( req == "delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("wrong request");
//     }
        
//     req = prompt("please enter your request");
// }

// let arr  = [1,2,3,4,5,7,2,3];
// let num = 2

// for(let i = 0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
//     console.log(arr[i]);
// }

// let sum = 0;
// let copy = number;
// while(copy >0){
//     digit = copy %10;
//     sum +=digit;
//     copy = Math.copy(floor/10);
// }
// console.log(sum);

// let arr = [1,2,3,4,5,6];
// let largest = 0;
// for(let i = 0;i<arr.length;i++){
//     if(largest <arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);


// let delhi= {
//     latitude :"28,7401",
//     longitude :"77,1025 E"
// };

// const classInfo = {
//     aman: {
//         grade : "A",
//         city : "Delhi"
//     },
//     shradha: {
//         grade : "A+",
//         city : "Kolkata"
//     },
//     priyanshi: {
//         grade : "A++",
//         city : "Mumbai"
//     },
    
// }

// const max = prompt("enter the maximum no.");
// console.log(max);

// const random = Math.floor(Math.random()* max)+1;

// let guess = prompt("guess the number");

// while(true){
//     if(guess == "quit"){
//         if(guess=="quit"){
//             console.log("user quit");
//              break;
//         }
//         if(guess == random){
//             console.log("you are right! congrats");
//             break;
//         }
//         else if(guess <random){
//             console.log("your guess was too small,please try again!");
//         }
//         else{
//             console.log("your guess was too large,please try again!");
//         }
//     //     else{
//     //       guess=  prompt("your guess was wrong!")
//     //     }
//      }
// }

// function printPoem(){
//     console.log("Twinkle Twinkle ,little star");
//     console.log("How are wonder what you are");
// }
// printPoem();

// function average(a,b,c){
//     console.log((a+b+c)/3);
// }
// average(9,5,6);

// function table(a){
//     for(let i = 1;i<=10;i++){
//         let res = a*i;
//      console.log(res);
//     }
   
// }
// table(5);




// function sumOFN(n){
//    let sum = 0;
//     for(let i = 1;i<=n;i++){
//         sum = sum+i;
         
       
//     }
//    return sum;
// }
// let str1 = ["hi","hello","bye","!"]

//  function concat(str){
//     let result="";
//     for(let i = 0;i<str1.length;i++){
//         result +=str1[i];
//     }
//     return result;
//  };

//  const calculator ={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     multiply(a,b){
//          return a*b;
//     }
//  };

//  let arr = [1,67,32,90,22,61];
//  let num = 10;

//  function largeNumArr(arr,num){
//     for(let i = 0;i<arr.length;i++){
//         if(num<arr[i]){
//             console.log(arr[i]);
//         }
//     }
//  }
//  largeNumArr(arr,num);
 

//  let givenstr = "abcdabcdefgggh";
  
//  function getUnique(givenstr){
//     let ans ="";
//  for(let i = 0;i<givenstr.length;i++){
//     let currChar = givenstr[i];
//     if(ans.indexOf(currChar)==-1){
//         ans+=currChar;
//     }
//  }
// return ans;
// };
// getUnique(givenstr);

// let country = ["Australia","Germany","United States Of America"];
// function LargestName(country){
// let ansIdx = 0;

// for(let i = 0;i<country.length;i++){
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;

//     if(currLen > ansLen){
//         ansIdx = i;

//     }
//   return ansIdx;
// }
// }
// LargestName(country);

 
// console.log("hello");
// console.log("hello");

// try{
//     console.log(e);
// } catch(err){
//     console.log("caught an error...")
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");

// const sum = (a,b)=>{
//     console.log(a+b);
// }
// sum(5,6);

// console.log("hi there");

// setTimeout(()=>{
//     console.log("Apna College");
// },4000);

// console.log("welcome to");

// setInterval(()=>{
//     console.log("Apna College");
// },2000);

// console.log(id);


// const student = {
//     name:"aman",
//     marks : 95,
//     prop:this,
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);
//         return this.marks;
//     },

//     getInfo1: function(){
//         setTimeout(()=>{
//             console.log(this);
//         },2000);

//     },
//     getInfo2 :function(){
//       setTimeout(function(){
//         console.log(this);
//       },2000);
//     }

// };
// student.getName();
// student.getMarks();
// student.getInfo1();
// student.getInfo2();

// setInterval(()=>{
//     console.log("hello world");
// },2000);

// let arr = [1,12,3,6,5];
// const arrayAvg = (arr)=>{
//     let sum = 0;
//     for(let i = 0;i<arr.length;i++){
//         sum = sum+ arr[i];
//         avg =sum/arr.length;
//     }
//     return avg;
// }


// const isEven = (n)=>{
//     if(n%2==0){
//         console.log("even no.");
//     }
//     else{
//         console.log("not an even no.");
//     }
// }

// let length = 4;
// function callback(){
//     console.log(this.length);
// }

// const obj = {
//     length :5,
//     method(callback){
//         callback();
//     },
// };
// obj.method(callback,1,2);

// // const object = {
// //     message :"Hello World",

// //     longMessage(){
// //         console.log(this.message);
// //     }
// // };
// // setTimeout(object.longMessage,1000);


// let num = [1,2,3,4];
// let double = num.map((el)=>{
//     return el * 2;
// });
// let even = num.filter((num)=>(num%2==0));


// let data = {
//     email: "ironman@gmail.com",
//     password:"abcd",
// };

// let dataCopy = {...data};

// function sum(){
//     return arguments.reduce((sum,el)=> sum+el);
// };

// let names = ["tony","bruce","steve","peter"];
// let[winner,runnerup]= names;
// console.log(winner,runnerup);

// const student = {
//     name: "karan",
//     age: 14 ,
//     class:9,
//     subjects:["hindi","english","math","science"],
//     username:"karan123",
//     password:"abc",
//     city:"pune",

// }; 
// let num = [1,2,3];
// const square = (num)=> num*num;
// console.log(square);

// let sum = num.reduce((acc,cur)=> acc +cur,0);

// let avg = sum/num.length;
// console.log(avg);

// const num2 = num.map((num)=>num +5);
// console.log(num2);

// let strings = ["adan","bob","catlyn"];
// console.log(strings.map((strings)=>strings.toUpperCase()));
 
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked");
// }


// btn.addEventListener("click",function(){
//     console.log("button clicked!"); 
// });




