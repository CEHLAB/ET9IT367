
function transfer(accountId, amount) {
    console.log(`Transferred ${amount} to account ${accountId}`);
}

const bankTransfer = {
    transfer
};

module.exports = bankTransfer;