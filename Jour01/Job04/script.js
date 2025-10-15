function bisextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}


let saisie = prompt("Entrez une année :");

let annee = parseInt(saisie);

if (isNaN(annee)) {
  alert("Veuillez entrer une année valide !");
} else {
  if (bisextile(annee)) {
    alert(annee + " est une année bissextile ");
  } else {
    alert(annee + " n'est pas une année bissextile ");
  }
}
