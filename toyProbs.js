//1
//
// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

var fizzle = n =>{
    var arr=[];
    for(i=1;i<=n;i++){
      if(i%3===0 &&i%5===0){
        arr.push('FizzBuzz')
      }else if(i%3===0 || i%5===0){
        arr.push(i%3===0? 'Fizz':'Buzz')
      }else{
        arr.push(i)
      }
    }return arr;
  }
  fizzle(20);

  //
  //2
  //
  //
  //Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
  function summy(stringOfInts){
    var total=0;
    var nums= stringOfInts.split(' ');
    for(i=0;i<nums.length;i++){
      total+=parseInt(nums[i])
    }
}
    return total;
//
//
//
//
//
//
