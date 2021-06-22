function sumAll(arr) {
  arr.sort((a,b)=>{return a - b});
  const firstNum = arr[0];
  const secondNum = arr[1];
  const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
  let rangeArray = range(firstNum,secondNum);
  console.log(range(firstNum,secondNum));
  return rangeArray.reduce((items,num)=>{
    return items + num;
  });;
}

sumAll([1, 4]);
