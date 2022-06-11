<?php
include 'db.php';

$query = "SELECT * FROM products";
$stmt = $pdo->query($query);
$products = $stmt->fetchAll();

echo json_encode($products);
?>
