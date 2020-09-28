///<reference path="./Namespace.ts"/>

namespace UserUtils{
    export class Users extends Parent implements userType{
        getName(){
            return this.name
        }
    }
}

let ul = new UserUtils.Users()
ul.setName('Yogesh');
console.log(ul.getName())
