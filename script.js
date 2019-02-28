//////////////////////////////////////////////////////////////////////////////////
// Lecture: let and const

/* // ES5
var name5   = 'Jane Smith';
var age5	= 23;
name5       = 'Jame Miller'
console.log(name5);

// ES6
const name6     = 'Jane Smith';
let age6        = 23;
name6           = 'Jane Miller';
console.log(name6); */

/* // ES5
function driversLicense5(passedTest) { // Possui escopo de função
    if (passedTest) {
        console.log(firstName); // result: undefined
        var firstName   = 'John';
        var yearOfBirth	= 1990;
    };
    console.log(firstName + ', born in ' + yearOfBirth + '. Is now officially allowed to drive a car!')
};

driversLicense5(true); */

/* // ES6
// Possuio escopo de bloco
function driversLicense6(passedTest) {
    
    // Neste caso dará erro, pois as variáveis não possuem escopo de função, mas sim escopo de bloco. E, neste caso
    // as variáveis somente poderão ser acessadas dentro do mesmo bloco
    
    // { Início do bloco
    
    // } Fim do bloco
    
    if (passedTest) {
        const yearOfBirth   = 1990;
        let firstName       = 'John';
    };
    console.log(firstName + ', born in ' + yearOfBirth + '. Is now officially allowed to drive a car!');
};

driversLicense6(true);

console.log('let')
let i6 = 23;

for ( let i6 = 0; i6 < 5; i6++ ) {
    console.log(i6);
}

console.log(i6);
console.log('-----------------------------');
console.log('var');

var i5 = 23;

for ( var i5 = 0; i5 < 5; i5++ ) {
    console.log(i5);
}

console.log(i5); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

/* // ES6
{
    const   a = 1;
    let     b = 2;
    let     c = 3;
    console.log(c);
}

// ES5
(function() {
    const   a = 1;
    let     b = 2;
    console.log(a + b);
})(); */

/////////////////////////////////////////////////////////////////////////////////
// Lecture: Strings

/* let firstName       = 'John';
let lastName	    = 'Smith';
const yearOfBirth   = 1990;

function calcAge(age) {
    return 2019 - age;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old!');

console.log('This is ' + firstName); */

/* // ES6
// Templates literals -> `${  } ${  }` || Backticks -> ``
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old!`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('John Smith')); // Começo da string
console.log(n.endsWith('Smith'));       // Final da String
console.log(n.includes('ohn'));       // Se inclui na String
console.log(`${firstName} ${lastName} - `.repeat(5)); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions: Basics

/* const years     = [1945, 1995, 1935, 1943];
const date      = new Date();
let getYear     = date.getFullYear();

// ES5
var ages5 = years.map(function(el) {
    return getYear - el;
});
console.log(ages5);

// ES6
// Arrow Functions     //return
let ages6 = years.map(el => getYear - el);
console.log(ages6);

// my test
ages6 = years.map((el, index) => console.log(`Elemento ${index + 1}: ${el}.`));

// O método .map invoca a função callback, cujo retorno produz o elemento do novo Array. Recebe três argumentos:
ages6 = years.map((el1, el2, el3) => console.log(`Valor atual: ${el1} índice: ${el2} Array ${el3}`));

// for more arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${getYear - el} years old.`);
console.log(ages6);

// for more rows
ages6 = years.map((el, index) => {
    // return
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age} years old.`
});
console.log(ages6); */


//////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions: Lexical 'this' Keyword

// ES5
/* var DOMstrings = {
    boxGreen	: '.green',
    boxBlue	    : '.blue',
    boxOrange	: '.orange',
    button      : '.button'
} */

/* var box5 = {
    color	    : 'green',
    position	: 1,
    clickMe	    : function() {

        var self = this;

        document.querySelector(DOMstrings.button).addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            console.log(str);
        })
    },
};

box5.clickMe(); */

// ES6
/* const box6 = {
    name        : 'Lucas',
    color	    : 'green',
    position	: 1,
    clickMe	    : function(el) {

        document.querySelector(DOMstrings.button).addEventListener('click', () => {
            // return
            let str = `Hello, ${el}. this is box number ${this.position} and it is ${this.color}.`;
            console.log(str);
        })
    }
}
box6.clickMe(box6.name); */

// function constructor
/* function Person(name) {
    this.name = name;
}; */

// ES5
/* Person.prototype.myFriends5 = function(friends) {

    // var self = this;

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this)); // Permite ter acesso ao 'this' de Person

    console.log(arr);

};

friends = ['Bob', 'Jane', 'Mark'];

var john = new Person('John');
var mike = new Person('Mike')

john.myFriends5(friends);
mike.myFriends5(friends); */

