class App {
    //Member Variables
    name;
    name1;
    constructor(a:String) {
       this.name = a 
    }
    //Member function
    getName(name1){
      console.log("My name is : "+this.name);
      return "My name is : "+ name1;
    }
}
var a = new App("Yogesh")
console.log(a.getName("Mukesh"))

//Inheritance

class Parent {
  name;
  setName(name){
      console.log(`My name is ${name}`)
  }
}

class Child extends Parent {
  getName(name){
      console.log(`My name is ${name}`)
 }
}

var Obj = new Child();
Obj.getName('Ramesh')
Obj.setName('Hitesh')