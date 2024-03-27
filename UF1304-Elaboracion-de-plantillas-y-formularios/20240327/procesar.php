<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];

    // Aquí puedes realizar cualquier acción con los datos capturados, como almacenarlos en una base de datos o enviarlos por correo electrónico

    // Por ejemplo, imprimir los datos capturados
    echo "Nombre: " . $nombre . "<br>";
    echo "Email: " . $email;
}
?>