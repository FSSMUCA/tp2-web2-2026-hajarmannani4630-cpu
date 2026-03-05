let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantité = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantité;
console.log(`Sous-total : ${sousTotal} MAD`);

let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0;
console.log(`Réduction : ${reduction} MAD`);

let totalFinal = sousTotal - reduction;
console.log(`Total final : ${totalFinal} MAD`);

let paiementAccepte = soldeCompte >= totalFinal;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

let nouveauSolde;
if (paiementAccepte) {
    nouveauSolde = soldeCompte - totalFinal;
    console.log(`Nouveau solde : ${nouveauSolde} MAD`);
}

console.log("\n=== RÉCAPITULATIF ====");
console.log(`Produit : ${nomProduit}`);
console.log(`Quantité : ${quantité}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAS`);
console.log(`Total : ${totalFinal} MAS`);
console.log(`Statut : ${paiementAccepte ? "Paiement accepté" : "Solde insuffisant"}`);
if (paiementAccepte) {
    console.log(`Solde : ${nouveauSolde} MAD`);
}
console.log("=================================");