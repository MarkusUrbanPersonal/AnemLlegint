<?php

$servername = "rdbms.strato.de";
$username = "U4404751";
$password = "lamillorwebdelmon2020";
$dbname = "DB4404751";

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error) {
  
	die("Connection failed: " . $conn->connect_error);
}


$id_cita = $_GET["id"];

$actual = $_GET["code"];

$replace = $actual + 1;


mysqli_set_charset($conn, "utf8");

$sql = "UPDATE cites SET likes= '$replace' WHERE id = '$id_cita'";

if ($conn->query($sql) === TRUE) {
  
	echo "ok";

} else {
  
	echo "Error updating record: " . $conn->error;
}

$conn->close();

?>