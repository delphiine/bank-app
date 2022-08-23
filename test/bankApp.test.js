const BankApp = require('../bankApp')

describe('bankApp', () => {

  it('test deposit success', () => {
    const bank = new BankApp();
    const amount = 152;
    jest.spyOn(bank, 'getDeposit').mockImplementation(() => amount);
    jest.spyOn(bank, 'run').mockImplementation(() => undefined);
    bank.deposit();

    expect(bank.bank.bankStatements[0].credit).toEqual(amount);
    expect(bank.bank.balance).toEqual(amount);
    expect(bank.bank.bankStatements.length).toEqual(1);
  });

  it('test deposit failed', () => {
    const bank = new BankApp();
    const amount = "delphine";
    jest.spyOn(bank, 'getDeposit').mockImplementation(() => amount);
    jest.spyOn(bank, 'run').mockImplementation(() => undefined);
    bank.deposit();

    expect(bank.bank.bankStatements.length).toEqual(0);
    expect(bank.bank.balance).toEqual(0);
  });

  it('test withdraw failed because balance 0', () => {
    const bank = new BankApp();
    const amount = 283;
    jest.spyOn(bank, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(bank, 'run').mockImplementation(() => undefined);
    bank.withdraw();

    expect(bank.bank.bankStatements.length).toEqual(0);
    expect(bank.bank.balance).toEqual(0);
  });

  it('test withdraw success', () => {
    const initialBalance = 300;
    const bank = new BankApp(initialBalance);
    const amount = 283;
    jest.spyOn(bank, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(bank, 'run').mockImplementation(() => undefined);
    bank.withdraw();

    expect(bank.bank.bankStatements[0].debit).toEqual(amount);
    expect(bank.bank.balance).toEqual(initialBalance - amount);
    expect(bank.bank.bankStatements.length).toEqual(1);
  });

  it('test withdraw failed', () => {
    const initialBalance = 300;
    const bank = new BankApp(initialBalance);
    const amount = "delphine";
    jest.spyOn(bank, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(bank, 'run').mockImplementation(() => undefined);
    bank.withdraw();

    expect(bank.bank.bankStatements.length).toEqual(0);
    expect(bank.bank.balance).toEqual(initialBalance);
  });

  it('run() calls  this.deposit() when user inputs 1', () => {
    const bank = new BankApp();
    jest.spyOn(bank, "getUserInput").mockImplementation(() => 1);
    const spyDeposit = jest.spyOn(bank, "deposit").mockImplementation(() => undefined);
    bank.run();

    expect(spyDeposit).toHaveBeenCalled();
  });

  it('run() calls  this.withdraw() when user inputs 1', () => {
    const bank = new BankApp();
    jest.spyOn(bank, "getUserInput").mockImplementation(() => 2);
    const spyWithdraw = jest.spyOn(bank, "withdraw").mockImplementation(() => undefined);
    bank.run();

    expect(spyWithdraw).toHaveBeenCalled();
  });

  it("run() calls  this._invalidInputMessage() when user's inputs is invald", () => {
    const bank = new BankApp();
    jest.spyOn(bank, "getUserInput").mockImplementation(() => 2);
    const spyWithdraw = jest.spyOn(bank, "withdraw").mockImplementation(() => undefined);
    bank.run();

    expect(spyWithdraw).toHaveBeenCalled();
  });
});