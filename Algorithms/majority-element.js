function count(array, num, low, high) {
  let count = 0;
  for (let i = low; i < high; i++) {
    if (num == array[i]) {
      count++;
    }
  }
  return count;
}

function majorityElement(array, low, high) {
  if (low == high) {
    return array[low];
  }
  if (high - low === 1) {
    // added base case for arrays of length 2
    return array[low] === array[high] ? array[low] : -1;
  }
  let mid = Math.floor((low + high) / 2); // changed midpoint calculation
  let left = majorityElement(array, low, mid);
  let right = majorityElement(array, mid + 1, high);

  if (left == right) {
    return left;
  }

  let leftCount = count(array, left, low, high);
  let rightCount = count(array, right, low, high);

  return leftCount > rightCount ? left : right;
}

let array = [1, 1, 2, 3, 4];
console.log(
  "The majority element in the array is " +
    majorityElement(array, 0, array.length - 1)
);
