//Array basics
let x;

const footballClub=['chelsea','barcelona','man u','arsenal'];

x=footballClub[0];

x=footballClub[3];

let food=['amala','rice','beans'];

x=food[1];

food[2]='semo';

x=food;

x=`my mum favorite food is ${food[0]} and she made me love it `;

let comb=[23,'true',null,'word',];
x=comb[1];

x=comb[1] + comb[2];

comb[1]='false';

x=comb;

let numbers=[20,45,61,20,15];

numbers.push(90);

numbers.pop();

numbers.unshift(90);

numbers.shift();

numbers.reverse();

numbers.splice(1,4);

numbers.includes(39);

console.log(numbers);

//challenge

const arr=[1,2,3,4,5];
x=arr.push(6);
x=arr.unshift(0);
x=arr.reverse();

const arr1=[1,2,3,4,5];

const arr2=[5,6,7,8,9,10];

const arr3=arr1.slice(0,4).concat(arr2);
x=arr3;


console.log(x);
