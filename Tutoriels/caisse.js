

let panier = [15, 42, 5, 89, 12, 50, 8];

// La somme totale
let somme = 0
for( let i=0 ; i<= panier.length -1 ; i++){
    somme = somme +panier[i]
}
console.log(somme)


// Le nombre d’articles considérés comme “chers” (prix supérieur ou égal à 20).
let preduitchers = 0
for( let i=0 ; i<= panier.length -1 ; i++ ){
    if(panier[i]>=20){
        preduitchers++
    }
}
console.log(preduitchers)


// La somme totale générée uniquement par ces articles chers.
let sommeChers = 0;

for (let i = 0; i < panier.length; i++) {
    if (panier[i] >= 20) {
        sommeChers = sommeChers + panier[i];
    }
}

console.log("Montant des articles chers :", sommeChers);










