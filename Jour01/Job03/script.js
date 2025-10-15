document.addEventListener("DOMContentLoaded", () => {

  const bouton = document.getElementById("btn-afficher-console");

  bouton.addEventListener("click", () => {
    console.log("My beloved Javascript!");
    // alert("My beloved Javascript!");
  });

});