/**
 * Searches all pairs in an array for a matching sum
 * ex1- searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) // true
 * ex2- searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 100) // false
 */
const arrayContainsSum = (array: number[], sum: number) => {
  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const currentSum = array[i] + array[ii];

    if (currentSum === sum) return true;
    (currentSum > sum) ? ii-- : i++;
  }

  return false;
};

export default arrayContainsSum;
