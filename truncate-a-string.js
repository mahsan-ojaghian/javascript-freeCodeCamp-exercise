function truncateString(str, num) {
  if(str.length > num){
console.log("greater");
var truncatedStr =str.substring(0,num);
console.log(truncatedStr + '...');
return truncatedStr + "...";
}
console.log(str)
  return str;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
