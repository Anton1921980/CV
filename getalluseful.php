<!DOCTYPE html>
<html>
<head>

</head>
<body>

<?php
require_once ("conn.php");
$q = intval($_GET['q']);
$con = $connection;

if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"j21s9_content");

$all="SELECT * FROM j21s9_content ORDER BY id LIMIT 20";

$result_all = mysqli_query($con,$all);


while($row_all = mysqli_fetch_array($result_all)){


//  echo "<div>".$row_all['FirstName']."</div>";

 echo "<a class='useful-link' href='".$row_all['id']."'>".$row_all['title']."</a>";
//  echo "<a class='useful-link' href='useful.php/".$row_all['id']."'>".$row_all['LastName']."</a>";
}


mysqli_close($con);
?>
</body>
</html>