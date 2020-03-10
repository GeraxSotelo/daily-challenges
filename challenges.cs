// 03/02/2020
// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
// Function Description: Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

static long aVeryBigSum(long[] ar)
{
  long total = 0;
  for (int i = 0; i < ar.Length; i++)
  {
    total += ar[i];
  }
  return total;
}

static long aVeryBigSum(long[] ar)
{
  long total = ar.Sum();
  return total;
}

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9=15 The right to left diagonal = 3+5+9=17 Their absolute difference is |15-17|=2
public static int diagonalDifference(List<List<int>> arr)
{
  int ld = 0;
  int rd = 0;
  for (int up = 0, down = arr.Count - 1; up < arr.Count && down >= 0; up++, down--)
  {
    ld += arr[up][up];
    rd += arr[up][down];
  }
  return Math.Abs(ld - rd);
}

// 03/04/2020
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
// For example, given the array arr=[1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5=0.400000, 2/5=0.400000 and 1/5=0.200000.
static void plusMinus(int[] arr)
{
  decimal arrLength = arr.Length;
  decimal pos = 0;
  decimal neg = 0;
  decimal zero = 0;
  for (int i = 0; i < arr.Length; i++)
  {
    if (arr[i] > 0)
    {
      pos++;
    }
    else if (arr[i] < 0)
    {
      neg++;
    }
    else
    {
      zero++;
    }
  }
  decimal posdec = pos / arrLength;
  decimal negdec = neg / arrLength;
  decimal zerodec = zero / arrLength;
  Console.WriteLine(Math.Round(posdec, 6) +
  "\n" + Math.Round(negdec, 6) +
  "\n" + Math.Round(zerodec, 6));
}

// Write a program that prints a staircase of size n.Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//    #
//   ##
//  ###
// ####
static void staircase(int n)
{
  string hashTemp = "#";
  string spaceTemp = "";
  int count = n;
  for (int i = 0; i < n; i++)
  {
    for (int j = 1; j < count; j++)
    {
      spaceTemp += " ";
    }
    Console.WriteLine(spaceTemp + hashTemp);
    count--;
    hashTemp += "#";
    spaceTemp = "";
  }
}

// 03/10/2020
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two, space-separated long integers.
// For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print 16 24
static void miniMaxSum(int[] arr)
{
  // convert int array to long array
  long[] longArr = Array.ConvertAll(arr, num => (long)num);
  long min = longArr.Sum() - longArr.Max();
  long max = longArr.Sum() - longArr.Min();
  Console.WriteLine(min + " " + max);
}