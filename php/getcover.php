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


$id = $_GET["id"];

mysqli_set_charset($conn, "utf8");

$sql = "SELECT * FROM llibres WHERE id = '$id'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  // output data of each row
  
	while($row = $result->fetch_assoc()) {
    
		echo $row["imatge_portada"];
  
	}

} else {
  
	echo "notfound";
}



?>