class Bank {
  constructor () {
    this.balance = 0;
    this.date = this._getDate();
    this.bankStatements = [];
  }

  _getDate () {
    const date = new Date();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const currentDate = day + '/' + month + '/' + year;
    return currentDate;
  }

  getBalance () {
    return this.balance;
  }

  deposit (amount) {
    this.balance += amount;
    this.date = this._getDate();
    const receipt = {
      date: this.date,
      credit: amount,
      debit: '',
      balance: this.balance
    };
    this.bankStatements.push(receipt);
  }

  withdraw (amount) {
    this.balance -= amount;
    this.date = this._getDate();
    const receipt = {
      date: this.date,
      credit: '',
      debit: amount,
      balance: this.balance
    };
    this.bankStatements.push(receipt);
  }

  formatStatements () {
    const receipt = [];
    for (let i = 0; i < this.bankStatements.length; i++) {
      const statement = this.bankStatements[i];
      receipt.push(`${statement.date} || ${statement.credit} || ${statement.debit} || ${statement.balance}`);
    }
    receipt.reverse()
    const header = 'date || credit || debit || balance';
    return `${header}\n${receipt.join('\n')}`;
  }

  printStatements () {
    console.log(this.formatStatements());
    return this.formatStatements();
  }
}

module.exports = Bank;
