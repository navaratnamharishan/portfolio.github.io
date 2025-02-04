<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $to = "navartnamharishan@gmail.com";  // The recipient's email
    $subject = "New Comment from $name";
    $message = "You received a new comment from $name ($email):\n\n$comment";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Comment sent successfully.";
    } else {
        echo "There was an error sending your comment.";
    }
}
?>
