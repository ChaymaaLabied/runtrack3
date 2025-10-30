let tiles = ["01", "02", "03", "04", "05", "06", "07", "08", "empty"];

// Mélange simple
tiles.sort(() => Math.random() - 0.5);
function drawPuzzle() {
  $("#puzzle").html("");
  tiles.forEach((tile) => {
    if (tile === "empty") {
      $("#puzzle").append(`<div class="tile empty"></div>`);
    } else {
      $("#puzzle").append(
        `<img class="tile" src="images/${tile}.png" data-num="${tile}">`
      );
    }
  });
}

function isAdjacent(i, empty) {
  const grid = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4, 6],
    [1, 3, 5, 7],
    [2, 4, 8],
    [3, 7],
    [4, 6, 8],
    [5, 7],
  ];
  return grid[i].includes(empty);
}

function checkWin() {
  for (let i = 0; i < 8; i++) {
    if (tiles[i] !== (i + 1).toString()) return false;
  }
  return true;
}

// Clique sur un carreau
$(document).on("click", ".tile", function () {
  let i = $(this).index();
  let empty = tiles.indexOf("empty");

  if (isAdjacent(i, empty)) {
    [tiles[i], tiles[empty]] = [tiles[empty], tiles[i]];
    drawPuzzle();
  }

  if (checkWin()) {
    $("#message").text("Vous avez gagné 🎉").css("color", "green");
    $(".tile").css("pointer-events", "none");
    $("#restart").show();
  }
});

$("#restart").click(function () {
  tiles.sort(() => Math.random() - 0.5);
  drawPuzzle();
  $("#message").text("");
  $(".tile").css("pointer-events", "auto");
  $(this).hide();
});

// lancer au début
drawPuzzle();
