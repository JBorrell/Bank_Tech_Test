describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should start with a balance of 0", function() {
    expect(bank.balance).toEqual(0);
  });

  describe("Depositing Money", function(){
    it("balance should increase by 10", function(){
      bank.deposit(10);
      expect(bank.balance).toEqual(10);
    });
  });

  describe("Withdrawing Money", function(){
    beforeEach(function(){
      bank.deposit(10);
    });
    it("balance should decrease by 5", function(){
      bank.withdraw(5);
      expect(bank.balance).toEqual(5);
    });
  });

  describe("Transaction", function(){
    it("records date of transaction", function(){
      bank.deposit(10);
      expect(bank.transactions[0][0]).toEqual("07/04/2016");
    });
    it("shows type of transaction", function(){
      bank.deposit(4);
      bank.withdraw(3);
      expect(bank.transactions[0][1]).toEqual("DEPOSIT");
      expect(bank.transactions[1][1]).toEqual("WITHDRAW");
    })
    it("shows remaining balance", function(){
      bank.deposit(8);
      expect(bank.transactions[0][3]).toEqual(8);
    })
  });

});
