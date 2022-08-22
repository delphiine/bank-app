const Bank = require('../bank')

describe('Bank', () => {
  it('deposits funds into account', () => {
    const account = new Bank;
    account.deposit(100)
    expect(account.getBalance()).toEqual(100)
  });

  it('withdraw funds from account', () => {
    const account = new Bank;
    account.withdraw(100)
    expect(account.getBalance()).toEqual(-100)
  });
}); 