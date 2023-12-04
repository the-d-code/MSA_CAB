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

// Fetch category data based on ID passed in query string
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT name FROM category WHERE id=$id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $categoryName = $row['name'];
    } else {
        echo "No category found with ID $id";
        exit;
    }
} else {
    echo "No ID specified";
    exit;
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newCategoryName = $_POST['categoryName'];
    $sql = "UPDATE category SET name='$newCategoryName' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Category updated successfully";
        header("Location: categories.php");
        exit;   
    } else {
        echo "Error updating category: " . $conn->error;
    }
}

// Close database connection
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update Category</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1>Update Category</h1>
        <form method="POST">
            <div class="form-group">
                <label for="categoryName">Category Name:</label>
                <input type="text" class="form-control" id="categoryName" name="categoryName" value="<?php echo $categoryName; ?>">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
</body>
</html>
