function countingSort(arr) {
    if (arr.length === 0) {
      return arr;
    }
  
    // Find the maximum value in the array
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
  
    // Create a count array with a size equal to the maximum value
    const countArray = new Array(maxValue + 1).fill(0);
  
    // Count the occurrences of each element in the array
    for (let i = 0; i < arr.length; i++) {
      countArray[arr[i]]++;
    }
  
    // Calculate the cumulative sum of the count array
    for (let i = 1; i < countArray.length; i++) {
      countArray[i] += countArray[i - 1];
    }
  
    // Create a sorted array using the count array
    const sortedArray = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
      sortedArray[countArray[arr[i]] - 1] = arr[i];
      countArray[arr[i]]--;
    }
  
    return sortedArray;
  }
  
  // Example usage
  const array = [4, 2, 7, 1, 5, 3, 6];
  const sortedArray = countingSort(array);
  console.log(sortedArray);