import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD:", ACCOUNT_LIST);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ id, lastName, firstName }) => ({
      id,
      lastName,
      firstName,
    }));
  },
  updateAccount(account) {},
  retrieveAccount(id) {},
};