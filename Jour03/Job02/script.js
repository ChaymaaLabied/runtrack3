$(document).ready(function () {
  function shuffleImages() {
    let container = $("#arc-en-ciel");
    let images = container.children();
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      images.eq(i).before(images.eq(j));
    }
  }
  // vider le message et lancer la fct suffle en cliquant sur le btn melanger
  $("#melanger").click(function () {
    shuffleImages();
    $("#message").text("");
  });

  // Échanger deux images par clic
  let firstSelected = null;
  $(".couleur").click(function () {
    if (!firstSelected) {
      firstSelected = $(this);
      firstSelected.addClass("selected");
    } else if (firstSelected[0] !== this) {
      // Échanger les positions
      let temp = $("<span>").hide(); // span cachée pour faire l'échange
      firstSelected.before(temp);
      $(this).before(firstSelected);
      temp.replaceWith($(this));

      // Réinitialiser la sélection
      $(".couleur").removeClass("selected");
      firstSelected = null;
    } else {
      // Cliquer à nouveau sur la même image pour désélectionner
      firstSelected.removeClass("selected");
      firstSelected = null;
    }
  });

  // Vérifier l'ordre
  $("#verifier").click(function () {
    let correct = true;
    $("#arc-en-ciel img").each(function (index) {
      if (parseInt($(this).data("order")) !== index + 1) {
        correct = false;
        return false; // stop loop
      }
    });

    if (correct) {
      $("#message").text("Vous avez gagné !").css("color", "green");
    } else {
      $("#message").text("Vous avez perdu !").css("color", "red");
    }
  });
});
