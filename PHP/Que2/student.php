<?php 
// Establish a connection to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "database";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Parse the XML file
$xml = simplexml_load_file("students.xml") or die("Error: Cannot create object");

// Loop through each student and insert their data into the database
foreach ($xml->student as $student) {
    $name = $student->name;
    $age = $student->age;
    $roll_number = $student->roll_number;

    $sql = "INSERT INTO students (name, age, roll_number) VALUES ('$name', '$age', '$roll_number')";

    if (mysqli_query($conn, $sql)) {
        echo "Record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>