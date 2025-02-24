<?php

// Your email address
$recepient = "plumbero@contact.pl";

$name = $_POST["name"];
$surname = $_POST["surname"];
$tel = $_POST["tel"];
$from = $_POST["email"];
$message = $_POST["message"];

$txt = "Imię: " . $name . "\r\n" . "Nazwisko: " . $surname . "\r\n" . "Telefon kontaktowy: " . $tel . "\r\n" . "Adres e-mail: " . $from . "\r\n" . "\r\n" . "Wiadomość: " . "\r\n" . $message . "\r\n" . "\r\n" . "--------" . "\r\n" . "Wiadomość została wysłana z Twojej strony.";

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

mail($recepient, $subject, $txt, $headers);

?>