// ES6
// function constructor
/* function Person(name) {
    this.name = name;
};
// inclusão de método no protótipo da função construtora
Person.prototype.myFriends6 = function(friends) {

    const arr = friends.map((el, index) => `${index + 1}) ${this.name} is friends with ${el}.`);
    console.log(arr);
};

arreyfriends = ['Bob', 'Jane', 'Mark', 'Rachel'];

let john = new Person('John'); // Instância de Person
let mike = new Person('Mike');

john.myFriends6(arreyfriends);
mike.myFriends6(arreyfriends); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Destructuring

// ES5
/* var john = ['John', 26];
var name = john[0];
var age  = john[1];

// OBJECTS
var obj = {
    fisrtName   : 'John',
    lastName    : 'Smith'
}

var firstName   = obj.fisrtName;
var lastName    = obj.lastName;

console.log (firstName + ' ' + lastName); */

// ES6
/* const [name, age] = ['John', 26];
console.log(`Hello! My name is ${name}, and I am ${age} years old. How are you?`);

const obj = {
    firstName   : 'John',
    lastName    : 'Smith'
};

// OBJECTS -> os nomes devem ser os mesmos dos elementos do objeto
const {firstName, lastName} = obj;

console.log(`${firstName} ${lastName}`);

// caso queira que a variãvel tenha o nome diferente
const {firstName: a, lastName: b} = obj;

console.log(`${a} ${b}`); // John Smith */

// FUNCTIONS
/* function calcAgeRetirement(yearOfBirth) {

    const age   = new Date().getFullYear() - yearOfBirth;
    const year  = new Date().getFullYear();
    return [age, 66 - age, year]; // retorna a idade, a aposentadoria, e o ano atual

}
// para cada retorno da função, é armazenado nas variáveis/constantes respectivamente. 
const [age2, retirement, yearNow] = calcAgeRetirement(1994);

console.log(`Estamos no ano de ${yearNow}. Você têm ${age2} ano(s) de idade. Faltam ${retirement} ano(s) para a sua aposentadoria!`); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Arrays

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// O .forEach manipula os dados reais de um array e o .map cria um novo array

arr.map((el, index) => {
    return `O dobro de ${el} é ${el * 2}`;
});
console.log(arr);

console.log(`-`.repeat(50));

arr.forEach(function(cur, index) {
    return `O dobro de ${cur} é ${arr[index] = cur * 2}`;
});
console.log(arr);

let arr2 = arr.filter(el => el < 10);
console.log(arr2); */

// const boxes = document.querySelectorAll('.box'); // nodeList

/* // ES5
var boxesArr5 = Array.prototype.slice.call(boxes); // Passando o nodeList para um Array

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerBlue';
})

// ES6
// transforma o nodeList em uma Array
const boxesArr6 = Array.from(boxes);
// transforma o nodeList num Array
Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerBlue'); */

// LOOPS

/* // ES5
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        // continue;
        break;
    } else {
        boxesArr5[i].textContent = 'I changed to blue!';
    }

}; */

/* // ES6
document.querySelector('.button').addEventListener('click', () => {

    for ( const cur of boxesArr6){
        if (cur.className.includes('blue')) { // verifica se o valor entre '' está incluso no elemento atual
            continue;
        } else {
            cur.textContent = 'I changed blue.';
        }
    }

}); */

// ES5
// ages = [12, 17, 8, 21, 14, 11, 34, 12, 76, 34];

/* var full = ages.map(function(cur, index) {

    return cur >= 18;

});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]); */

/* // ES6
const pos       = ages.findIndex(cur => cur >= 18); // 3
const el        = ages.find(cur => cur >= 18); // 21
const bigAge	= ages.filter(cur => cur >= 18);

console.log(ages);
console.log(bigAge);
console.log(`O maior de idade possui ${el} anos de idade. E encontra-se na posição ${pos}.`); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Spread Operator

/* function addFourAges(a, b, c, d) {
    return a + b + c + d;
};

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); */

/* // ES5
var ages    = [18, 30, 12, 21];
//             apply -> aplica os argumentos da array na função
var sum2    = addFourAges.apply(null, ages);
console.log(sum2); */

/* // ES6
const boxes     = document.querySelectorAll('.box');
const arrBoxes  = [...boxes]; // espalha a array

document.querySelector('.button').addEventListener('click', function() {
    arrBoxes.map(cur => cur.style.backgroundColor = 'red');
})
document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        arrBoxes.map(cur => cur.style.backgroundColor = 'red');
    }
}); */

