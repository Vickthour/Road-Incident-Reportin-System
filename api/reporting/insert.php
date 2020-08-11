<?php
 
// Importing Config.php file.
include 'config.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect("localhost", "root", "", "reporting");
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student name from JSON $obj array and store into $S_Name.
 $type = $obj['type'];
 
 // Populate Student Class from JSON $obj array and store into $S_Class.
 $description = $obj['description'];
 
 // Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
 $media = $obj['media'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 $location = $obj['location'];

  // Populate Email from JSON $obj array and store into $S_Email.

 $time = date("l jS \of F Y H:i:s A");

 $emergency = $obj['emergency'];

 $anonymous = $obj['anonymous'];

 $status = 'Unseen';

 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "insert into incidents(type,description,media,location,time,emergency,anonymous,status) values ('$type','$description','$media','$location','$time','$emergency','$anonymous','$status')";
 
 
 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>