let name='faruq';

let age=20;

let birthDay='5th'

let birthMonth='November';

let ageConversion= Math.floor(age*365);

let output=`Happy Birthday ${name},As you turned ${age} today ${birthDay} of ${birthMonth} which is also 
${ageConversion} days when converted to days `;

console.log(output);

//number 2
let studentName='ogunsola faruq';

let mathScore=75;

let scienceScore=80;

let englishScore=85;

let attendance=95;

let overallPerce=(mathScore + scienceScore + englishScore)/3;

let totalOap=overallPerce.toFixed(2);

let scoreOutput=
`Student Name : ${studentName}
Subject Scores:
math:${mathScore}
Science:${scienceScore}
English:${englishScore}
Overall percentage:${totalOap}
Attendace percentage:${attendance}
Grade:B`;
console.log(scoreOutput);




