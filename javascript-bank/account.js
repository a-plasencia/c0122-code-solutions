/* exported Account */
/*
assign the value of the number parameter to a new property named number on this object
assign the value of the holder parameter to a new property named holder on this object

*/
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var sumOfDeposit = 0;
  var sumOfWithdrawal = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      sumOfDeposit = sumOfDeposit + this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      sumOfWithdrawal = sumOfWithdrawal + this.transactions[i].amount;
    }
  }
  var balance = sumOfDeposit - sumOfWithdrawal;
  return balance;
};
