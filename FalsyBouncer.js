function bouncer(arr) {
  var trueItems = arr.filter((item)=>{
    if(Boolean(item)){
      return item;
    }else{
      return;
    }
  })

console.log(trueItems);
  return trueItems;

}

bouncer([null, NaN, 1, 2, undefined]);
