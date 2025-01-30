let person={name:'faruq',age:20};
let newName=person;

console.log(person);
console.log(newName);

let faruq=['green', 'red','blue'];
let emma=faruq;
let idris=emma;
let kayode='sodiq';
let sodiq='me'
let me=[1,2,3,4,5];
 
console.log(me,faruq);

let money ='fifty';
let pocket='zero';
let zero=money;
let fifty=pocket;
let forty='sixty'
console.log(fifty,money);

//type conversion
//coverting string to number

let age='20';
//age= Number(age);
//console.log(age);
//age= +age;
//console.log(age,typeof age);
age= parseInt(age);

//coverting number to string
let size=150;
//size = size.toString();
//console.log(size,typeof size);
size= String(size);
console.log(size,typeof size);

//converting number to boolean
let number=35;
number = Boolean(number);
console.log(number,typeof number);

//converting string to boolean
let place ='school'
place= Boolean(place);
console.log(place,typeof place);

//converting string to number(decimal number)
let no=23.6;
no=parseFloat(no);
console.log(no,typeof no);