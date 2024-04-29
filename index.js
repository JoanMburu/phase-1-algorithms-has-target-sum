function hasTargetSum(array, target) {
  const numbersSeen = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (numbersSeen[complement]) return true;
    numbersSeen[array[i]] = true;
  }
  return false;
}

/* 
  The Big O time complexity of this function is O(n), where n is the number of elements in the array.
*/

/* 
  Pseudocode:
  1. Create an object to store numbers we have seen.
  2. Loop over each element in the array.
  3. For each element, calculate the complement that would add up to the target sum.
  4. If the complement is in the object, return true.
  5. Otherwise, add the current element to the object.
  6. If no pair is found, return false after the loop.
*/

/*
  This function works by using a hash table to remember the numbers we have seen so far. For each number, we check if the complement (target - current number) has already been seen. If it has, we return true, as we have found two numbers that add up to the target sum. If not, we add the current number to the hash table and continue. If we reach the end of the array without finding a pair, we return false.
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