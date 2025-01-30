//array nesting,concat,spread ...
let x;
const names=['faruq','olamide','idris','emma'];

const newNames=['ayo','pelumi','ola'];

x=names.push(newNames);

x=names;


x=names[4][0];

x=names.flat();

x=names.concat(newNames);

x=[...names,...newNames];

x=Array.isArray(names);


console.log(x);

//challenge1
const colors=['Red','Green','Blue','Yellow','purple'];

//challenge2
x=colors[0];
console.log(x);
x=colors[2];
console.log(x);
x=colors[4];
console.log(x);

//challenge3
x=colors.push('orange');
console.log(colors);

//challenge 4
x=colors.splice(1,1);
console.log(colors);

//challenge5
colors[0]='pink';


