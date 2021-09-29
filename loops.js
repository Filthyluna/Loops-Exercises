//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
for (let i = 0; i < 10; i++){
  console.log(i * 9)
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let i = 0
while (i < 50) {
  i += 5;
  console.log(i);
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function duplicate(num){
  let duplicate;
  //Regular nested loop
  /*for (let i = 0; i < num.length; i++){
    for (let j = i+1; j < num.length; j++){
      if (num[i] === num[j]) {
        duplicate = num[i];
      }
    }
  }*/

  //Nested loop backwards
  for (let i = 0; i < num.length; i++){
    for (let j = i - 1; j >= 0; j--){
      if (num[i] === num[j]) {
        duplicate = num[i];
      }
    }
  }
  return duplicate;
}
console.log(duplicate([2, 7, 5, 9, 8, 7]));

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade(num) {
  switch (true) {
    case num >= 90:
      return "A";
    case num <= 89 && num >= 80:
      return "B";
    case num <= 79 && num >= 70:
      return "C";
    case num <= 69 && num >= 60:
      return "D";
    case num < 60:
      return "F";
  }
}

/*for (let i = 60; i < 101; i++){
  console.log(`For ${i}, you got ${assignGrade(i)}`);
}*/
