function citation() {
  const citationEl = document.getElementById("citation"); 
  console.log(citationEl.textContent); 
}

document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.getElementById("button");
  bouton.addEventListener("click", citation); 
});
