import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
  },
  retrieveAccount(id) {
    const account = this.fetchAccountById(id);
    if (account) {
      const { lastName, firstName, ...rest } = account;
      return { ...rest, name: `${firstName} ${lastName}` };
    }
    return null;
  },
  fetchAccountById(id) {
    return ACCOUNT_LIST.find((acc) => acc.id === id);
  },
};
