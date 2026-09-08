// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {

        let string = "";

        if (i % 3 ===0) {
            string += "Fizz";
        } 
        
        if (i % 5 === 0){
            string += "Buzz";
        }

        if (i % 7 === 0) {
            string += "Bang";
        }

        if (i % 11 === 0) {
            string = "Bong"; // Only prints Bong in this case
        }

        if (string === "") {
            string += i.toString();
        }

        console.log(string);

    }
}

// Now, we run the main function:
fizzbuzz();

