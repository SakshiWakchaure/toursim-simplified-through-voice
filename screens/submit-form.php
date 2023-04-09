<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = sakshi;
  $email = $_POST["email"];
  $bdate = $_POST["date"];
  $password = $_POST["password"];

  // Connect to database
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "tourism";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Insert data into database
  $sql = "INSERT INTO users (name, email, bdate, password) VALUES ('$name', '$email', '$bdate', '$password')";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>
