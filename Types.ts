//Integer/float Type 
var b:number = 20;
console.log(b)

//String Type
var c:String = 'Yogesh';
console.log(c)

//Boolean Type
var d:boolean = true;
console.log(d)

//Array Type
var e:Array<Number> = [1,2,3]
console.log(e)

//Enum Type
enum Name{YOGESH,MUKESH,RAMESH}
var f:Name = Name.MUKESH
console.log(f)

//Unkown Type
var g:unknown = 4;
g="My name is Yogesh Gaur"
console.log(g)

//Any Type
var h:any = 3
console.log(h)
//The main difference between unkown and any is that unkown is less premessive than any
