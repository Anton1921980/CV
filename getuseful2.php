<!DOCTYPE html>
<html>
<head>

</head>
<body>

<?php
// $q = intval($_GET['q']); //если строка не работает только числа
$q = $_GET['q'];
require_once ("conn.php");

$con = $connection;
mysqli_set_charset($con, "utf8");
// Check connection
if (mysqli_connect_errno()){
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 die();
}
$sql = "SELECT * FROM j21s9_content WHERE alias = '".$q."'";
$res_data = mysqli_query($con,$sql);
// $sql = "SELECT * FROM j21s9_content WHERE alias = '".$q."'";

// $result = mysqli_query($con,$sql);

// echo "<div><h2>". $row['Name'] . "</h2></div>";
while($row = mysqli_fetch_assoc($res_data)){     
    echo "<article>" . $row['introtext'] . "</article>";    
}
mysqli_close($con);
?>
</body>
</html>