//                       Spread -> Expande a array [18, 30, 12, 21]
/* const ages = [12, 4, 65, 76];
const sum3 = addFourAges(...ages);
console.log([...ages]);
console.log(sum3);

const familySmith   = ['John', 'Jane', 'Mark'];
const familyMiller  = ['Mary', 'Bob', 'Anne'];
const bigFamily     = [...familySmith, 'newElement', ...familyMiller];
console.log(bigFamily);

//nodeLists
const h         = document.querySelector('h1');
const boxes     = document.querySelectorAll('.box'); // retorna um nodeList da classe .box
const all       = [h, ...boxes]; // retorna o elemento de h(h1) e expande o nodeList de boxes em um Array
console.log(all);     

Array.from(all).forEach(cur => cur.style.color = 'purple'); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Rest Parameters

/* // ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr =  Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    });
};

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987); */

/* // ES6
//                transformará os argumentos em matriz e em seguida passar para a função.
function isFullAge6(...years) {
    years.forEach(cur => console.log(`O dobro de ${cur} é ${cur * 2}`));
}

isFullAge6(1990, 1999, 1965, 465, 65, 434, 344676, 65763); */

// A grande diferença entre Spread Operator e Rest Parameters é, na verdade, o local onde usa-se cada um deles.
// Spread Operator: É usado na chamada de função
// Rest Parameters: É usado na declaração de função para expandir um número arbitrário de parâmetros.

/* // ES5
function isFullAge5(limit) {
    var argsArr =  Array.prototype.slice.call(arguments, 1);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    });
};
isFullAge5(21, 1990, 1999, 1965);
console.log(`-`.repeat(30)); */

// ES6
/* //                           transformará os argumentos em matriz e em seguida passar para a função.
//                           informa que aqui teremos um número indeterminado de argumentos
function isFullAge6(limit, ...years) {
    // console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Default Parameters
// Usa-se sempre que queremos que um ou mais parâmetros de uma função sejam pré-ajustados (valor padrão).

/* // ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'American' : nationality;
    
    this.firstName          = firstName;
    this.lastName           = lastName;
    this.yearOfBirth        = yearOfBirth;
    this.nationality	    = nationality;    
};

var john    = new SmithPerson('John', 1964);
var emily   = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');  */

/* // ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName          = firstName;
    this.yearOfBirth        = yearOfBirth;
    this.lastName	        = lastName;
    this.nationality	    = nationality;
};

var john    = new SmithPerson('John', 1964);
var emily   = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish'); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Maps

/* 

    Maps são melhores que objecs porque podemos usar qualquer coisa como chaves, o que abre muitas possibilidades
    como é visto no código abaixo. Não somente isso, os mapas são interáveis e facilitam muito o seu loop através
    deles e a manipulação de dados com eles.
    É muito mais fácil obter o tamanho de um mapa usando a propriedade 'size', podendo ser muito
    útil. Não somente isso, também podemos também adicionar e remover dados facilmente de um mapa.

*/

/* const question = new Map();
//             key         value
question.set('question', 'What is the official name of the lateste major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2016');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer! :D');
question.set(false, 'Wrong D:, please try again!');

// console.log(question.size); // pega o tamanho do .map

// if (question.has(4)) { // verifica se a chave key existe para então excutar o bloco do IF
//     // question.delete(4); // deleta o elemento do .map
//     console.log('Answer 4 is here!');   
// }

// question.clear(); // Limpa todo o .map

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

console.log(question.get('question')); // pega o elemento pela key do map

//                                 retorna todas as entradas do mapa respectivamente, podendo-se usar a desestruturação                                      para armazenar a chave e os valores em dois valores/variáveis separados.
for (const [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`); // lista as alternativas
    }
};

var check = function(event) {
    if ( event >= 1 && event <= 4 ) {

        // como a key de verificação recebe true ou falso, foi feita uma comparação dentro de 'questions' para se obter o resultado de true ou false de acordo com a respota do usuário
        console.log(question.get(event === question.get ('correct'))); // faz a comparação e imprime o resultado da questão
    } else if ( event === 0 ) {
        console.log('Game Canceled!');
    } else {
        event = parseInt(prompt('Please, write a number between 1 and 4','Or type 0 to cancel the game'));
        check(event);
    }
};

document.querySelector('.button').addEventListener('click', function() {
    
    const ans = parseInt(prompt('Write the correct answer!')); // recebe a resposta do usuário    
    check(ans);
}); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes

/* // ES5
var Person5 = function(name, yearOfBirth, job) {

    this.name           = name;
    this.yearOfBirth    = yearOfBirth;
    this.job            = job;
};

Person5.prototype.calculateAge = function() {

    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(`${this.name} has ${age} years old and works a ${this.job} (ES5)`);
};

var john5 = new Person5('John', 1994, 'Teacher');

john5.calculateAge();

// ES6

    // As definições de classes não são içadas/hasteadas, então, diferentemente dos construtores de função,
    // precisamos primeiro implementar uma classe, e somente mais tarde em nosso código podemos começar a usá-la.
    // Só podemos adicionar métodos a classes, mas não propriedades. Mas isso não é um problema, pois herdar
    // propriedades por meio das instâncias do objeto não é uma boa prática recomendada.

class Person6 { // criação de classe
    
    constructor (name, yearOfBirth, job) { // para cada classe, sempre deve ter um construtor
        this.name           = name;
        this.yearOfBirth    = yearOfBirth;
        this.job            = job;
    }

    calculateAge() { // Método criado sem a necessidade de informar o protótipo
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(`My name is ${this.name}. I am a ${this.job} and I am ${age} years old. (ES6)`);
    }

    static greeting() { // função estática - método anexado à classe Person6.
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1994, 'Teacher');

john6.calculateAge();

Person6.greeting(); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes and Subclasses

/* // ES5
// SuperClass
var Person5 = function(name, yearOfBirth, job) {
    this.name           = name;
    this.yearOfBirth    = yearOfBirth;
    this.job            = job; 
};

Person5.prototype.calculateAge = function() {

    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(`My name is ${this.name}. I'm ${age} and I works with a ${this.job} `);
};

//SubClass
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

    Person5.call(this, name, yearOfBirth, job);
    
    this.olympicGames   = olympicGames;
    this.medals         = medals;
};    

// herda da classe Person5
Athlete5.prototype = Object.create(Person5.prototype); // Cria uma instância a partir da Superclasse Person5 

Athlete5.prototype.wonMedal = function() {

    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1994, 'Swimmer', 3, 10);

johnAthlete5.calculateAge(); */

