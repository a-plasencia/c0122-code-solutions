/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) === true && balance > 0) {
    var openBalance = new Account(this.nextAccountNumber, holder);
    openBalance.deposit(balance);
    this.accounts.push(openBalance);
    this.nextAccountNumber++;
    return openBalance.number;
  } else { return null; }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    for (var j = 0; j < this.accounts[i].transactions.length; j++) {
      if (this.accounts[i].transactions[j].type === 'deposit') {
        grandTotal = grandTotal + this.accounts[i].transactions[j].amount;
      } else {
        grandTotal = grandTotal - this.accounts[i].transactions[j].amount;
      }
    }
  }
  return grandTotal;
};
