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

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9=15 The right to left diagonal = 3+5+9=17 Their absolute difference is |15-17|=2
function diagonalDifference(arr) {
  let ld = 0
  let rd = 0
  for (let up = 0, down = arr.length - 1; up < arr.length && down >= 0; up++ , down--) {
    ld += arr[up][up];
    rd += arr[up][down];
  }
  return Math.abs(ld - rd);
}

// 03/04/2020
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
// For example, given the array arr=[1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5=0.400000, 2/5=0.400000 and 1/5=0.200000.
function plusMinus(arr) {
  const length = arr.length;
  let pos = 0, neg = 0, zero = 0;
  arr.forEach(num => {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    }
    else {
      zero++;
    }
  });
  console.log((pos / length).toFixed(6) + '\n' + (neg / length).toFixed(6) + '\n' + (zero / length).toFixed(6));
}

function plusMinus(arr) {
  const length = arr.length;
  let pos = 0, neg = 0, zero = 0;
  arr.forEach(num => {
    num > 0 ? pos++ : num < 0 ? neg++ : zero++;
  });
  console.log((pos / length).toFixed(6) +
    '\n' + (neg / length).toFixed(6) +
    '\n' + (zero / length).toFixed(6));
}
