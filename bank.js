class Bank {
  constructor () {
    this.balance = 0;
    this.date = '';
    this.bankStatements = [];
  }

  _getDate () {
    const date = new Date();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const currentDate = day + '/' + month + '/' + year;
    return this.date = currentDate;
  }

  getBalance () {
    return this.balance;
  }

  deposit (amount) {
   this.balance += amount;
   this._getDate()
   const recipt = { 
    date: this.date, 
    credit: amount, 
    debit: ' ',  
    balance: this.balance
  };
   this.bankStatements.push(recipt);
  }

  withdraw (amount) {
    this.balance -= amount;
    this._getDate();
    const recipt = { 
      date: this.date, 
      credit: ' ', 
      debit: amount,  
      balance: this.balance
    };
    this.bankStatements.push(recipt);
  }

  formatStatements () {
    this.recipt = [];
    for (let i = 0; i < this.bankStatements.length ; i++) {
      let statement = this.bankStatements[i];
      this.recipt.push(`${statement.date} || ${statement.credit} || ${statement.debit} || ${statement.balance}`);
    }
    const header = 'date || credit || debit || balance';
   return `${header}\n${this.recipt.join("\n")}`;
  }

  printStatements () {
    console.log(this.formatStatements());
    return this.formatStatements();
  }
}

module.exports = Bank;
