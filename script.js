// ZURI basic arithmetic calculator task.
// Users first input

let num_1 = Number(prompt("Enter your first number: "));
// Users second input
let num_2 = Number(prompt("Enter your second number"));
// where decision is made by the user!
let operator = prompt("What operation do you want to perform \n (Addition +) \t (Subtraction -) \t (Multiplication *) \t (Division /)")
let total;
switch(operator){
    case "*":
        total = num_1 * num_2;
        console.log("This is your total multiplication:" + total);
    break;
    case "/":
        total = num_1 /num_2;
        console.log("This is your total division:" + total.toFixed(2));
    break;
    case "+":
        total = num_1 + num_2;
        console.log("This is your total addition:" + total);
        break;
    case "-":
        total = num_1 - num_2;
        console.log("This is your total subtraction:" + total);
        break;
    default:
        console.log("Oops :( you didn't input the right operator \n Please choose one of these operators (+ - / *)");
}
