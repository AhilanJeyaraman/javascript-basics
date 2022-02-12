class Emp {
    constructor(name,age,married){
        this.name=name;
        this.age=age;
        this.married=married;
        this.skills=[]
    }
    print(){
        console.log(`${this.name}:${this.age}:${this.married}`)
    }
    addskill(skill){
        this.skills.push(skill)
    }
    printskills(){
        this.print();
        for (let i=0; i<this.skills.length; i++){
            console.log(this.skills[i])
        }
    }
}

let emp1 = new Emp('Ahilan',30,true);
emp1.print();

emp1 = new Emp('John',25,false);
emp1.print();

emp1.addskill('Java');
emp1.addskill('Javascript');
emp1.addskill('NodeJS');

emp1.printskills();