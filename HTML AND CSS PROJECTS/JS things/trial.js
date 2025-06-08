function product(arr) {
  if (arr.length === 0) {
    return [];
  }
  
  return arr[0] * product(arr.slice(1));
}

console.log(product([1,2,3,4,5]))