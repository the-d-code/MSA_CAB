

<?php
session_start();

if(!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
if(isset($_POST['logout'])) {
    session_unset();
    session_destroy();
    header("Location: login.php");
    exit();
}
?>

<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body>
    <header>
    <!-- place navbar here -->
    </header>
    <main>
        <form method="post" class="float-end">
            <button type="submit" name="logout" class="btn btn-danger">Logout</button>
        </form>
<?php 

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "exam";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Select all categories from the database
$sql = "SELECT * FROM category";
$result = mysqli_query($conn, $sql);
?>
<a href="insert.php" class="btn btn-primary">Add Category</a>
<?php
// Display the categories in a table
echo "<table class='table'>";
echo "<thead class='thead-dark'><tr><th>ID</th><th>Name</th><th>Actions</th></tr></thead>";
while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>" . $row["id"] . "</td>";
    echo "<td>" . $row["name"] . "</td>";
    
    echo "<td><a href='categories.php?id=" . $row["id"] . "' class='btn btn-danger'>Delete</a> | <a href='update.php?id=" . $row["id"] . "' class='btn btn-primary'>Update</a></td>";
    echo "</tr>";
}
echo "</table>";

// Close the database connection
mysqli_close($conn);
?>




<?php 

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "exam";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
}

// Get the ID of the category to delete from the query string
if(isset($_GET['id'])){

    $id = $_GET['id'];
}

// Delete the category from the database if ID is not null
if (!empty($id)) {
        $sql = "DELETE FROM category WHERE id=$id";
        if (mysqli_query($conn, $sql)) {
                echo "Category deleted successfully";
        } else {
                echo "Error deleting category: " . mysqli_error($conn);
        }
}

// Select all categories from the database

// Close the database connection
mysqli_close($conn);
?>
    </main>
    <footer>
        <!-- place footer here -->
    </footer>
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
</body>

</html>

