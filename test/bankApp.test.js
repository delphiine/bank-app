const BankApp = require('../bankApp')

describe('bankApp', () => {
  it('test deposit success', () => {
    const app = new BankApp();
    const amount = 152;
    jest.spyOn(app, 'getDeposit').mockImplementation(() => amount);
    jest.spyOn(app, 'run').mockImplementation(() => undefined);
    app.deposit();

    expect(app.bank.getStatements()[0].credit).toEqual(amount);
    expect(app.bank.balance).toEqual(amount);
    expect(app.bank.getStatements()).toHaveLength(1);
  });

  it('test deposit failed due to invalid input', () => {
    const app = new BankApp();
    const amount = "delphine";
    jest.spyOn(app, 'getDeposit').mockImplementation(() => amount);
    jest.spyOn(app, 'run').mockImplementation(() => undefined);
    app.deposit();

    expect(app.bank.getStatements()).toHaveLength(0);
    expect(app.bank.balance).toEqual(0);
  });

  it('test withdraw failed because balance 0', () => {
    const app = new BankApp();
    const amount = 283;
    jest.spyOn(app, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(app, 'run').mockImplementation(() => undefined);
    app.withdraw();

    expect(app.bank.getStatements()).toHaveLength(0);
    expect(app.bank.balance).toEqual(0);
  });

  it('test withdraw success', () => {
    const initialBalance = 300;
    const app = new BankApp(initialBalance);
    const amount = 283;
    jest.spyOn(app, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(app, 'run').mockImplementation(() => undefined);
    app.withdraw();

    expect(app.bank.getStatements()[0].debit).toEqual(amount);
    expect(app.bank.balance).toEqual(initialBalance - amount);
    expect(app.bank.getStatements()).toHaveLength(1);
  });

  it('test withdraw failed due to invalid input', () => {
    const initialBalance = 300;
    const app = new BankApp(initialBalance);
    const amount = "delphine";
    jest.spyOn(app, 'getWithdraw').mockImplementation(() => amount);
    jest.spyOn(app, 'run').mockImplementation(() => undefined);
    app.withdraw();

    expect(app.bank.getStatements()).toHaveLength(0);
    expect(app.bank.balance).toEqual(initialBalance);
  });

  it('run() calls  this.deposit() when a user enters 1', () => {
    const app = new BankApp();
    jest.spyOn(app, "getUserInput").mockImplementation(() => 1);
    const spyDeposit = jest.spyOn(app, "deposit").mockImplementation(() => undefined);
    app.run();

    expect(spyDeposit).toHaveBeenCalled();
  });

  it('run() calls  this.withdraw() when a user enters 2', () => {
    const app = new BankApp();
    jest.spyOn(app, "getUserInput").mockImplementation(() => 2);
    const spyWithdraw = jest.spyOn(app, "withdraw").mockImplementation(() => undefined);
    app.run();

    expect(spyWithdraw).toHaveBeenCalled();
  });

  it("run() calls  this._invalidInputMessage() when a user's input is invald", () => {
    const app = new BankApp();
    jest.spyOn(app, "getUserInput").mockImplementation(() => 4);
    const spyInvalidInputMessage = jest.spyOn(app, "invalidInputMessage").mockImplementation(() => undefined);
    app.run();

    expect(spyInvalidInputMessage).toHaveBeenCalled();
  });
});
