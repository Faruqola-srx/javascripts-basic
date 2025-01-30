//function basic
function sayHello() {
    console.log('hello');
    
}

sayHello();


function addition(x,y) {
    console.log(x,y);
}
addition(10,2);


function companyFund(num1,num2) {
    return num1+num2;

}
console.log(companyFund (10,2));

function description(info) {
 return `My name is ${info.name},i am ${info.comx} in complexion and i live in ${info.city}`; 
}
const info= {name:'faruq',comx:'dark',city:'ibadan'};
console.log(description(info));
console.log(description({
    name:'olamide',
    comx:'light',
    city:'lagos'
}));

function colors(pick) {
    return `i love three colors which are ${pick[0]},${pick[3]},${pick[4]},while i hate ${pick[2]}`;
}
const pick=['white','blue','red','black','any color except orange and red'];
 pick[2]='multicolor';
console.log(colors(pick));

function array(numbers) {
    const ranNumbers=Math.floor(Math.random() * numbers.length);
    const result=numbers[ranNumbers];
    console.log(result);


}
array([1,2,3,4,5,6,7]);






