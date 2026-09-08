// This is our main function
function fizzbuzz() {

    const readline = require('node:readline');

    const rl = readline.createInterface({input: process.stdin, output: process.stdout});

    rl.question(`Choose a number between 1 and 500: \n`, num => {
    console.log(`Playing fizzbuzz up to ${num}...`);
    
    for (let i = 1; i <= num; i++) {
        
        let string = "";
        
        if (i % 17 === 0) { // Reverses the order of the words if divisible by 17   
            
            if (i % 11 === 0) {
                if (i % 13 === 0) {
                    string = "BongFezz"; // Prints BongFezz if divisible by 11, 13 and 17
                } else {
                    string = "Bong"; // Only prints Bong if divisible by 11 but not 13
                }
            }        
            
            if (i % 7 === 0) {
                string += "Bang";
            }
            
            if (i % 5 === 0){
                string += "Buzz";
            }
            
            if (i % 13 === 0) {
                string += "Fezz"; // Prints Fezz before any other words that start with B
            }
            
            if (i % 3 ===0) {
                string += "Fizz";
            } 
            
        } else{    
            if (i % 3 ===0) {
                string += "Fizz";
            } 
            
            if (i % 13 === 0) {
                string += "Fezz"; // Prints Fezz before any other words that start with B
            }
            
            if (i % 5 === 0){
                string += "Buzz";
            }
            
            if (i % 7 === 0) {
                string += "Bang";
            }
            
            if (i % 11 === 0) {
                if (i % 13 === 0) {
                    string = "FezzBong"; // Prints FezzBong if divisible by both 11 and 13
                } else {
                    string = "Bong"; // Only prints Bong if divisible by 11 but not 13
                }
            }
        }
        
        if (string === "") {
            string += i.toString();
        }
        
        console.log(string);
        
    }
    rl.close();
});
}

// Now, we run the main function:
fizzbuzz();

