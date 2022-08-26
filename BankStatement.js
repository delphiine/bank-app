class BankStatement {
  constructor (bank) {
    this.date = this.getDate();
    this.statements = [];
    this.bank = bank
  }

  getStatements() {
    return this.statements
  }

  getDate () {
    const date = new Date();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const currentDate = day + '/' + month + '/' + year;
    return currentDate;
  }

  addDeposit (amount) {
    this.date = this.getDate();
    const receipt = {
      date: this.date,
      credit: amount,
      debit: '',
      balance: this.bank.getBalance()
    };
    this.statements.push(receipt);
  }

  addWithdraw (amount) {
    this.date = this.getDate();
    const receipt = {
      date: this.date,
      credit: '',
      debit: amount,
      balance: this.bank.getBalance()
    };
    this.statements.push(receipt);
  }

  formatStatements () {
    const receipt = [];
    for (let i = 0; i < this.statements.length; i++) {
      const statement = this.statements[i];
      receipt.push(`${statement.date} || ${statement.credit} || ${statement.debit} || ${statement.balance}`);
    }
    receipt.reverse()
    const header = 'date || credit || debit || balance';
    return `${header}\n${receipt.join('\n')}`;
  }
}

module.exports = BankStatement;
