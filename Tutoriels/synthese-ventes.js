let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

// Initialisation des variables
let somme = 0;
let ventesValidie = 0;
let Exceptionnelle = 0;
let caExceptionnel = 0;
let maximum = ventes[0];
let Minimum = ventes[0];

// Une seule boucle pour calculer tous les résultats
for (let i = 0; i < ventes.length; i++) {

    // Compter le nombre total de ventes
    ventesValidie++;

    // Calculer le chiffre d'affaires total
    somme = somme + ventes[i];

    // Chercher la vente maximale
    if (ventes[i] > maximum) {
        maximum = ventes[i];
    }

    // Chercher la vente minimale
    if (ventes[i] < Minimum) {
        Minimum = ventes[i];
    }

    // Vérifier si la vente est exceptionnelle
    if (ventes[i] >= 130) {
        Exceptionnelle++;

        // Ajouter le montant au CA exceptionnel
        caExceptionnel = caExceptionnel + ventes[i];
    }
}

// Afficher les résultats
console.log("Nombre total de ventes :", ventesValidie);
console.log("CA Total :", somme);
console.log("Maximum :", maximum);
console.log("Minimum :", Minimum);
console.log("Ventes exceptionnelles :", Exceptionnelle);
console.log("CA exceptionnel :", caExceptionnel);
