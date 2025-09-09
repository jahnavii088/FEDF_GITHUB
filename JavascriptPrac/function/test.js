//There are five different ways to define a function in JavaScript
//1. Function Declaration- A standard way to define a function.
//2. Function Expression- A function defined within an expression.
//3. Arrow Function- A concise syntax for writing functions.
//4. IIFE (Immediately Invoked Function Expression)- A function that runs as soon as it is defined.
//5. Generator Function- A function defined as a property of an object.(we can pause and resume execution)

/*function add(a,b)
{
    return a+b;
}
console.log(add(2,3));*/
//Function Expression or Anonymous Function
/*let walk = function (){
    console.log("walk");
}
walk();*/
//Function Declaration are hoisted, which means they can be called before they are defined in the code.
//Ghosting is a process moving the declaration of functions, variables or classes to the top of their scope before code execution.
//Named Function
/*let run = function run(){
    console.log("run");
}
run();*/
/*function sum(a,b){
    console.log(arguments);//[Arguments] { '0': 2, '1': 3 }
    return a+b;//10+undefined=NaN
}
console.log(sum(2,3,4,5,6,7)); //NaN(not a number) if we pass only one argument(number)
//when we pass more than the defined parameters, it will ignore the extra arguments
//How to assign default values to parameters
//calculate the interest rate
function interest(principal,rate,year){
    return principal*rate*year/100;
}
console.log(interest(10000,3.5,5));//1750*/
//Default parameters
/*function interest(principal,rate,year){
    rate=rate || 3.5;
    year=year || 5;

    return principal*rate*year/100;

}
console.log(interest(10000));*/

//Arrow Function
/*let interest= (principal,rate,year) =>{
    return principal*rate*year/100;

}
console.log(interest(10000,3.5,5));*/

//IIFE (Immediately Invoked Function Expression)
//(function univ(){
    //console.log('KL UNIVERSITY');
//})();