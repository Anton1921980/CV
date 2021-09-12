<?php

// Подключаем файл конфигурации
include "db.php";

// Получаем значение переменной "search" из файла "script.js".
if (isset($_POST['search'])) {

    // Помещаем поисковой запрос в переменной
    $Name = $_POST['search'];

 
    // Запрос для выбора из базы данных
    $Query = "SELECT * FROM j21s9_content WHERE Name LIKE '%$Name%' ";

    //Производим поиск в базе данных
    $ExecQuery = mysqli_query($connectionDB, $Query);

    // Создаем список для отображения результатов
    
    // echo '<ul>';

    //Перебираем результаты из базы данных
    while ($Result = mysqli_fetch_assoc($ExecQuery)) {
?>
        <!-- Создаем элементы списка. При клике на результат вызываем функцию обработчика fill() из файла "script.js". В параметре передаем найденное имя-->
      
        <!-- <li onclick='fill(" -->
        
        <?php
        //  echo $Result['Name']; 
         ?>
         <!-- ")'>         -->
            <a>         
       
            <?php 
             $img = $Result['images'];  //из массива images в Mysql берем значение по ключу image_intro           
             $objJSON = json_decode($img);
             $i = $objJSON->image_intro;         
             $iii= 'http://'.$_SERVER['SERVER_NAME'].'/'.$i; 

            //  echo  "<div>$iii</div>";            
             echo "<a class='useful-link search-text' href='".$Result['alias']."' style='margin:30px'><div class='useful-link-image'><img src='".$iii."' alt='lorem'width='100%' /></div><div style='display:flex;justify-content:center;align-items:center;height:30%;border-top: 1px solid lightgrey;padding-left: 15px;padding-right: 15px;'><div>".$Result['Name']."</div></div></a>";
            //  echo "<a class='useful-link' href='".$Result['alias']."' style='margin:30px'><div class='useful-link-image'><img src ='".$iii."' alt='lorem' width='20%'/'></div>".$Result['Name']."</a>"; 
            ?>   
           
            </a>
        <!-- </li> -->
        
<?php
    }
    echo "<div id='append0' style='display:flex; justify-content:center;'></div>";
}
?>
    </ul>