
<script>




$('.company-logo').on('click', function (e) {
   

  $('.company-logo').append("<div> вы поменяли цвета сайта, чтобы вернуть прежние цвета, перезагрузите страницу и нажмите еще раз</div>");
        // e.preventDefault();      
        // load the css file into a string
<?php      
$css = file_get_contents("../css/main.css");
$pos = strpos($css, "--body-color:#f8fcfe");

if ($pos === false){
 
  $old = array("--body-color:#338494","--link-color:white","--menu-color:#0d7f96");
  $new   = array("--body-color:#f8fcfe","--link-color:gray","--menu-color:lightgrey");
  $newcss = str_replace($old, $new, $css);

  file_put_contents("../css/main.css", $newcss); 
  

}else { 
 
  $old   = array("--body-color:#f8fcfe","--link-color:gray","--menu-color:lightgrey");
  $new = array("--body-color:#338494","--link-color:white","--menu-color:#0d7f96");
  $newcss = str_replace($old, $new, $css);

  file_put_contents("../css/main.css", $newcss);
}

?>

});

$('.admin').on('click', function (e) {
  console.log("yes");
  window.history.pushState(null, null, "http://lifesoundcom.ua/admin");
  window.location.href = "http://lifesoundcom.ua/admin";
})

  </script>
