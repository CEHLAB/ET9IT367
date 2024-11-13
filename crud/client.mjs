import { accountService } from "./accountService.mjs";

accountService.addAccount("Chakir", "Chakir");

const accountList = accountService.getAccountList();
console.log(
  "Account list without creation date ( getAccountList Called ):",
  accountList
);

const accountId = accountList[0].id;
accountService.saveAccount(accountId, "Tempest", "Rimuru");

const accountListAfter = accountService.getAccountList();
console.log(
  "Account list after update ( getAccountList Called ):",
  accountListAfter
);

const account = accountService.getAccount(accountId);
console.log("Retrieved account:", account);