import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";
import { EventStore } from "./eventStore.mjs";
import { Event } from "./event.mjs";

const eventStore = new EventStore();

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account({ lastName, firstName });
    const { creationDate, ...accountSansDate } = account;
    accountSummaryList.push(accountSansDate);

    accountCache[account.id] = {
      ...accountSansDate,
      name: `${firstName} ${lastName}`,
    };

    const event = new Event("accountAdded", account.id, account);
    eventStore.addEvent(event);
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
      accountCache[account.id] = {
        ...accountSansDate,
        name: `${firstName} ${lastName}`,
      };
    }
  }
};