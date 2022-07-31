/**
 * Uses binary search to find and returan an item's index in an array. Returns null if not found. Complexity 0(log n)
 * @array array to search
 * @item item to find
 */
const searchArray = (array: number[], item: number) => {
  let min = 0; // 1
  let max = array.length - 1; // 1
  const clonedArray = [...array];
  // clonedArray.sort((a, b) => a - b); // TODO: returns index of sorted array, but not original - adds complexity

  while (true) { // lg n
    const endIndex = min + max; // lg n
    const middleDecimal = endIndex / 2.0; // lg n
    const middleIndex = Math.floor(middleDecimal); // lg n

    const currentItem = clonedArray[middleIndex]; // lg n

    if (currentItem === item) { // lg n
      return middleIndex;
    } else if (currentItem < item) { // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1; // lg n
    }

    if (min > max) { // lg n
      return null; // 1
    }
  }
}

export default searchArray;
