function largestOfFour(arr) {
  var result = 
    arr.map((item)=>{
       var maxItems;
       maxItems = Math.max.apply(null,item);
       return  maxItems;
    }) 
  ; 
   console.log(result);   
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
