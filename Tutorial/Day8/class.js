// class Animal{
//     constructor(name){
//         console.log("Call From Constructor"+this.name)
//         this.name = name;
//         // this.b = b;
//     }
//     sound(){
//         console.log("sound Of animal")
//         // return a+b
//     }
//     walk(){
//         console.log("Walk Of animal")

//     }
// }
// class Dog extends Animal{
//     // constructor(name){
//     //     console.log("Call From Constructor"+name)
//     // }
//     dogSound(){
//         console.log("Sound of Dog"+Animal.name)
//     }
// }
// const anima = new Animal("XXXX")
// // console.log(anima.name)
// const dog =new Dog("X Dog")
// dog.dogSound()


class Animal{
    constructor(name){
        this.animalName = name;
        
    }
    sound(){
        return `${this.animalName}`
    }
}
class Dog extends Animal{
    sound(){
        return `${this.animalName}`
    }
}

const dog1 =new Dog("XXX")
console.log(dog1.sound())