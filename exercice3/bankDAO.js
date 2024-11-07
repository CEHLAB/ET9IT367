function retrieveBalance(accountNumber) {
    console.log("Rerieve balance: ", accountNumber);
    return 1000;
}
function debitAccount(accountId, amount) {
    console.log(`Debited ${amount} from account ${accountId}`);
}
const bankDAO = {
    retrieveBalance,
    debitAccount
};

module.exports = bankDAO;