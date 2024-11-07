// bank.js
const bankDAO = require('./bankDAO');

const bank = {
    getBalance: function() {
        bankDAO.retrieveBalance();
    }
};

module.exports = bank;
