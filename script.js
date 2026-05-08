// --- ASSIGNMENT 1: STUDENT SYSTEM ---
function assignment1() {
    var name = prompt("Enter Name:");
    var age = prompt("Enter Age:");
    var city = prompt("Enter City:");
    
    
    var status = checkStatus(age); 
    
    alert("STUDENT REPORT:\nHello " + name + ", you are " + age +" years old, and live in "+ city + "\nYou are " + status);
}

function checkStatus(age) {
    if (Number(age) >= 18) {
        return "an adult";
    } else {
        return "a minor";
    }
}

// --- ASSIGNMENT 3: CALCULATOR ---
function assignment3() {
    var n1 = Number(prompt("Enter first number:"));
    var n2 = Number(prompt("Enter second number:"));
    var op = prompt("Enter operation: \nAddition ( + ) \nSubtraction ( - ) \nMultiplication ( * ) \nDivision ( / )");
    var result;

    switch(op) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero"; break;
        default: result = "Invalid Operator";
    }
    alert("Result: " + result);
}

// --- ASSIGNMENT 5: LOGIN SYSTEM ---
function assignment5() {
    var user = prompt("Username:");
    var pass = prompt("PIN:");

    if (user === "admin" && pass === "1234") {
        alert("Welcome Admin");
    } else if (user === "teacher" && pass === "1111") {
        alert("Welcome Teacher");
    } else if (user === "student" && pass === "2222") {
        alert("Welcome Student");
    } else {
        alert("Invalid Credentials");
    }
}

// --- BONUS: GUESS GAME ---
function assignmentGuess() {
    var secret = 5;
    var guess = Number(prompt("Guess the number (1-10):"));

    if (guess === secret) {
        alert("You Win!");
    } else {
        alert("Try Again!");
    }
}
