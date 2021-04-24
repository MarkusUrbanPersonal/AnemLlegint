<?php

$servername = "rdbms.strato.de";
$username = "U4404751";
$password = "lamillorwebdelmon2020";
$dbname = "DB4404751";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("fail");
}



mysqli_set_charset($conn, "utf8");

$sql = "SELECT id FROM cites ORDER BY id DESC LIMIT 1";

$result = $conn->query($sql);

if ($result->num_rows == 1) {
  
  // output data of each row
  
	while($row = $result->fetch_assoc()) {
    
		echo $row["id"];
  
	}

} else {
  
	echo "fail";
}



?>