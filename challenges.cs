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
    static void plusMinus(int[] arr) {
        decimal arrLength = arr.Length;
        decimal pos = 0;
        decimal neg = 0;
        decimal zero = 0;
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] > 0) {
                pos++;
            } else if (arr[i] < 0) {
                neg++;
            } else {
                zero++;
            }
        }
        decimal posdec = pos/arrLength;
        decimal negdec = neg/arrLength;
        decimal zerodec = zero/arrLength;
        Console.WriteLine(Math.Round(posdec, 6));
        Console.WriteLine(Math.Round(negdec, 6));
        Console.WriteLine(Math.Round(zerodec, 6));
    }