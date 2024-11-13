import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu actuel de la base de données :", ACCOUNT_LIST);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log("Contenu mis à jour de la base de données :", ACCOUNT_LIST);
    }
  },
};