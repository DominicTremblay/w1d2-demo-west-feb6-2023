// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
// remove the first 2 elements of the list

const args = process.argv.slice(2);
console.log('args:', args, 'Length:', args.length);

// find how many arguments (length)
// Edge Case: We need at least 2 arguments
// if (args[1] === undefined) {

if (args.length < 2) {
  console.log('Please, enter at least 2 arguments');
  process.exit();
}

// need a accumulator to store the total
let total = 0;

// iterate through the arguments
// for loop? for of ? forEach? forIn (usually not for array)? c-style for loop?
// what should drive our decision? Do we need the index? => code readability?
for (let arg of args) {
  // sum up the args (nbs)
  // Edge Case: Is it a whole number? If not => skip it
  // check if it contains a decimal
  const convertedNum = Number(arg);
  console.log(
    'arg:',
    arg,
    'convertedNum',
    convertedNum,
    'type:',
    isNaN(convertedNum)
  );
  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
  }
  // Edge Case: If any argument is not a number, output an error message.
  if (isNaN(convertedNum)) {
    console.log('Please, enter only numbers');
    // return => return a value from a function, return exits a function (side effect)
    process.exit();
  }
  // console.log('arg:', arg, 'total:', total, 'type:', typeof convertedNum);
}

// print the result
console.log('total:', total);
