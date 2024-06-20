
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }
  
    // Find minimum and maximum values in the array
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      } else if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
  
    // Create buckets
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }
  
    // Distribute elements into buckets
    for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
      buckets[bucketIndex].push(arr[i]);
    }
  
    // Sort each bucket and concatenate the results
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (bucketSize === 1) {
        // If bucket size is 1, just push the elements directly
        sortedArray.push(...buckets[i]);
      } else {
        // If bucket size is greater than 1, recursively sort each bucket
        const bucket = bucketSort(buckets[i], bucketSize - 1);
        sortedArray.push(...bucket);
      }
    }
  
    return sortedArray;
  }
  
  // Example usage
  const array = [29, 25, 10, 46, 12, 15, 8];
  const sortedArray = bucketSort(array, 5);
  console.log(sortedArray);