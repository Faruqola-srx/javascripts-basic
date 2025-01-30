const name= 'faruq';
const age=20;
const color='blue';


const total = {
    name,
    age,
    color,
};
console.log(total);

const colors={
    color1:'blue',
    color2:'black',
    color3:'white'
};

const { color1,color3}=colors;

console.log(color1,color3);

const hobbies=[
    'footballing',
    'swimming',
    'dancing'
];

const[first,second]=hobbies;
console.log(first,second);

const food={ 
    morning:'rice',
    afternoon:'bread',
    evening:'semo'
};

const conversion=JSON.stringify(food);
console.log(conversion);

const conversion2=JSON.parse(conversion);
console.log(conversion2);

//challenges
const library=[{
    title:'About javascript',
    author:'faruq olamide',
    status : {own:'true',read:'false',reading:'false'}
}]

//setting the read value to true
library[0].status.read='true';
console.log(library);

//destructing the title
const {title}=library[0];
console.log(title);

//turning library object into JSON
const JSONobj=JSON.stringify(library);
console.log(JSONobj);
