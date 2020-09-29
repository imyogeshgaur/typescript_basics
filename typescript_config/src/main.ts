class Greet {
    constructor(name:String) {
        const time  =new Date().getHours();
        if(time>=1 && time<12)
        {
            console.log(`Good Morning ${name}`)
        }
        else if(time>=12 && time<16){
            console.log(`Good AfterNoon ${name}`)
        }
        else if(time>=16 && time<19){
            console.log(`Good Evening ${name}`)
        }
        else{
            console.log(`Good Night ${name}`)
        }
    }
}

var n1 = new Greet("Yogesh")