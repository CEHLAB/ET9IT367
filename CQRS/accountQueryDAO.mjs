import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return accountSummaryList;
  },
  retrieveAccount(id) {
    const account = accountCache[id]; // Récupérer le compte depuis accountCache
    if (account) {
      return account; // Retourner le compte tel quel
    }
    return null;
  },
  
};
