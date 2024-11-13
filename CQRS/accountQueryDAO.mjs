import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";


export const accountQueryDAO = {
  retrieveAccountList() {
    return accountSummaryList;
  },
  retrieveAccount(id) {
    const account =  ACCOUNT_LIST.find((acc) => acc.id === id);
    if (account) {
      const { lastName, firstName, ...rest } = account;
      return { ...rest, name: `${firstName} ${lastName}` };
    }
    return null;
  },
};
