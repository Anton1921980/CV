<?php
require_once ("../conn.php");
$sql="SELECT * FROM j21s9_content WHERE id = '".$q."'";
// Подключение к базе данных
$connectionDB = $connection;
mysqli_set_charset($connectionDB, "utf8");
// Проверка подключения
if (mysqli_connect_errno()) {

    echo "Невозможно подключится к MySQL: " . MySQLi_connect_error();

}
?>