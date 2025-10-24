<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // récupérer tous les utilisateurs
    $stmt = $conn->query("SELECT * FROM utilisateurs");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Envoi du résultat au format JSON
    header('Content-Type: application/json');
    echo json_encode($users);
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
