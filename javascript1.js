Solution:

function findMissingLetter(array)
{
  for(i=1;i<array.length;i++){
    first = array[i-1];
    second = array[i];
    if(first.charCodeAt(0) + 1 !== second.charCodeAt(0))
      return String.fromCharCode(first.charCodeAt(0) + 1);      
  }
}


Test Results:
 KataTests
 exampleTests (2 of 2 Assertions)
 randomTest (30 of 30 Assertions)
Completed in 12ms
You have passed all of the tests! :)