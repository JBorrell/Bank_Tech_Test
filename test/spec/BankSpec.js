describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should start with a balance of 0", function() {
    expect(bank.balance).toEqual(0)
  });

});
