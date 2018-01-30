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
    return total;
}
    
//
//
//
//
//
//3
// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"

var DNAStrand = dna =>{
  var complement='';
  for(i=0;i<dna.length;i++){
    if(dna[i]==='A'){
      complement+="T"
    }else if(dna[i]==='T'){
      complement+="A"
    }else if(dna[i]==='C'){
      complement+="G"
    }else if(dna[i]==='G'){
      complement+="C"
    }
  }return complement;
}

//
//
//4
//
// Keeping a Zen garden clean is hard work.

// Write a function that, given a string, replaces any word that is not "rock" or "gravel" with the word "gravel"

// For example, if you were passed a string that contained "slug spider rock gravel rock beetle", your function would return "gravel gravel rock gravel rock gravel"

var zen = str =>{
  zenStr=str.split(' ');
  for(i=0;i<zenStr.length;i++){
    if(zenStr[i]!=='rock'&&zenStr[i]!=='gravel'){
      zenStr.splice(i,1,'gravel')
    }
  }return zenStr.join(' ');
}
//
//
//
//5
//
//
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

var descending = x =>{
  var arr = x.toString().split('').sort((a,b)=>b-a);
  return Number(arr.join(''));
}
//
//
//
//
//6
//
//Write a function that accepts a string, and returns true if it is in the form of a phone number. 
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses) 

var validPhoneNumber=(n)=> (n[0]==='('&& n[4]===')'&& n[9]==='-' && n.length===14)
//
//
//
//7
// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
  if( array.length<1){
    return 'even';
  }
  else {
   return array.reduce((x,i)=>x+i)%2===0 ? 'even':'odd';
  }
  }
//
//
//
//8
//
//
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


var trollFilter=(str)=>{
  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  var arr = str.split('');
  arr.map((x,i)=>{
    if(vowels.includes(x)){
      arr[i]='';
    }
  });

 return arr.join('');
};
//
//
//
//
//
//9
//
//
// this is a joke tp that i made as an example to students 
const goodStudent = () =>{
  const sink=[1,2,3,3,4,];
  const dishwasher=[]
  if(sink.length<1){
    return 'Congrats no dirty dishes '
  }else{
    for(i=sink.length;i>0;i--){
      dishwasher.push(sink[i]);
      console.log('keep up the good work!')
    }return "you did it, good job"
  }
}