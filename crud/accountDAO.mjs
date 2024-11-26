import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {

  insertAccount(account) {
    //COMMAND
    ACCOUNT_LIST.push(account);
    console.log("Current database content:", ACCOUNT_LIST);
  },
  retrieveAccountList() {
    //QUERY
    return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
  },
  updateAccount(account) {
    //COMMAND
    const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log("Updated database content:", ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {
    //QUERY
    const account = this.fetchAccountById(id);
    if (account) {
      const { lastName, firstName, ...rest } = account;
      return { ...rest, name: `${firstName} ${lastName}` };
    }
    return null;
  },
  fetchAccountById(id) {
    //QUERY
    return ACCOUNT_LIST.find((acc) => acc.id === id);
  },
};