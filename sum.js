// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
// remove the first 2 elements of the list

const args = process.argv.slice(2);
console.log('args:', args, 'Length:', args.length);

// find how many arguments (length)
// Edge Case: We need at least 2 arguments

// Edge Case: Is it a whole number?
// Edge Case: If any argument is not a number, output an error message.
// need a accumulator to store the total
let total = 0;

// iterate through the arguments
// for loop? for of ? forEach? forIn (usually not for array)? c-style for loop?
// what should drive our decision? Do we need the index? => code readability?
for (let arg of args) {
  // sum up the args (nbs)
  total += Number(arg);
  console.log('arg:', arg, 'total:', total, "type:", typeof Number(arg));
}

// print the result
console.log("total:", total);