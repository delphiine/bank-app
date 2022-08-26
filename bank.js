const BankStatement = require('./BankStatement') 

class Bank {
  constructor (balance=0) {
    this.balance = balance;
    this.statement = new BankStatement(this);
  }

  getBalance () {
    return this.balance;
  }

  deposit (amount) {
    this.balance += amount;
    this.statement.formatDeposit(amount);
  }

  withdraw (amount) {
    this.balance -= amount;
    this.statement.formatWithdraw(amount);
  }

  printStatements () {
    console.log(this.statement.formatStatements());
    return this.statement.formatStatements();
  }
}

module.exports = Bank;
