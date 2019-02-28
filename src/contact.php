<?php

$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$to = 'bharatpatelio200@gmail.com';


$body = "Message from bharatpatel.io site\n\nFrom: $name\nSubject: $subject\nEmail: $email\n\nMessage:\n$message";

$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: bharatpatel.io <contact@bharatpatel.io>' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 


if ($_POST['submit']) {

	$filename = $email . "_" . strval(time());
	file_put_contents($filename, $body);
    if (mail ($to, $subject, $body, $headers)) {
        echo "Message successfully sent.";
    } else {
        echo "Something went wrong while processing the message.";
        http_response_code(422);
    }
}

?>