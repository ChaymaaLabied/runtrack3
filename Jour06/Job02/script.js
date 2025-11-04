// 2ème consigne : Modal Papillon
const btnPapillon = document.getElementById("btnPapillon");
const modalPapillonEl = document.getElementById("modalPapillon");
const modalPapillon = new bootstrap.Modal(modalPapillonEl);

btnPapillon.addEventListener("click", () => {
  modalPapillon.show();
});

// 3ème consigne : Rebooter le monde avec Blade Runner
const btnReboot = document.querySelector(".btn-danger");
const jumbotronParagraphs = document.querySelectorAll(".col-12.col-md-6 p");

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

// 4ème consigne : Pagination
const paginationLinks = document.querySelectorAll(".pagination .page-link");
const originalText = jumbotronParagraphs[0].textContent;

const pageContents = {
  1: originalText,
  2: "Page 2 : voici un contenu alternatif pour la deuxième page.",
  3: "Page 3 : découvrez un autre texte pour la troisième page.",
};

let currentPage = 1;

function updateJumbotron(page) {
  if (pageContents[page]) {
    jumbotronParagraphs[0].textContent = pageContents[page];
    currentPage = page;
  }
}

paginationLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.textContent.trim();

    if (text === "«") {
      updateJumbotron(Math.max(1, currentPage - 1));
    } else if (text === "»") {
      updateJumbotron(Math.min(3, currentPage + 1));
    } else {
      updateJumbotron(parseInt(text));
    }
  });
});

// 5ème consigne : Liste groupée à droite
const rightButtons = document.querySelectorAll(
  ".col-12.col-md-3.d-flex.flex-column.gap-2 .btn"
);

rightButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rightButtons.forEach((b) => b.classList.remove("active", "btn-primary"));
    rightButtons.forEach((b) => b.classList.add("btn-outline-primary"));
    btn.classList.add("active", "btn-primary");
    btn.classList.remove("btn-outline-primary");
  });
});

// 7ème consigne : Séquence touches D, G, C
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

  const modalBody = document.getElementById("modalContent");
  modalBody.textContent = ""; // vider l'ancien contenu

  // créer les paragraphes proprement
  for (const [key, value] of Object.entries(data)) {
    const p = document.createElement("p");
    p.textContent = `${key} : ${value}`;
    modalBody.appendChild(p);
  }

  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  modal.show();
}

// 8ème consigne : Formulaire valider change couleur spinner
document.getElementById("submitForm").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password2").value.trim();

  if (email !== "" && password !== "") {
    const colors = [
      "text-primary",
      "text-danger",
      "text-success",
      "text-warning",
      "text-info",
      "text-dark",
    ];

    const spinner = document.getElementById("mainSpinner");
    colors.forEach((color) => spinner.classList.remove(color));
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    spinner.classList.add(randomColor);
  } else {
    alert("Veuillez entrer un email et un mot de passe.");
  }
});

// 6ème consigne : Progress bar avec boutons
const progressBar = document.getElementById("mainProgress");
const btnMinus = document.getElementById("btn-progress-minus");
const btnPlus = document.getElementById("btn-progress-plus");

let progress = 40;

function updateProgress() {
  progressBar.style.width = progress + "%";
  progressBar.setAttribute("aria-valuenow", progress);
  progressBar.textContent = progress + "%";
}

btnMinus.addEventListener("click", () => {
  progress = Math.max(0, progress - 5);
  updateProgress();
});

btnPlus.addEventListener("click", () => {
  progress = Math.min(100, progress + 5);
  updateProgress();
});
