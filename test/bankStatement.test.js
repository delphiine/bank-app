const BankStatement = require('../BankStatement');
const Bank = require('../Bank');

describe('BankStatement', () => {
  it('deposits and withdraws funds, then prints a formatted bank statement', () => {
    const statement = new BankStatement(new Bank());
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2022-08-22'));
    statement.addDeposit(100)
    expect(statement.formatStatements()).toEqual("date || credit || debit || balance\n22/08/2022 || 100 ||  || 0");
  });
});
