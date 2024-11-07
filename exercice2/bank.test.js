// bank.test.js
const bankDAO = require('./bankDAO');
const bank = require('./bank');

jest.mock('./bankDAO', () => ({
    retrieveBalance: jest.fn()
}));

test('should call retrieveBalance without executing it', () => {
    bank.getBalance();
    expect(bankDAO.retrieveBalance).toHaveBeenCalled();
});
test('should call retrieveBalance with the correct parameter', () => {
    const accountId = 123;
    bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
});
test('should return the balance from retrieveBalance', () => {
    const accountId = 123;
    bankDAO.retrieveBalance.mockReturnValue(1000);
    const balance = bank.getBalance(accountId);
    expect(balance).toBe(1000);
});

