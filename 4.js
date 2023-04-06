// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).


function Pribor(name, power){
    this.useful = 'poleznoe'
    this.name = name;
    this.power = power;
    this.rozetka = false;

}


Pribor.prototype.getRozetka = function(){
    console.log(this.name + ' вставлена в рохетку. UNLIMITED POWER!');
    this.rozetka = true;
}

Pribor.prototype.getPower = function(){
    if (this.rozetka){
        return this.power;
    }else{
        return 0
    }

}

function UmniyPribor(name, power, ai){
    this.name = name;
    this.power = power;
    this.ai = ai;

}

function LightPribor(name, power,light){
    this.name = name;
    this.power = power;
    this.light = light;

}

UmniyPribor.prototype = new Pribor()
LightPribor.prototype = new Pribor()


// const lampa = new Pribor('lampa', 45);
// const pc = new Pribor('pc', 500);


const lampa = new LightPribor('lampa', 45, 'yarko');
const pc = new Pribor('pc', 500);

// console.log(lampa)

console.log('Подаваемая мощьность '  + lampa.getPower());
console.log('Подаваемая мощьность ' + pc.getPower());

lampa.getRozetka();

console.log('Подаваемая мощьность ' + lampa.getPower());

pc.getRozetka();

console.log('Подаваемая мощьность ' + pc.getPower());


