let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("Partie A - Opérateur ??");
console.log(`nom ?? "valeur par défaut" -> ${nom ?? "valeur par défaut"}`);
console.log(`age ?? "valeur par défaut" -> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut" -> ${ville ?? "valeur par défaut"}`);
console.log(`score ?? "valeur par défaut" -> ${score ?? "valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut" -> ${actif ?? "valeur par défaut"}`);

console.log("\nPartie B - Opérateur ||");
console.log(`nom || "valeur par défaut" -> ${nom || "valeur par défaut"}`);
console.log(`age || "valeur par défaut" -> ${age || "valeur par défaut"}`);
console.log(`ville || "valeur par défaut" -> ${ville || "valeur par défaut"}`);
console.log(`score || "valeur par défaut" -> ${score || "valeur par défaut"}`);
console.log(`actif || "valeur par défaut" -> ${actif || "valeur par défaut"}`);

console.log("\nPartie C - Comparaison ?? et ||");
const compare = (valeur, nomVar) => {
    const resultatNullish = valeur ?? "valeur par défaut";
    const resultatOr = valeur || "valeur par défaut";
    const memeResultat = resultatNullish === resultatOr ? "même résultat" : "résultat différent";
    console.log(`${nomVar} : ?? et || -> ${memeResultat}`);
};

compare(nom, "nom");
compare(age, "age");
compare(ville, "ville");
compare(score, "score");
compare(actif, "actif");