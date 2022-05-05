/* exported zip */

function zip(first, second) {

  const zippedArray = [];
  const minizip = [];
  for (let i = 0; i < first.length; i++) {
    minizip.push(first[i]);
    minizip.push(second[i]);
    zippedArray.push(minizip);
  }
  // console.log(zippedArray);
  // console.log(minizip);

  return zippedArray;
}
