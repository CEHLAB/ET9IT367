import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";


export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account({ lastName, firstName });
    accountCommandDAO.insertAccount(account);
    const { creationDate, ...accountSansDate } = account;
    accountSummaryList.push(accountSansDate);
  },
  saveAccount(id, lastName, firstName) {
    const account = accountCommandDAO.fetchAccountById(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountCommandDAO.updateAccount(account);

      const { creationDate, ...accountSansDate } = account;

      const index = accountSummaryList.findIndex(a => a.id === id);
      if (index !== -1) {
        accountSummaryList[index] = accountSansDate;
      }
    }
  },
};
