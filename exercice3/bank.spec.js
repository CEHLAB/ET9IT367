
const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');
const bank = require('./bank');


test('RetrieveBalance is called but not executed', () => {
    const accountId = '12345';
    const expectedBalance = 1000;
    const spy = jest.spyOn(bankDAO, 'retrieveBalance');
    spy.mockReturnValue(expectedBalance);

    const balance = bank.getBalance(accountId);
    
    expect(spy).toHaveBeenCalled();
    expect(balance).toBe(expectedBalance);
    
});
test ('Should transmit paramater accountID',() =>{
    const accountId = '12345';
    const spy = jest.spyOn(bankDAO, 'retrieveBalance');
    spy.mockReturnValue(null);
    bank.getBalance(accountId);
    expect(spy).toHaveBeenCalledWith(accountId);
});
test('Transfer is executed correctly', async() => {
    
    const accountId = '12345';
    const amount = 1000;
    jest.spyOn(bankDAO, 'debitAccount').mockReturnValue(null);
    jest.spyOn(bankTransfer, 'transfer').mockResolvedValue(null);

    await bank.transferMoney(accountId, amount);
    
    expect(bankDAO.debitAccount).toHaveBeenCalledWith(accountId, amount);
    expect(bankTransfer.transfer).toHaveBeenCalledWith(accountId, amount);
    
    bankDAO.debitAccount.mockRestore();
});
test('Transfer is not executed',async () => {
    const accountId = '12345';
    const amount = 1000;
    
    jest.spyOn(bankTransfer, 'transfer').mockRejectedValue(new Error('Transfer failed'));
    jest.spyOn(bankDAO, 'debitAccount').mockReturnValue(null);

    await bank.transferMoney(accountId, amount);

    expect(bankTransfer.transfer).toHaveBeenCalled();
    expect(bankDAO.debitAccount).not.toHaveBeenCalled();
});