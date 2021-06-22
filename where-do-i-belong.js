function getIndexToIns(arr, num) {
 let sortedArray = arr.sort((a, b)=>{return a - b});
 sortedArray.push(num);
 sortedArray.sort((a,b)=>{return a - b})
 return sortedArray.indexOf(num);
}

getIndexToIns([40, 60], 50);
