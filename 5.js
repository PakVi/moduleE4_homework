// Переписать консольное приложение из предыдущего юнита на классы.

class Pribor{
    constructor(name,power){
        this.useful = 'poleznoe'
        this.name = name;
        this.power = power;
        this.rozetka = false;
    }

    getRozetka(){
        console.log(this.name + ' вставлена в рохетку. UNLIMITED POWER!');
        this.rozetka = true;
    }


    getPower(){
        return this.getRozetka ? this.power : 0;
    }

}


class UmniyPribor extends Pribor {

    constructor(name,power,ai){
        super(name, power);
        this.ai = ai;

    }

}

class LightPribor extends Pribor {

    constructor(name,power,light){
        super(name, power);
        this.light =light;

    }

}

// const pc = new UmniyPribor('pc', 500, 'clever')

// console.log(pc)

const pc = new Pribor('pc', 500);
const lampa = new LightPribor('lampa', 45, 'yarko');
// const lampa = new Pribor('lampa', 45);
console.log(lampa)


console.log('Подаваемая мощьность '  + lampa.getPower());
console.log('Подаваемая мощьность ' + pc.getPower());

lampa.getRozetka();

console.log('Подаваемая мощьность ' + lampa.getPower());

pc.getRozetka();

console.log('Подаваемая мощьность ' + pc.getPower());
