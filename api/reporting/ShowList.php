<?php
include 'config.php';
 
// Create connection
$con = new mysqli("localhost", "root", "", "reporting");
 
if ($con->connect_error) {
 
 die("Connection failed: " . $con->connect_error);
} 
 
// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM incidents";
 
$result = $con->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$con->close();
?>