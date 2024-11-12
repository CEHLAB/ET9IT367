import { accountService } from "./accountService.mjs";

accountService.addAccount("anonyme1", "anonyme2");

const accountList = accountService.getAccountList();
console.log("Liste des comptes:", accountList);