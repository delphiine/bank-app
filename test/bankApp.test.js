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

  it('test deposit failed due to invalid input', () => {
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

  it('test withdraw failed due to invalid input', () => {
    const initialBalance = 300;
    const bank = new BankApp(initialBalance);
    const amount = "delphine";
    jest.spyOn(bank, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(bank, 'run').mockImplementation(() => undefined);
    bank.withdraw();

    expect(bank.bank.bankStatements.length).toEqual(0);
    expect(bank.bank.balance).toEqual(initialBalance);
  });

  it('run() calls  this.deposit() when a user enters 1', () => {
    const bank = new BankApp();
    jest.spyOn(bank, "getUserInput").mockImplementation(() => 1);
    const spyDeposit = jest.spyOn(bank, "deposit").mockImplementation(() => undefined);
    bank.run();

    expect(spyDeposit).toHaveBeenCalled();
  });

  it('run() calls  this.withdraw() when a user enters 2', () => {
    const bank = new BankApp();
    jest.spyOn(bank, "getUserInput").mockImplementation(() => 2);
    const spyWithdraw = jest.spyOn(bank, "withdraw").mockImplementation(() => undefined);
    bank.run();

    expect(spyWithdraw).toHaveBeenCalled();
  });

  it("run() calls  this._invalidInputMessage() when a user's input is invald", () => {
    const bank = new BankApp();
    jest.spyOn(bank, "getUserInput").mockImplementation(() => 4);
    const spyInvalidInputMessage = jest.spyOn(bank, "_invalidInputMessage").mockImplementation(() => undefined);
    bank.run();

    expect(spyInvalidInputMessage).toHaveBeenCalled();
  });
});
