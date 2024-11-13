import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountQueryDAO } from "./accountQueryDAO.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account({ lastName, firstName });
    accountCommandDAO.insertAccount(account);
  },
  saveAccount(id, lastName, firstName) {
    const account = accountQueryDAO.fetchAccountById(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountCommandDAO.updateAccount(account);
    }
  },
};
