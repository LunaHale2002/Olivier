// let valeurage = prompt("Entrez votre age");
// console.log(valeurage);

// if(valeurage <= 6 || valeurage <= 7) {
//         alert('Poussin');
// }
//     else if (valeurage ===8 || valeurage <=9){
//         alert('Pupille');
// }
//      else if (valeurage ===10 || valeurage <=11){
//     alert('Minime');
// }
//      else if (valeurage >=12){
//     alert('Cadet');
// }

// Correction du prof
// if(valeurage >= 12) {
//     alert('Poussin');
// }
// else if (valeurage >=10){
//     alert('Pupille');
// }
//  else if (valeurage >=8){
// alert('Minime');
// }
//  else if (valeurage >=6){
// alert('Cadet');
// }

// let nom1 = prompt("Donnez trois noms", "Mickael");
// let nom2 = prompt("Donnez trois noms", "Chloé");
// let nom3 = prompt("Donnez trois noms", "Laura");

// if(nom1 < nom2 && nom2 < nom3) {
//     alert('Les noms sont classés');
// } else {
//     alert('Les noms ne sont pas classés');
// }

// let heures = prompt("Donnez moi l'heure");
// let minutes = prompt("Donnez moi les minutes");
// let secondes = prompt("Donnez moi des secondes")

// if(secondes == 59){
//     secondes = "00";
// } else {
//     secondes++
// }

// if(minutes == 59){
//     heures++;
//     minutes = "00";
// } else {
//     minutes++;
// }

// alert(`dans 1 minute, il sera ${heures}:${minutes}H`);

// let n = prompt("Donnez moi le nombre de photocopies")

// if (n <= 10){
//     p = n * 0.1
// } else if (n <= 30){
//     p = 10 * 0.1 + (n - 10) * 0.09
// } else {
//     p = 10 * 0.1 + 20 * 0.09 + (n - 30) * 0.08
// }

// alert (`Vous allez payer :`+p )

// let age = prompt("Donnez moi l'age")
// let sexe = prompt ("Donnez moi le sexe du Zorglubien")

// let nb1 = prompt("Donnez moi le pourcentage du 1er candidat")
// let nb2 = prompt("Donnez moi le pourcentage du 2ème candidat")
// let nb3 = prompt("Donnez moi le pourcentage du 3ème candidat")
// let nb4 = prompt("Donnez moi le pourcentage du 4ème candidat")

// if (nb1 = A > 50){
//     alert("Élu au premier tour")
// } else if (nb2 = B > 50 || C > 50 || D > 50) {
//     console.log("Eliminé");
// } else if(nb3 = A >= B && A >= C && A >= D){
//     console.log("Ballotage favorable");
// } else if (nb4 = A >= 12.5) {
//     console.log("Ballotage défavorable")
// }

let jour = prompt("Entrez le jour")
let mois = prompt("Entrez le mois")
let année = prompt("Entrez le année")

let J = Boolean("La date est valide")
let PV = Boolean("La date n'est pas valide")

if (PV) {
    if (M === 2 && B) {
      JMax = 29;
    } else if (M === 2) {
      JMax = 28;
    } else if (M === 4 || M === 6 || M === 9 || M === 11) {
      JMax = 30;
    } else {
      JMax = 31;
    }
}

J = jour >= 1 && jour <= Jmax;

if (M < 1 || M > 12) {
  console.log("Date Invalide");
} else if (M === 2) {
  if (année % 400 === 0) {
    if (jour < 1 || jour > 29) {
      console.log("Date Invalide");
    } else {
      console.log("Date Valide");
    }
  } else if (année % 100 === 0) {
    if (jour < 1 || jour > 28) {
      console.log("Date Invalide");
    } else {
      console.log("Date Valide");
    }
  } else if (année % 4 === 0) {
    if (jour < 1 || jour > 29) {
      console.log("Date Invalide");
    } else {
      console.log("Date Valide");
    }
  } else {
    if (jour < 1 || jour > 28) {
      console.log("Date Invalide");
    } else {
      console.log("Date Valide");
    }
  }
} else if (M === 4 || M === 6 || M === 9 || M === 11) {
  if (jour < 1 || jour > 30) {
    console.log("Date Invalide");
  } else {
    console.log("Date Valide");
  }
} else {
  if (jour < 1 || jour > 31) {
    console.log("Date Invalide");
  } else {
    console.log("Date Valide");
  }
}
