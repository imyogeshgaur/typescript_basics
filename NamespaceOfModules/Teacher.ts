namespace Login{
    export class Teacher{
        name;
        userLogin(name){
            this.name = name;
            console.log(`The Teacher ${this.name} is able to login !!!`)
        }
        getName(name){
            this.name = name;
            console.log(`Welcome ${this.name} to the portal `)
        }
    }
}