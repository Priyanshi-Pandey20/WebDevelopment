// CONSTRUCTORS 

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`hi my name is ${this.name}`);
// };
// let p1 = new Person("adam",25);
// let p2 = new Person("john",30);


// CLASSES

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`hiii my name is ${this.name}`);
//     }
// }

// let p3 = new Person("adam",25);
// let p4 = new Person("john",30);



//INHERITANCE

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hiii my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){ 
        console.log("student class constructor");
       super(name,age);
        this.marks = marks;
    }
   
}

class Teacher extends Person{
    constructor(name,age,subject){
       console.log("teacher class constructor");
       super(name,age);
        this.subject = subject;
    }
   
}

let stu1 = new Student("Harry",25,95);
let tech1= new Teacher("Arushi",48, "english");






