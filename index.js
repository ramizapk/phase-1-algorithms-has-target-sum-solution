function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

  
    Time complexity: O(n)
    Space complexity: O(n)

*/

/* 
  Add your pseudocode here

  1- Initialize an empty Set called seenNumbers.

  2- FOR each number in the input array, do the following:
    a. Calculate the complement of the current number by subtracting it from the target number.
    b. IF the complement is already in seenNumbers, return true.
    c. ELSE, add the current number to seenNumbers.
  END FOR
  3- RETURN false , If the loop completes without finding a pair of numbers whose sum is equal to the target.

*/

/*
  Add written explanation of your solution here

  The function uses a Set data structure to keep track of the numbers that have been encountered so far.
   It iterates over each number in the array,
   calculates its complement (i.e., the difference between the target number and the current number),
   and checks if the complement is already in the Set. If the complement is found in the Set, 
   it means that a pair of numbers whose sum is equal to the target number has been found,
   so the function returns true. If the complement is not found in the Set, the current number
   is added to the Set and the iteration continues. If no such pair is found in the entire array, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
