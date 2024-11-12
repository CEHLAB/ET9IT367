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
    saveAccount(id, lastName, firstName) {},
    getAccount(id) {},
};