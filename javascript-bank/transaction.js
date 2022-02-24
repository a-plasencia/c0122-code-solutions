/* exported Transaction */
/*
Transaction constructor function
input ('string of either deposit or withdrawl', a positive number)
-make a statement checking whether it is a withdrawl or deposit
-assign them to this.type
-check that the amount number is a positive number
-make the amount value be this.amount
*/
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}
