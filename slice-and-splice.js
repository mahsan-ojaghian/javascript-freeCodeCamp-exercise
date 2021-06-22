function frankenSplice(arr1, arr2, n) {
  let fromArr2 = arr2.slice(0,n);
  //console.log(fromArr2);
  var newArr2 = [...arr2];
  newArr2.splice(0,n);
  console.log(newArr2);
  var result = fromArr2.concat(arr1,newArr2);
  //console.log(fromArr2.concat(arr1,arr2))
  return result;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
