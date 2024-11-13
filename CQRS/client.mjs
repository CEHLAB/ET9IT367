import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

accountCommand.addAccount("Chakir", "Chakir2");

const accountList = accountQuery.getAccountList();
console.log(
  "Account list without creation date ( getAccountList Called ):",
  accountList
);

const accountId = accountList[0].id;
accountCommand.saveAccount(accountId, "Wassim", "Wassim2");

const accountListAfter = accountQuery.getAccountList();
console.log(
  "Account list after update ( getAccountList Called ):",
  accountListAfter
);

const account = accountQuery.getAccount(accountId);
console.log("Retrieved account:", account);