/* exported zip */

/*
Create a function that stores the first and second element of each index as a pair
input (array, array) ["name", "course", "grade"] ["Cody", "CSS", 9001]
output (array) ['name', 'course', 'grade'], ['Cody', 'CSS', 9001]
- Create shallow copies of both arrays
- Check if the first arrays length is greater then the second arrays length
- If it is, then assign the first arrays length to the second arrays length
- Created two empty arrays
- Loop through the firsrt arrays length
- Push the first and second arrays element into the first empty array
- Push the element with the arrays elements into the still empty array
- Empty the array with the original array elements
- Return the array with arrays inside it
*/

function zip(first, second) {

  const firstArray = first.concat();
  const secondArray = second.concat();

  if (firstArray.length > secondArray.length) {
    firstArray.length = secondArray.length;
  }

  const zippedArray = [];
  let minizip = [];

  for (let i = 0; i < firstArray.length; i++) {
    minizip.push(first[i], second[i]);
    zippedArray.push(minizip);
    minizip = [];
  }

  return zippedArray;
}
