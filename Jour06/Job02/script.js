// 2eme consigne
const btnPapillon = document.getElementById("btnPapillon");
const modalPapillonEl = document.getElementById("modalPapillon");
const modalPapillon = new bootstrap.Modal(modalPapillonEl);
btnPapillon.addEventListener("click", () => {
  modalPapillon.show();
});
// 3eme consigne
const btnReboot = document.querySelector(".btn-danger");
const jumbotronParagraphs = document.querySelectorAll(".col-12.col-md-6 p");

// Tableau des citations Blade Runner (1979)
const bladeRunnerQuotes = [
  "I've seen things you people wouldn't believe.",
  "All those moments will be lost in time, like tears in rain.",
  "Quite an experience to live in fear, isn't it?",
  "The light that burns twice as bright burns half as long.",
];
btnReboot.addEventListener("click", () => {
  const randomQuote =
    bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
  jumbotronParagraphs[0].textContent = randomQuote;
});
// 4eme consigne
const paginationLinks = document.querySelectorAll(".pagination .page-link");

const originalText = jumbotronParagraphs[0].textContent;

const pageContents = {
  1: originalText,
  2: "Page 2 : voici un contenu alternatif pour la deuxième page.",
  3: "Page 3 : découvrez un autre texte pour la troisième page.",
};
let currentPage = 1;
// Fonction pour mettre à jour le jumbotron
function updateJumbotron(page) {
  if (pageContents[page]) {
    jumbotronParagraphs[0].textContent = pageContents[page];
    currentPage = page;
  }
}
// Événement clic sur chaque lien de pagination
paginationLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.textContent.trim();

    if (text === "«") {
      // flèche Previous
      const prevPage = Math.max(1, currentPage - 1);
      updateJumbotron(prevPage);
    } else if (text === "»") {
      // flèche Next
      const nextPage = Math.min(3, currentPage + 1);
      updateJumbotron(nextPage);
    } else {
      // numéro de page
      const page = parseInt(text);
      updateJumbotron(page);
    }
  });
});
// 5eme consigne
const rightButtons = document.querySelectorAll(
  ".col-12.col-md-3.d-flex.flex-column.gap-2 .btn"
);

// Événement clic sur chaque bouton
rightButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rightButtons.forEach((b) => b.classList.remove("active", "btn-primary"));
    rightButtons.forEach((b) => b.classList.add("btn-outline-primary"));
    btn.classList.add("active", "btn-primary"); // fond bleu Bootstrap
    btn.classList.remove("btn-outline-primary");
  });
});
//6eme consigne

let secretKeys = ["d", "g", "c"];
let currentIndex = 0;

document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === secretKeys[currentIndex]) {
    currentIndex++;
    if (currentIndex === secretKeys.length) {
      showFormModal();
      currentIndex = 0;
    }
  } else {
    currentIndex = 0;
  }
});

function showFormModal() {
  const data = {
    username: document.getElementById("username").value,
    password1: document.getElementById("password1").value,
    dogecoin: document.getElementById("dogecoin").value,
    url: document.getElementById("url").value,
    email: document.getElementById("email").value,
    password2: document.getElementById("password2").value,
    check: document.getElementById("check").checked ? "Oui" : "Non",
  };
  // alors que innerHTML c pas bien ^^ mais j'avais la flemme de tous reecrire
  let html = `
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Mot de passe 1:</strong> ${data.password1}</p>
        <p><strong>DogeCoin:</strong> ${data.dogecoin}</p>
        <p><strong>URL:</strong> ${data.url}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mot de passe 2:</strong> ${data.password2}</p>
        <p><strong>Check me out :</strong> ${data.check}</p>
    `;

  document.getElementById("modalContent").innerHTML = html;
  // 7eme consigne
  let modal = new bootstrap.Modal(document.getElementById("formModal"));
  modal.show();
}
document.getElementById("submitForm").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password2").value.trim();

  if (email !== "" && password !== "") {
    // Liste des couleurs Bootstrap
    const colors = [
      "text-primary",
      "text-danger",
      "text-success",
      "text-warning",
      "text-info",
      "text-dark",
    ];

    const spinner = document.getElementById("mainSpinner");

    // On retire toutes les couleurs possibles d'abord
    colors.forEach((color) => spinner.classList.remove(color));

    // Choix aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // On applique la nouvelle couleur
    spinner.classList.add(randomColor);
  } else {
    alert("Veuillez entrer un email et un mot de passe.");
  }
});
// derniere consigne
// Sélectionner la barre et les boutons
const progressBar = document.getElementById("mainProgress");
const btnMinus = document.getElementById("btn-progress-minus");
const btnPlus = document.getElementById("btn-progress-plus");

// Valeur initiale
let progress = 40; // correspond à width:40%

// Fonction pour mettre à jour la barre
function updateProgress() {
  progressBar.style.width = progress + "%";
  progressBar.setAttribute("aria-valuenow", progress);
  progressBar.textContent = progress + "%"; // affiche le pourcentage
}

// Clic sur "−" pour diminuer
btnMinus.addEventListener("click", () => {
  progress = Math.max(0, progress - 5); // pas en dessous de 0
  updateProgress();
});

// Clic sur "+" pour augmenter
btnPlus.addEventListener("click", () => {
  progress = Math.min(100, progress + 5); // pas au-dessus de 100
  updateProgress();
});