/* // ES6
class Person6 { // criação de classe
    
    constructor (name, yearOfBirth, job) { // para cada classe, sempre deve ter um construtor
        this.name           = name;
        this.yearOfBirth    = yearOfBirth;
        this.job            = job;
    }

    calculateAge() { // Método criado sem a necessidade de informar o protótipo
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(`My name is ${this.name}. I am a ${this.job} and I am ${age} years old. (ES6)`);
    }
};

class Athlete6 extends Person6 {

    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job); // Deve informar quais args estão sendo herdadas da superClasse

        this.olympicGames   = olympicGames;
        this.medals         = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(`${this.medals} medals.`);
    }
};

const johnAthlete6 = new Athlete6('John', 1994, 'Swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal(); */

//////////////////////////////////////////////////////////////////////////////////
// Lecture: Coding Challenge 8 - Exercício

/* class Element { // SuperClasse

    constructor(name, buildYear) {
        this.name       = name;
        this.buildYear  = buildYear;
    }
}

class Park extends Element { // SubClasse

    constructor(name, buildYear, area, numTress) {
        super(name, buildYear);

        this.area        = area; // km2
        this.numTress   = numTress;
    }

    treeDensity() {
        const desity = this.numTress / this.area;
        console.log(`${this.name} has a tree desity of ${Math.floor(desity)} trees per square km.`);
    }
};

class Street extends Element { // SubClasse

    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);

        this.length = length;
        this.size   = size;
    }

    classifyStreet() {
        const classification = new Map();

        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [ // Array que recebe as instâncias de cada parque criado
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calcAverage(arr) {
    // reduce: método que reduz os valores de uma array em um único valor.
    // Retorna: Valor anterior, valor atual, índice
    //                                                    // número na qual se iniciará
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0); // [2, 3, 5] = 0 + 2, 2 + 3, 5 + 5 = 10

    return [sum, sum/arr.length];
;}

function reportParks(p) {
 
    console.log('------ Parks Report ------');

    // Desity
    p.forEach(el => el.treeDensity()); 

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear); // retorna em uma Array a idade de cada parque
    const [totalAge, avAge] = calcAverage(ages); // Destructuring (totalAge foi usado apenas para mostrar o .reduce)

    console.log(`Our ${p.length} parks have an average of ${Math.floor(avAge)} years.`);

    // Whitch park has more than 1000 tress
    const i = p.map(el => el.numTress).findIndex(el => el >= 1000); // pega a posição do parque que possui >= 1000 árvores
    console.log(`${p[i].name} has more than 1000 trees.`);
};

function reportStreets(s) {
    
    console.log('------ Streets Report ------');

    // Total and average length of the town's streets
    const [totalLength, avLength] = calcAverage(s.map(el => el.length));

    console.log(`Our ${s.length} streets have a total length of ${Math.floor(totalLength)} km, with an average of ${Math.floor(avLength)}.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());
};

reportParks(allParks);
reportStreets(allStreets); */































