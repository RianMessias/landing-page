<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "ogmenospam@gmail.com"; // Substitua com o seu e-mail
    $subject = "Mensagem de Contato do Site";
    $body = "Nome: $name\nE-mail: $email\nMensagem: $message";
    
    if (mail($to, $subject, $body)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro. Tente novamente.";
    }
}
?>