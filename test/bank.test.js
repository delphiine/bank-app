const Bank = require('../bank')

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

    account.deposit(100)
    account.deposit(100)
    account.withdraw(25)

    expect(account.getBalance()).toEqual(175)
  });

  it('deposits funds and prints a formatted bank statement', () => {
    const account = new Bank;
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => Date.parse('22/08/2022'));

    account.deposit(100)
    expect(account.printStatements()).toEqual('date || credit || debit || balance\n22/08/2022 || 100 ||   || 100')
  })
}); 