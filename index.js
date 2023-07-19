alert("Le fichier fonctionne!")

//Ceci est un commentaire

/*Ceci
est
un
commentaire */
 
 console.log("Hello");
 console.log("Hello");
 console.log("Hello");
 console.log("Hello");
 
 
 let variable= "coucou";
 
 console.log(variable);
 
 let maVariableSuperCool= "kamelCase";
 
 console.log(maVariableSuperCool);
 
 
 var unTexte = "Voici un texte";
 
console.log(unTexte);

unTexte = "Nouveau texte...";

console.log(unTexte);


const prenom = "Chadii";

// console.log(prenom);

// prenom = "Luc";


let unChiffre = 24;

unChiffre= 12;

console.log(unChiffre);


let chaine = "Je suis une chaine de caractere";

/*let chaine = "Je suis l'autre chaine de caractere";

let chaine = "Je suis l\'autre chaine de caractere";
*/

let nouvelleChaine = "Chaine precedente : " + chaine;

console.log(nouvelleChaine);

let chiffre = 24;

let uneChaine= "Le chiffre attendu est : " + chiffre + "degres";

console.log(uneChaine);
/*let chiffre = 47;

let uneChaine= 'Le chiffre attendu est : ${chiffre} + degres';

console.log(uneChaine);*/


let string= "Je suis une chaine";
let number= 24;
let boolean= true;
let array= ["je", "suis", 24, false];

let object= {
    prenom: "audrey",
    age: 34,
    ville: "Bordeaux",
};

console.log(typeof string);


let arbre = null;

console.log(arbre);


console.log(4+5);


let total = 0;

++total;
total++;
total++;
total++;
total+= 5;

console.log(total);

let total2 = 2;
let x = 4;

x++;

total= x;

console.log(total);


let a=5;
let b=5;

if (a >= b) {
    console.log("a est inferieur a b");
} else {
    console.log("a est superieur a b");
}


let c=5;
let d=5;

if (!c) {
    console.log("c existe");
}


let e=5;
let f=5;

if (e === f) {
    console.log("True !");
} else {
    console.log("false !");
}

let g=4;
let h="5";

if (g != h || g > 3) {
    console.log("True !");
} else {
    console.log("false !");
}

let i=5;
let j="5";

if (i == j && i > 3 && j < 10) {
    console.log("True !");
} else {
    console.log("false !");
}

let k=5;
let l="5";

if (k === l) {
    console.log("True !");
} else if (k == l){
    console.log("k et l egaux en valeur");
} else {
    console.log("k et l ne sont pas du tout egaux");
}

let m=6;
let n="5";

if (m === n) {
    console.log("True !");
} else if (m == n){
    console.log("m et n egaux en valeur");
} else {
    console.log(m + " et " + n + " ne sont pas du tout egaux");
    console.log('${m} et ${n} ne sont pas du tout egaux');
}


let o = 5;
let p = "5";

if (o === p) {
    console.log("True !");
    console.log("True !");
}


let q = 5;
let r = "5";

if (q == r) console.log("True !");

 q == r ? console.log("True !") : console.log("false");


function faireQuelqueChose() {
    console.log("Je fais un truc !");
    console.log("Trop Cool");
}
faireQuelqueChose();

const faireUneTache = (tache) => {
    console.log("Je fais : " + tache);
};
faireUneTache("les courses");
faireUneTache("le menage");

function calc(s,t) {
  return s + t;
}
calc(4, 9);
