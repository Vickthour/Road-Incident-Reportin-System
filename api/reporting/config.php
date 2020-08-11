<?php
	
$con = mysqli_connect("localhost", "root", "", "reporting");
	if(!$con)
	{
    die('Connection error'.mysqli_connect_errno());
	}

?>