/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddEven.push('odd');
    } else {
      oddEven.push('even');
    }
  }
  return oddEven;
}

/*
Have a function that assigns all numbers either odd or even.
input: numbers(array) [1,3,4,5,6]
output: say whether each of the numbers are even or odd
[odd,odd,even,odd,even]
-create storage for whether each number is odd(string) or even(string)
look at each number one at a time
Divide each value by two, if it has a % of 1, it is odd.
If it is odd, push the value "odd" in the storage.
Otherwise push the value "even" in the storage.
Once all the numbers have been looked over give back the list
*/
