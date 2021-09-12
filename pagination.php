<?php
    require_once ("conn.php");
    $pageno = $_POST['pageno'];
    $no_of_records_per_page = 3;
    $offset = ($pageno-1) * $no_of_records_per_page;    
    $conn = $connection;
    mysqli_set_charset($conn, "utf8");
    // Check connection
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        die();
    }
    $sql = "SELECT * FROM j21s9_content LIMIT $offset, $no_of_records_per_page";
    $res_data = mysqli_query($conn,$sql);
    echo "<section class='all-articles'>";
    while($row = mysqli_fetch_assoc($res_data)){              
        $img = $row['images'];  //из массива images в Mysql берем значение по ключу image_intro           
        $objJSON = json_decode($img);
        $i = $objJSON->image_intro;             
        echo "<a class='useful-link useful' href='".$row['alias']."' style='margin:30px'><div class='useful-link-image'><img src='http://".$_SERVER['SERVER_NAME']."/".$i."' alt='lorem'width='100%' /></div><div style='display:flex;justify-content:center;align-items:center;height:30%;border-top: 1px solid lightgrey;padding-left: 15px;padding-right: 15px; color:var(--link-color);'><div>".$row['Name']."</div></div></a>";
    }
    echo "</section>";

    mysqli_close($conn);
?>