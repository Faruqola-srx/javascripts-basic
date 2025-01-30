//object literal

let x;

const info = {name:'faruq ogunsola',age:20, school:'fed poly ede',colors:['blue','yellow','blue and yellow']};
const phoneNo=[0,7,0,3,9,2,8,1,5,21];

x=info;

x=info.name;

x=info.age;

x=info.colors[0];

x=Object.keys(info);

x=Object.keys(info).length;

x={...info,...phoneNo};

x=Object.values(info);

x=delete info.colors[2];

x=Object.entries(info);

console.log(x);


const person ={name:'faruq',age:20,city:'ibadan',hobbies:['footballing','cooking','gaming']};

console.log(person);


