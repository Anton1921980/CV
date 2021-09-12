<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
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
$sql="SELECT * FROM j21s9_content WHERE id = '".$q."'";

$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>title</th>
<th>alias</th>
<th>introtext</th>
<th>fulltext</th>
<th>images</th>
<th>metadata</th>
<th>language</th>
<th>urls</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['title'] . "</td>";
    echo "<td>" . $row['alias'] . "</td>";
    echo "<td>" . $row['introtext'] . "</td>";
    echo "<td>" . $row['fulltext'] . "</td>";
    echo "<td>" . $row['images'] . "</td>";
    echo "<td>" . $row['metadata'] . "</td>";
    echo "<td>" . $row['language'] . "</td>";
     echo "<td>" . $row['urls'] . "</td>";
    echo "</tr>";
}
echo "</table>";

mysqli_close($con);

?>
</body>
</html>