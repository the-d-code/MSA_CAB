<?php
// Create a database connection using PDO
$dsn = 'mysql:host=localhost;dbname=exam';
$username = 'root';
$password = 'root';

try {
    $db = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

// Write a SQL query to select all categories from the category table
$sql = 'SELECT * FROM category';

// Execute the query and fetch the results
$stmt = $db->query($sql);
$categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Display the categories on the left side of the page
?>
<html>
<head>
    <title>Products</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    
    <?php
    // Create a database connection using PDO
    $dsn = 'mysql:host=localhost;dbname=exam';
    $username = 'root';
    $password = 'root';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }

    // Check if user is logged in
    session_start();
    $isLoggedIn = isset($_SESSION['username']);

    // Display the navbar
    ?>
    <html>
    <head>
        <title>Products</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My Website</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <?php if ($isLoggedIn) { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                <?php } else { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div id="categories" class="card">
                    <div class="card-header">
                        Categories
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <?php
                            // Write a SQL query to select all categories from the category table
                            $sql = 'SELECT * FROM category';

                            // Execute the query and fetch the results
                            $stmt = $db->query($sql);
                            $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

                            // Display the categories on the left side of the page
                            foreach ($categories as $category) { ?>
                                <a href="#" class="list-group-item list-group-item-action category" data-id="<?php echo $category['id']; ?>"><?php echo $category['name']; ?></a>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div id="products">
                    <table class="table">
                        <thead><tr><th>Image</th><th>Name</th><th>Price</th></tr></thead>
                        <tbody class="tbody">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>

        $(document).ready(function() {
            $(".category").click(function() {
                console.log("clicked");
                var categoryId = $(this).data("id");
                console.log(categoryId);
                $.ajax({
                    url: "http://localhost/practicalassignment3/q-1/user/get_products.php",
                    
                    type: "POST",
                    data: { category_id: categoryId },
                    dataType: "json",
                    success: function(products) {
                        console.log(products);
                        displayProducts(products);
                    }
                });
            })
        })
        var productsDiv = $("tbody");
        function displayProducts(products) {
            console.log("display products");
            
            productsDiv.empty();
            
            $.each(products, function(index, product) {
              
                productsDiv.append(
                                
                                "<tr><td><img height=\"50px\" width=\"50px\" src=\"../uploads/" + product.image + "\"></td>" +
                                "<td>" + product.name + "</td>" +
                                "<td>" + product.price + "</td></tr>"
                                );
               
            });
        }
    </script>

    <?php
    // Write a SQL query to select all products for a given category
    if (isset($_GET['category_id'])) {
    $categoryId = $_GET['category_id'];
    $sql = 'SELECT * FROM product WHERE category_id = :category_id';
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':category_id', $categoryId);
    $stmt->execute();
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the results as JSON
    header('Content-Type: application/json');
    echo json_encode($products);
}

?>
</body>


</html>