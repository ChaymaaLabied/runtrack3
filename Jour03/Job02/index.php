<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Jeu de l'arc-en-ciel</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>

    <h1>Reconstituez l'arc-en-ciel</h1>
    <h2>Instructions :</h2>
    <p>Cliquez sur une image puis sur une autre pour échanger leur position. Reconstituez l’arc-en-ciel dans le bon ordre.</p>

    <!-- Conteneur pour les images -->
    <div id="arc-en-ciel">
        <img src="images/arc1.png" class="couleur" data-order="1">
        <img src="images/arc2.png" class="couleur" data-order="2">
        <img src="images/arc3.png" class="couleur" data-order="3">
        <img src="images/arc4.png" class="couleur" data-order="4">
        <img src="images/arc5.png" class="couleur" data-order="5">
        <img src="images/arc6.png" class="couleur" data-order="6">
    </div>

    <button id="melanger">Mélanger les images</button>
    <button id="verifier">Vérifier l'ordre</button>

    <p id="message"></p>

    <script src="script.js"></script>
</body>

</html>