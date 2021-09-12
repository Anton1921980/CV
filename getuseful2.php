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

if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"j21s9_content_cv");
$sql = "SELECT * FROM j21s9_content_cv WHERE alias = '".$q."'";

$result = mysqli_query($con,$sql);

echo "<div><h2>". $row['Name'] . "</h2></div>";
while($row = mysqli_fetch_array($result)) {    
    echo "<article>" . $row['introtext'] . "</article>";    
}
mysqli_close($con);
?>
</body>
</html>