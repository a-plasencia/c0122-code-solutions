
// function getRangeReport(start, end) {
//   var startLoop = start;
//   var rangeTotal = 0;
//   var rangeAverage = 0;
//   var oddNumbers = [];
//   var evenNumbers = [];
//   var rangeNumbers = [];

//   for (startLoop; startLoop <= end; startLoop++) {
//     rangeTotal = rangeTotal + startLoop;
//     rangeNumbers.push(startLoop);
//     if (startLoop % 2 === 0) {
//       evenNumbers.push(startLoop);
//     }
//     if (startLoop % 2 === 1) {
//       oddNumbers.push(startLoop);
//     }
//     rangeAverage++;
//   }
//   rangeAverage = rangeTotal / rangeAverage;
//   var rangeReport = {
//     total: rangeTotal,
//     odds: oddNumbers,
//     evens: evenNumbers,
//     range: rangeNumbers,
//     average: rangeAverage
//   };
//   return rangeReport;
// }
