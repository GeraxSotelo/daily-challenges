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
  for (let up = 0, down = arr.length - 1; up < arr.length && down >= 0; up++, down--) {
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

// Write a program that prints a staircase of size n.Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//    #
//   ##
//  ###
// ####
function staircase(n) {
  let hashTemp = '#';
  let spaceTemp = '';
  let count = n;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < count; j++) {
      spaceTemp += ' ';
    }
    count--;
    console.log(spaceTemp + hashTemp);
    hashTemp += '#'
    spaceTemp = '';
  }
}

// 03/05/2020
// Write a function in JavaScript that can be passed a string, and returns a string that can be made to contain either all the odd or all the even characters from the input.
function evenOrOdd(str, option) {
  if (!option) {
    console.log("Enter even or odd");
  } else {
    option = option.toLowerCase().trim();
    let strArr = str.split("");
    if (option == "even") {
      return strArr.filter((elem, i) => (i + 1) % 2 == 0).join("");
    } else if (option == "odd") {
      return strArr.filter((elem, i) => (i + 1) % 2 != 0).join("");
    } else {
      console.log("Enter even or odd");
      return;
    }
  }
}

// 03/10/2020
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two, space-separated long integers.
// For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print 16 24
function miniMaxSum(arr) {
  let total = arr.reduce((sum, num) => sum + num);
  let max = total - Math.min(...arr);
  let min = total - Math.max(...arr);
  console.log(min + " " + max);
}

// 03/15/2020
// Given a string of numbers, find the maximum three digit set of numbers.
function getMaxThreeDigits(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let temp = str.slice(i, i + 3);
    let int = parseInt(temp);
    if (int > max) {
      max = int;
    }
  }
  return max;
}

// 03/16/2020
// Count the number of characters in a string and return an object with the results.
function countCharacters(str) {
  let obj = {};
  if (str.match(/^[0-9a-zA-Z]+$/)) {
    for (let i = 0; i < str.length; i++) {
      if (!obj.hasOwnProperty(str.charAt(i))) {
        obj[str.charAt(i)] = 1;
      }
      else {
        obj[str.charAt(i)] += 1;
      }
    }
    return obj;
  } else {
    console.log("Enter letters or numbers only");
  }
}

function countCharacters(str) {
  let obj = {};
  if (str.match(/^[0-9a-zA-z]+$/)) {
    for (let i = 0; i < str.length; i++) {
      let el = str.charAt(i);
      !obj[el] ? obj[el] = 1 : obj[el] += 1;
    }
    return obj;
  }
  else {
    console.log("Enter letters or numbers only");
  }
}

// 03/19/2020
// A cake will have one candle for each year of your niece's total age. She’ll only be able to blow out the tallest candles. Your task is to find out how many candles she can successfully blow out.
// For example, if she is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.
function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  return ar.filter(i => i == max).length
}

// 03/21/2020
//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
function timeConversion(s) {
  let sArr = s.slice(0, -2).split(":");
  let dayType = s.slice(-2).toLowerCase();
  let hh = parseInt(sArr[0]);
  let mm = parseInt(sArr[1]);
  let ss = parseInt(sArr[2]);
  if ((hh > 0 && hh <= 12 && mm >= 0 && mm <= 59 && ss >= 0 && ss <= 59) && (dayType == "pm" || dayType == "am")) {
    if (dayType == "pm") {
      hh = hh + 12;
      if (hh == 24) {
        hh = "12";
      }
    } else {
      if (hh < 10) {
        hh = "0" + hh.toString();
      } else if (hh == 12) {
        hh = "00";
      }
    }
    if (mm < 10) {
      mm = "0" + mm.toString();
    }
    if (ss < 10) {
      ss = "0" + ss.toString();
    }
    return [hh, mm, ss].join(":");
  } else {
    return console.log("Incorrect input");
  }
}

function timeConversion(s) {
  let sArr = s.slice(0, -2).split(":");
  let dayType = s.slice(-2).toLowerCase();
  let hh = parseInt(sArr[0]);
  let mm = parseInt(sArr[1]);
  let ss = parseInt(sArr[2]);
  if ((hh > 0 && hh <= 12 && mm >= 0 && mm <= 59 && ss >= 0 && ss <= 59) && (dayType == "pm" || dayType == "am")) {
    switch (dayType) {
      case "pm":
        hh = hh + 12;
        hh = hh == 24 ? "12" : hh;
        break;
      case "am":
        hh = hh < 10 ? "0" + hh.toString() : hh == 12 ? "00" : hh;
        break;
    }
    mm = mm < 10 ? "0" + mm.toString() : mm
    ss = ss < 10 ? "0" + ss.toString() : ss

    return [hh, mm, ss].join(":");
  } else {
    return console.log("Incorrect input");
  }
}