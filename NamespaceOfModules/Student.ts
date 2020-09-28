namespace Login{
    export class Student{
        name;
        userLogin(name){
            this.name = name;
            console.log(`The Student ${this.name} is able to login !!!`)
        }
        getName(name){
            this.name = name;
            console.log(`Welcome ${this.name} to the portal `)
        }
    }
}