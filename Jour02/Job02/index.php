<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Show'n'Hide</title>
    <style>
        #citation {
            transition: opacity 0.3s ease;
        }

        .hidden {
            opacity: 0;
            visibility: hidden;
        }
    </style>
    <script src="script.js" defer></script>
</head>

<body>
    <button id="button">click for magic</button>
    <article id="citation" class="hidden">
        L'important n'est pas la chute, mais l'atterrissage.
    </article>


</body>

</html>