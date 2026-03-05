const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    ["\t\n", 0]
];

let compteur = 0;

paires.forEach(([a, b]) => {
    const resultatEgal = (a == b) ? "true" : "false";
    const resultatStrict = (a === b) ? "true" : "false";
    
    console.log(`${a} == ${b} -> ${resultatEgal} | ${a} === ${b} -> ${resultatStrict}`);
    
    if ((a == b) !== (a === b)) {
        compteur++;
    }
});

console.log("---");
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);