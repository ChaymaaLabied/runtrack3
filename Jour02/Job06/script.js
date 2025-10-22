(() => {
  // code Konami (touches) : Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const konamiSequence = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  let position = 0;
  let activated = false; // évite de ré-activer plusieurs fois

  function applyTheme() {
    if (activated) return; // on sort de la fct pour ne pas réexécuter la mm chose une 2eme fois
    activated = true;

    // ajouter classe sur body
    document.body.classList.add("body");

    // créer et injecter un panneau informatif
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h1>Bienvenue sur <span class="lp-accent">La Plateforme_</span></h1>
      <p>Tu as trouvé le <strong>Konami</strong> : le site adopte maintenant le style officiel.</p>
      <p>Have fun </p>
      <button class="close">Fermer</button>`
    document.body.appendChild(card);
    // gestion du bouton fermer
    const btnFermer =document.querySelector(".close");
    btnFermer.addEventListener("click", () => {
      const c = document.querySelector(".card");
      if (c) c.remove(); // si la carte est créée alors supprime la en cliquant sur le bnt fermer 
    });
  }

  // écoute clavier
  window.addEventListener("keydown", (e) => {
    // key normalization : on prend la valeur en minuscule pour lettres
    e.key.length === 1 ? e.key.toLowerCase() : e.key; // s'il s'agit d'une lettre hh
    console.log(e.key)
    if (e.key === konamiSequence[position]) {
      position++;
      if (position === konamiSequence.length) {
        applyTheme();
        position = 0; // reset si on veut permettre re-tentatives (mais activated empêche ré-application) mais c une bonne pratique quand mm
      }
    } 
  });
})
();
