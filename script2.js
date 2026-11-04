// GOMYCODE JAVASCRIPT CHECKPOINT 2
// Topic: JavaScript Functions

// ===================================
// PART 1: STRING MANIPULATION
// ===================================

// 1. Reverse a string
// split changes the string into an array
// reverse changes the order and join puts it back together

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("1. Reverse String");
console.log(reverseString("hello"));


// 2. Count characters in a string
// length counts all characters including spaces

function countCharacters(str) {
    return str.length;
}

console.log("2. Count Characters");
console.log(countCharacters("Hello World"));


// 3. Capitalize the first letter of every word

function capitalizeWords(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}

console.log("3. Capitalize Words");
console.log(capitalizeWords("welcome to gomycode"));


// ===================================
// PART 2: ARRAY FUNCTIONS
// ===================================

// 4. Find the maximum number in an array

function findMaximum(numbers) {
    return Math.max(...numbers);
}

// Find the minimum number in an array

function findMinimum(numbers) {
    return Math.min(...numbers);
}

let numbers = [12, 5, 30, 8, 20];

console.log("4. Maximum and Minimum");
console.log("Maximum:", findMaximum(numbers));
console.log("Minimum:", findMinimum(numbers));


// 5. Find the sum of numbers in an array
// The loop adds one number at a time

function sumArray(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log("5. Sum of Array");
console.log(sumArray(numbers));


// 6. Filter an array based on a condition
// Here we keep numbers greater than 10

function filterArray(numbers, condition) {
    return numbers.filter(condition);
}

console.log("6. Filter Array");
console.log(filterArray(numbers, function(num) {
    return num > 10;
}));


// ===================================
// PART 3: MATHEMATICAL FUNCTIONS
// ===================================

// 7. Calculate factorial
// Factorial of 5 = 5 * 4 * 3 * 2 * 1

function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        return undefined;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log("7. Factorial");
console.log(factorial(5));


// 8. Check whether a number is prime
// A prime number is divisible only by 1 and itself

function isPrime(n) {
    if (!Number.isInteger(n) || n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("8. Prime Number Check");
console.log(isPrime(7));
console.log(isPrime(10));


// 9. Generate Fibonacci sequence
// Each new number is the sum of the previous two

function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        return [];
    }

    let sequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

console.log("9. Fibonacci Sequence");
console.log(fibonacci(10));