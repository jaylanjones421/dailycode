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

var str="slug spider rock gravel rock beetle";
var zen = str =>{
  zenStr=str.split(' ');
  for(i=0;i<zenStr.length;i++){
    if(zenStr[i]!=='rock'&&zenStr[i]!=='gravel'){
      zenStr.splice(i,1,'gravel')
    }
  }return zenStr.join(' ');
}
