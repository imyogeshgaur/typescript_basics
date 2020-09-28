///<reference path="./Student.ts"/>
///<reference path="./Teacher.ts"/>

namespace Login{
    export class studentRunner extends Student{
        setValues(){
           console.log(this.userLogin)
           console.log(this.getName)
        }
    }
}

namespace Login{
    export class teacherRunner extends Teacher{
        setValues(){
            console.log(this.userLogin)
           console.log(this.getName)
        }
    }
}

//This is a resemblance of Module Concept in Namespace it give RunTime Error at TS but produce an error free js file

