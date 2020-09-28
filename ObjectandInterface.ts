//Normal Object 

var data={
    name:"Suresh",
    age:34,
    height:"5'6",
    weight:70.56
}
console.log(data)

//Object with interface

interface bio{
    name:String,
    age:number,
    height:String,
    weight:number
}

var data1:bio={
    name:"Ramesh",
    age:24,
    height:"5'6",
    weight:60.56
}
console.log(data1)

// Object with any datatype

var data2:any={
    name:"Yogesh",
    age:56.78,
    height:12,
    weight:"56"
}
console.log(data2)

//Object with Function

interface functionObj{
    name:String,
    age:number,
    height:number,
    getName:()=>String
}

var data3:functionObj={
    name:"Hitesh",
    age:56.45,
    height:456,
    getName:function(){
       return "My name is : "+ this.name
    }
}

console.log(data3.getName())