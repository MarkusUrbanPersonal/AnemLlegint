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


$author = $_GET["author"];

mysqli_set_charset($conn, "utf8");

$sql = "SELECT * FROM cites WHERE author = '$author'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  // output data of each row
  
	while($row = $result->fetch_assoc()) {
    
		echo "/-/-/" . $row["id"] . "/-/-/" . $row["content"] .  "/-/-/" . $row["author"] . "/-/-/" . $row["image"]. "/-/-/" . $row["size"] . "/-/-/" . $row["likes"];
  
	}

} else {
  
	echo "notfound";
}



?>