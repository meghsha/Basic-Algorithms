// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  convertCtoF(30);
  
  // Reverse a String
  function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  reverseString("Greetings from Earth")
  
  //Factorialize a Number
  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  factorialize(5);
  
  //Find the Longest Word in a String
  function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  //Return Largest Numbers in Arrays
  function largestOfFour(arr) {
    let newArr = []
    for(let i=0; i<arr.length; i++){
      let largestNumber = arr[i][0];
      for(let j=1; j<arr[i].length; j++){
        if(arr[i][j]>largestNumber){
          largestNumber = arr[i][j];
        }
      }
      newArr.push(largestNumber);
    }
    return newArr;
  }
  largestOfFour([[4, 5, 1, 1000], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  //Confirm the Ending
  function confirmEnding(str, target) {
    let stringLength = str.length;
    let targetLength = target.length;
    let newStr = str.slice(stringLength - targetLength)
    // console.log(newStr)
    if(newStr === target){
      return true
    } else return false; 
  }
  confirmEnding("Bastian", "n");
  
  //Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    let newStr = '';
    if(num<=0){
      return newStr
    } else {
      for(let i=1; i<=num; i++){
        newStr += str;
      }
    }
    return newStr;
  }
  repeatStringNumTimes("abc", 3);
  
  //Truncate a String
  function truncateString(str, num) {
    if(num<str.length){
      return str.slice(0, num) + '...'
    }
    return str;
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
  //Finders Keepers
  function findElement(arr, func) {
    let num = arr.filter(value => func(value)==true);
    if(num[0] != undefined){
      return num[0];
    } else {
      return undefined;
    }
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  
  //Boolean who
  function booWho(bool) {
    if(typeof bool === 'boolean'){
      return true;
    } else{
      return false;
    }
  }
  booWho(null);
  
  //Title Case a Sentence
  function titleCase(str) {
    str = str.toLowerCase();
    // console.log(str)
    let newArr = str.split(" ")
    let newArray = [];
    // console.log(newArr)
    for(let i=0; i<newArr.length; i++){
      newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase();
      newArray.push(newArr[i])
    }
    // console.log(newArray.join(" "))
    return newArray.join(" ")
  }
  titleCase("I'm a little tea pot");
  
  //Slice and Splice
  function frankenSplice(arr1, arr2, n) {
    let Array2 = arr2.slice();
    Array2.splice(n, 0, ...arr1);
    return Array2;
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
  //Falsy Bouncer
  function bouncer(arr) {
    let newArr = [];
    newArr = arr.filter(item => item)
    return newArr;
  }
  bouncer([7, "ate", "", false, 9]);
  
  //Where do I Belong
  function getIndexToIns(arr, num) {
    let newArr = arr.sort(function(a, b){
      return a-b;
    })
    console.log(newArr)
    for(let i=0; i< newArr.length; i++){
      if(newArr[i]>=num){
        return i;
      }
    }
    return arr.length;
  }
  getIndexToIns([40, 60, 3, 33], 50);
  
  //Mutations
  function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for(let i=0; i<test.length; i++){
      if(target.indexOf(test[i])<0){
        return false;
      } 
    }
    return true;
  }
  mutation(["hello", "hey"]);
  
  //Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    // let newArr = [...arr];
    let Array = [];
    for(let i=0; i<arr.length; i+=size){
      Array.push(arr.slice(i, i+size));
    }
    return Array;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);