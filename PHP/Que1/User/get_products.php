<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "exam";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the category ID from the AJAX request
$category_id = $_POST['category_id'];

// Prepare and execute the SQL query to get the products with the specified category ID
$stmt = $conn->prepare("SELECT * FROM product WHERE cat_id = ?");
$stmt->bind_param("i", $category_id);
$stmt->execute();
$result = $stmt->get_result();

// Create an array to store the products
$products = array();

// Loop through the result set and add each product to the array
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

// Close the database connection
$conn->close();

// Send the products back to the previous page as a JSON object
echo json_encode($products);



?>
