<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>Job03-Jour04</title>
</head>

<body>

    <body>
        <form id="form-filtre">
            <label for="id">ID :</label>
            <input type="text" id="id" name="id">

            <label for="name">Nom :</label>
            <input type="text" id="name" name="name">

            <label for="type">Type :</label>
            <select id="type" name="type">
                <option value="">-- Choisir un type --</option>
                <option value="Grass">Grass</option>
                <option value="Psychic">Psychic</option>
                <option value="Ground">Ground</option>
                <option value="Fighting">Fighting</option>
                <option value="Normal">Normal</option>
                <option value="Flying">Flying</option>
                <option value="water">water</option>
                <option value="Fairy">Fairy</option>
                <option value="Fire">Fire</option>
                <option value="Poison">Poison</option>
                <option value="Ice">Ice</option>
                <option value="Bug">Bug</option>
                <option value="Rock">Rock</option>
                <option value="Steel">Steel</option>
                <option value="Ghost">Ghost</option>
            </select>

            <input type="submit" id="filtrer" value="Filtrer">
        </form>
        <div id="resultats"></div>

        <script src="script.js"></script>
    </body>
</body>

</html>