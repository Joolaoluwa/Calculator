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
        alert("This is your total multiplication:" + "\t" + total);
    break;
    case "/":
        total = num_1 /num_2;
        alert("This is your total division:" + "\t" + total.toFixed(2));
    break;
    case "+":
        total = num_1 + num_2;
        alert("This is your total addition:" + "\t" + total);
        break;
    case "-":
        total = num_1 - num_2;
        alert("This is your total subtraction:" +"\t" + total);
        break;
    default:
        console.log("Oops :( you didn't input the right operator \n Please choose one of these operators (+ - / *)");
}
