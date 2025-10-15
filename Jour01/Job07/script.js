// la déclaration de la fct jourtravaille

function jourtravaille(date) {
  const joursFeries2020 = [
    "1-1", "4-13", "5-1", "5-8", "5-21", "6-1",
    "7-14", "8-15", "11-1", "11-11", "12-25"
  ];

  const jour = date.getDate(); // ex: 15
  const mois = date.getMonth() + 1; // ex : le mois 9+1 =10 octobre
  const annee = date.getFullYear(); // dans notre cas c 2020
  const jourSemaine = date.getDay(); // les jrs de la semaine de 0 dimanche a samedi 6 

  const estFerie = joursFeries2020.includes(`${mois}-${jour}`);

  if (annee !== 2020) {
    alert(`Cette fonction ne gère que l'année 2020.`);
  } else if (estFerie) {
   alert(`Le ${jour}/${mois}/${annee} est un jour férié.`);
  } else if (jourSemaine === 0 || jourSemaine === 6) {
    alert(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
  } else {
    alert(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
  }
}
// l'appel e la fct en traitant ce que l'utilisateur a saisie 
let saisie = prompt("Entrez une date au format JJ/MM/AAAA :");

if (saisie) {
  const [jour, mois, annee] = saisie.split("/").map(Number);
  const date = new Date(annee, mois - 1, jour);

  jourtravaille(date);
} else {
  alert("Aucune date saisie !");
}
