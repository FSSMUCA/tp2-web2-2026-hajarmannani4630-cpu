let nom = " Fatima ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

let ageConverti = Number(age);
let ageValide = !isNaN(ageConverti) && ageConverti > 0;

let emailValide = email.includes("@") && email.indexOf(".") > email.indexOf("@") + 1;

let scoreExtraire = parseInt(scoreJeu);
if (isNaN(scoreExtraire)) scoreExtraire = 0;

let estAdminBool = estAdmin === "true";

let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté";

let nombreConnexionsConverti = Number(nombreConnexions);
let nombreConnexionsAffiche = nombreConnexionsConverti === 0 ? "Aucune connexion" : nombreConnexionsConverti;

console.log("=== RAPPORT UTILISATEUR ====");
console.log(`nom : "${nomCorrige}" (corrigé : espaces supprimés)`);
if (ageValide) {
    console.log(`age : ${ageConverti} (valide)`);
} else {
    console.log(`age : invalide`);
}
if (emailValide) {
    console.log(`email : "${email}" (valide)`);
} else {
    console.log(`email : "${email}" (invalide : pas de point après @)`);
}
console.log(`scoreJeu : ${scoreExtraire} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin : ${estAdminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion : "${derniereConnexionCorrige}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nombreConnexionsAffiche}" (${nombreConnexionsConverti} après conversion)`);
console.log("===============================================");