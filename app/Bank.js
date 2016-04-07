function Bank() {
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.deposit = function (amount) {
  this.balance += amount
  this.transactions.push([this._getDate(), 'DEPOSIT', amount])
};

Bank.prototype.withdraw = function (amount) {
  this.balance -= amount
  this.transactions.push([this._getDate(), 'WITHDRAW', amount])
};


Bank.prototype._getDate = function() {
  var date = new Date().toISOString().substring(0, 10);
  var format = date.split('-').reverse().join('/')
  return format
};
