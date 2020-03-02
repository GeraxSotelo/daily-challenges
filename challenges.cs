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