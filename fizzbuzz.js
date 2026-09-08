// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 195; i++) {

        let string = "";

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

        if (string === "") {
            string += i.toString();
        }

        console.log(string);

    }
}

// Now, we run the main function:
fizzbuzz();

