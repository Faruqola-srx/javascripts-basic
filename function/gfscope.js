function name(f,a){
    console.log(f+a);
}
name(34,21);

function name(c,a) {
    return c+a;
}
console.log(name(34,22));

//global and function scope

//alert('good morning') ;

const x=20;
function cal() {
    console.log(10+x);
}
cal();

function put() {
    const y=14;
    console.log(y+x);
}
put();

if(true) {
    const z=200;
    console.log(z+x);
}

//challenge
function createAccount(accountNumber,accountHolder,initialBalance) {
    return {accountNumber:accountNumber,
            accountHolder:accountHolder,
            initialBalance:initialBalance
    }
}
const result=createAccount('040504305','faruq','$200');

console.log(result);


function deposit(account,amount) {
    return result=createAccount
}
console.log(new);