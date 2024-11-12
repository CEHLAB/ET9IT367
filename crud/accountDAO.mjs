// accountDAO.mjs
import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD:", ACCOUNT_LIST);
  },

  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...accountData }) => ({
      ...accountData,
    }));
  },

  updateAccount(updatedAccount) {
    const index = ACCOUNT_LIST.findIndex(account => account.id === updatedAccount.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = updatedAccount;
      console.log("Contenu de la BDD après mise à jour:", ACCOUNT_LIST);
    } else {
      console.log(`Account with id ${updatedAccount.id} not found in database.`);
    }
  },

  retrieveAccount(id) {
    return ACCOUNT_LIST.find(account => account.id === id);
  },
};
