<?php
error_reporting(E_ALL);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up email parameters
    $to = "ptilege@gmail.com"; // Replace with your email address
    $subject = "New message from your portfolio website";
    $headers = "From: $email";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_message, $headers);

    // Send a response to the client
    echo json_encode(["status" => "success"]);
} else {
    // Send a response to the client in case of a GET request
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>