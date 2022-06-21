<?php
session_start();
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$productId = $data['id'];

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

if (isset($_SESSION['cart'][$productId])) {
    $_SESSION['cart'][$productId]++;
} else {
    $_SESSION['cart'][$productId] = 1;
}

echo json_encode(['success' => true]);
?>
