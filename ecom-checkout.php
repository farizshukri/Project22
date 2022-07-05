<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $address = $_POST['address'];
    $payment = $_POST['payment'];

    // Process checkout here (e.g., save order details to database)

    // Clear cart
    unset($_SESSION['cart']);

    echo json_encode(['success' => true]);
}
?>
