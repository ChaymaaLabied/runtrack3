function addOne() {
  const compteur = document.getElementById("compteur");
  compteur.textContent = Number(compteur.textContent) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.getElementById("button");
  bouton.addEventListener("click", addOne);
});
