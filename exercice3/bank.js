const bankDAO = require('./bankDAO');
const bankTransfer =require('./bankTransfer');

function getBalance (accountNumber) {
    return bankDAO.retrieveBalance(accountNumber);
}
async function transferMoney(accountId, amount){
    bankTransfer.transfer(accountId, amount)
    .then(() => {
        bankDAO.debitAccount(accountId, amount);
        console.log(`Transferred ${amount} to account ${accountId}`)
})
    .catch((error) => {
        console.log(error);
});

}
const bank = {
    getBalance,
    transferMoney
};

module.exports = bank;