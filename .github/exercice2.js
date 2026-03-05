let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let valeur = valeurs[i];
    let valeurString = String(valeur);
    
    if (valeurString === "") {
        valeurString = "(chaîne vide)";
    }
    
    let truthyFalsy = valeur ? "truthy" : "falsy";
    
    console.log(`${valeurString} -> ${truthyFalsy}`);
}