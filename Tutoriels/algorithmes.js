

let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

// maximum
let maximum = nombres[0]
let position = -1

for(let i = 1 ; i<nombres.length ; i++){
    if(nombres[i] > maximum){
         maximum = nombres[i];
        position = i
    }
}
console.log("Maximum : ",maximum ,"Index : ",position)

// Minimum
let Minimum = nombres[0]
let position1 = -1

for(let i = 1 ; i<nombres.length ; i++){
    if(nombres[i] < Minimum ){
        Minimum = nombres[i];
        position1 = i
    }
}
console.log("Minimum : ",Minimum ,"Index : ",position)

// recherche un nombres
let recherche = 31 ;
for( let i=0 ; i<= nombres.length - 1 ; i++){
    if(recherche == nombres[i])
        console.log("La valeur ",recherche," est présente dans le tableau.")
}
