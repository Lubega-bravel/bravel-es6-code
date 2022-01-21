// polymophism
// 
class Animal{
    constructor(animallName){
        this.animallName = animallName;
    }

    nameOfAnimal(){
        return this.animallName;
    }
}
let cats = new Animal ("cat");
console.log(cats.nameOfAnimal())