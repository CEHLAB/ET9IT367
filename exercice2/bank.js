// bank.js
const bankDAO = require('./bankDAO');

const bank = {
    getBalance: function(accountId) {
        bankDAO.retrieveBalance(accountId);
    }
};

module.exports = bank;
