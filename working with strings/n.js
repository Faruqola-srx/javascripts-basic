//workimg with numbers

let pin=2336;

Atm=pin.toString().length;

//console.log(Atm);

Atm=pin.toFixed(2);

Atm=pin.toPrecision(2);

Atm=pin.toExponential(2);

Atm=pin.toLocaleString('en-NG');

Atm=pin.valueOf();

Atm=Number.MAX_VALUE;

Atm=Number.MIN_VALUE;

console.log(Atm);

//math objects

//console.log(Math);

let num;

num=Math.sqrt(16);

num=Math.floor(5.2);

num=Math.ceil(5.2);

num=Math.random()*10+1;

num=Math.max(3,5,6);

//console.log(num);


//CHALLENGE
let x=Math.floor(Math.random()*100+1);

let y=Math.floor(Math.random()*50+1);

let sum=x + y;
let Outputsum= x +' ' + y + ' ' + sum;


console.log(Outputsum);

let difference=x-y;

//console.log(difference);

let product=x*y;
//console.log(product);

let quocient=x/y;
//console.log(quocient);

let remainder=x%y;
//console.log(remainder);

let p='faruq,where is my money';
let ans='its in your pocket';
let value='money';
let totalans=p + ' ' + ans + ' '+ value;
console.log(totalans)
