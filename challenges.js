// 03/02/2020
// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
// Function Description: Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
function aVeryBigSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function aVeryBigSum(arr) {
  return arr.reduce((total, num) => total += num);
}