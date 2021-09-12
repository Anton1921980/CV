<!DOCTYPE html>
<html>
<head>
<style>
.all-articles {
    width: 100%;  
    display: flex;
    flex-wrap: wrap;
}
.useful-link{
    display: block;
    width: 20%;
    margin: 15px;

}
.useful-link img{
    display: block;  
    margin-bottom: 10px; 
}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);
require_once ("conn.php");
$con = $connection;
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"j21s9_content");

$all="SELECT * FROM j21s9_content ORDER BY id LIMIT 20";
$result_all = mysqli_query($con,$all);

echo "<section class='all-articles'>";
while($row_all = mysqli_fetch_array($result_all)){    

echo "<a class='useful-link' href='".$row_all['id']."'><img src='images/3.jpg' width='255' height='255' alt='lorem'/>".$row_all['Name']."</a>";
}
echo "</section>";

mysqli_close($con);
?>
</body>
</html>