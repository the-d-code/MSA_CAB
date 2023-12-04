<?php
// Start session
session_start();

// Check if user is already logged in
if(isset($_SESSION['username'])){
    header("Location: categories.php");
    exit();
}

// Check if form is submitted
if(isset($_POST['submit'])){

    // Get form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to database
    $conn = mysqli_connect("localhost", "root", "root", "exam");

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Prepare SQL statement
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";

    // Execute SQL statement
    $result = mysqli_query($conn, $sql);

    // Check if user exists
    if(mysqli_num_rows($result) == 1){

        // Store user data in session
        $_SESSION['username'] = $username;

        // Redirect to categories page
        header("Location: categories.php");
        exit();

    } else {

        // Display error message
        $error = "Invalid username or password.";

    }

    // Close database connection
    mysqli_close($conn);

}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">

                <h2>Login</h2>

                <?php if(isset($error)): ?>
                    <div class="alert alert-danger"><?php echo $error; ?></div>
                <?php endif; ?>

                <form method="post">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                    <button type="submit" name="submit" class="btn btn-primary">Login</button>
                </form>

            </div>
        </div>
    </div>

</body>
</html>
