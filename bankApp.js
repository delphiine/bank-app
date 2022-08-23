const prompt = require('prompt-sync')({ sigint: true })
const Bank = require('./bank')

class BankApp {
  constructor (balance=0) {
    this.bank = new Bank(balance);
  }

  _invalidInputMessage () {
    console.log('You have entered an invalid input!\nPlease try again');
    this.run();
  }

  getUserInput () {
    console.log('Options:\n1. Deposit\n2. Withdraw\n3. Print Statement and Exit');
    return prompt('Select an option? ');
  }

  getDeposit () {
    return prompt('Enter the amount you would like deposit: ');
  }

  deposit () {
    const amount = this.getDeposit()
    if (isNaN(amount) == false) {
      this.bank.deposit(parseInt(amount));
      console.log(`£${amount} was added to your account`);
      this.run();
    } else {
      this._invalidInputMessage();
    };
  }

  getWithdraw () {
    return prompt('Enter the amount you would like withdraw: ');
  }

  withdraw () {
    const amount = this.getWithdraw();
    if (isNaN(amount) == true) {
      this._invalidInputMessage();
    } else if (this.bank.getBalance() < amount) {
      console.log('Insufficient funds!\nTry a different option');
      this.run();
    } else {
      this.bank.withdraw(parseInt(amount));
      console.log(`£${amount} was withdrawn from your account`);
      this.run();
    };
  }

  run () {
    let action = this.getUserInput();
    if (action == 1) {
      this.deposit();
    } else if (action == 2) {
      this.withdraw();
    } else if (action == 3) {
      return this.bank.printStatements();
    } else {
      this._invalidInputMessage();
    };
  }
}

module.exports = BankApp;
