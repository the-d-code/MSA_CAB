<?php 
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the students table
$sql = "SELECT * FROM students";
$result = $conn->query($sql);

// Create a new XML document
$xml = new DOMDocument("1.0", "UTF-8");
$xml->formatOutput = true;

// Create the root element
$root = $xml->createElement("students");
$xml->appendChild($root);

// Loop through the result set and add each student as a child element
while ($row = $result->fetch_assoc()) {
    $student = $xml->createElement("student");
    $root->appendChild($student);

    $id = $xml->createElement("id", $row["id"]);
    $student->appendChild($id);

    $name = $xml->createElement("name", $row["name"]);
    $student->appendChild($name);

    $age = $xml->createElement("age", $row["age"]);
    $student->appendChild($age);

    $roll_number = $xml->createElement("roll_number", $row["roll_number"]);
    $student->appendChild($roll_number);
}

// Save the XML document to a file
$xml->save("students.xml");

// Close the database connection
$conn->close();
?>