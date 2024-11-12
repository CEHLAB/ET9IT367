// accountService.mjs
import { accountDAO } from './accountDAO.mjs';
import { Account } from './account.mjs';

export const accountService = {
    addAccount(lastName, firstName) {
        const newAccount = new Account(lastName, firstName);
        accountDAO.insertAccount(newAccount);
    },

    getAccountList() {
        return accountDAO.retrieveAccountList();
    },

    saveAccount(id, lastName, firstName) {
        const account = accountDAO.retrieveAccount(id);
        if (account) {
            account.lastName = lastName;
            account.firstName = firstName;

            accountDAO.updateAccount(account);
        } else {
            console.log(`Account with id ${id} not found.`);
        }
    },

    getAccount(id) {
        return accountDAO.retrieveAccount(id);
    },
};
