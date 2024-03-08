

var number = parseInt(prompt("Enter a number:"));

if ((number)) {
    var table = [];

    for (var i = 1; i <= 10; i++) {
        table = console.log(number * i);
    }

    console.log("Table of number", table);
} else {
    console.log("Invalid input. Please enter a valid number.");
}