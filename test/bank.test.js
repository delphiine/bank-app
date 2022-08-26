const Bank = require('../bank');

describe('Bank', () => {
  it('deposits funds into account', () => {
    const account = new Bank;
    account.deposit(100);
    expect(account.getBalance()).toEqual(100);
  });

  it('withdraw funds from account', () => {
    const account = new Bank;
    account.withdraw(100);
    expect(account.getBalance()).toEqual(-100);
  });

  it('deposits and withdraws funds', () => {
    const account = new Bank;
    account.deposit(100);
    account.deposit(100);
    account.withdraw(25);
    expect(account.getBalance()).toEqual(175);
  });

  it('returns a formatted bank statement', () => {
    const account = new Bank;
    account.deposit(100);
    account.deposit(100);
    account.withdraw(25);
    expect(account.printStatements()).toEqual(
      "date || credit || debit || balance\n26/08/2022 ||  || 25.00 || 175.00\n26/08/2022 || 100.00 ||  || 200.00\n26/08/2022 || 100.00 ||  || 100.00"
    );
  });
});
