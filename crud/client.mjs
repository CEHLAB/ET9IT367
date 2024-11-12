import { accountService } from "./accountService.mjs";

accountService.addAccount("anonyme1", "anonyme2");

let accountList = accountService.getAccountList();
console.log("Liste des comptes avant modification:", accountList);

if (accountList.length > 0) {
  const { id } = accountList[0];
  accountService.saveAccount(id, "nouveauNom", "nouveauPrenom");

  accountList = accountService.getAccountList();
  console.log("Liste des comptes après modification:", accountList);
} else {
  console.log("Aucun compte disponible pour la modification.");
}
