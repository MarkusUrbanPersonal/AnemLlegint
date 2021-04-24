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


$imatge = $_GET["link"];

mysqli_set_charset($conn, "utf8");

$sql = "SELECT * FROM llibres WHERE imatge_portada = '$imatge' ";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  // output data of each row
  
	while($row = $result->fetch_assoc()) {
    
		echo $row["titol"] . "/-/-/" . $row["autor"] .  "/-/-/" . $row["contingut"] . "/-/-/" . $row["data"] . "/-/-/" . $row["redactor"] . "/-/-/" . $row["imatge_redactor"] . "/-/-/" . $row["imatge_portada"] . "/-/-/" .$row["estrelles"] . "/-/-/" . $row["amazon"];
  
	}

} else {
  
	echo "notfound";
}



?>