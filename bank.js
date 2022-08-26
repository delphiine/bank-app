const BankStatement = require('./BankStatement') 

class Bank {
  constructor (balance=0.0) {
    this.balance = balance;
    this.bankStatement = new BankStatement(this);
  }

  getStatements() {
    return this.bankStatement.getStatements()
  }

  getBalance () {
    return this.balance;
  }

  deposit (amount) {
    this.balance += amount;
    this.bankStatement.addDeposit(amount);
  }

  withdraw (amount) {
    this.balance -= amount;
    this.bankStatement.addWithdraw(amount);
  }

  printStatements () {
    console.log(this.bankStatement.formatStatements());
    return this.bankStatement.formatStatements();
  }
}

module.exports = Bank;