const BankApp = require('../app')
const rl = readline.createInterface(process.stdin);

describe('bankApp', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('getUserInput() prompets user for input', () => {
    const bank = new BankApp;
    bank.getUserInput();
    const stub = sinon.stub(rl, "Options:\n1. Deposit\n2. Withdraw\n3. Print Statement and Exit");
    stub.callsFake(() => stub.yield("1"));
    sinon.stub(readline, "createInterface").returns(rl);
    expect(stub.calledWith("", sinon.match.any)).to.be.true;
  });

  // it('input recieved inside getUserInput() has to be number 1, 2 or 3', () => {

  // });

  // it('deposts funds', () => {

  // });

  // it('withdraws funds', () => {

  // });

  // it('prints the bank statement', () => {

  // });

  // it("user cannot withdraw money if there isn't enough funds in the account", () => {

  // });

  // it("user cannot withdraw money if the amount contains characters other than numbers", () => {

  // });

  // it("user cannot diposit money if the amount contains characters other than numbers", () => {
    
  // });
});