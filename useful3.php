<?php
include ('src/views/header.php');
?>

<html>
  <head>
    <title>useful</title>
    <style>
    
    </style>
    <!-- версиия не ниже этой для поддержки inview.js -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <script src="script/main.js"></script>
    <!-- Inview Js (jquery.inview.js) -->
    <script src="inview.js"></script>
  </head>

  <body>
 
    <section
      class="page-container-text scroll"
      data-id="useful3.php"
      id="test"
    >
      <a name="top" href="#"></a>
      <article class="page-container" id="contentHolder">
        <section>
          <h2>ПОЛЕЗНОЕ</h2>
          <div id="start" style=""></div>             
          <div id="response">
            <!-- response(next page's data) will get appended here -->
            <!--we need to populate some initial data-->
            <?php
            require_once ("conn.php");
            $conn = $connection;
            mysqli_set_charset($conn, "utf8");
            // Check connection
            if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
                die();
            }
            $sql = "SELECT * FROM j21s9_content LIMIT 8";
            $res_data = mysqli_query($conn,$sql);
            echo "<section class='all-articles'>";

            while($row = mysqli_fetch_assoc($res_data)){    
              $img = $row['images'];  //из массива images в Mysql берем значение по ключу image_intro           
              $objJSON = json_decode($img);
              $i = $objJSON->image_intro;  
              
              echo "<a class='useful-link' href='".$row['alias']."' style='margin:30px'><div class='useful-link-image'><img src='".$i."' alt='lorem'width='100%' /></div><div style='display:flex;justify-content:center;align-items:center;height:30%;border-top: 1px solid lightgrey;padding-left: 15px;padding-right: 15px;color:var(--link-color);'><div>".$row['Name']."</div></div></a>";
            }
            echo "</section>";

            mysqli_close($conn);
        ?>
          </div>           

          <input type="hidden" id="pageno" value="1" />
          <img id="loader" src="book.gif" />
          <script>
            $(document).ready(function () {
              //если открыли подробную инфу не загружать след страницы при скроле      

              // if($('#txtHint').text() !== '...result' ){
             
            $("#loader").on("inview", async function (event, isInView) {          
                if ( isInView && !$('#txtHint').hasClass("ajax-active") ) {
                  var nextPage = parseInt($("#pageno").val()) + 1;
                  $.ajax({
                    type: "POST",
                    url: "pagination.php",
                    data: { pageno: nextPage },
                    success: function await (data) {
                      if (data != "") {
                        $("#response").append(data);
                        $("#pageno").val(nextPage);
                      } else {
                        $("#loader").hide();
                      }
                    },
                  });
                }  
                           
              });
              
              
            });
          
            // $(document).ready(function () {
            //   $("#next").click(function () {
            //     var nextPage = parseInt($("#pageno").val()) + 1;
            //     $.ajax({
            //       type: "POST",
            //       url: "pagination.php",
            //       data: { pageno: nextPage },
            //       success: function (data) {
            //         if (data != "") {
            //           $("#response").append(data);
            //           $("#pageno").val(nextPage);
            //         } else {
            //           $("#loader").hide();
            //         }
            //       },
            //     });
            //   });

            //   $("#prev").click(function () {
            //     var nextPage = parseInt($("#pageno").val()) - 1;
            //     $.ajax({
            //       type: "POST",
            //       url: "pagination.php",
            //       data: { pageno: nextPage },
            //       success: function (data) {
            //         if (data != "") {
            //           $("#response").append(data);
            //           $("#pageno").val(nextPage);
            //         } else {
            //           $("#loader").hide();
            //         }
            //       },
            //     });
            //   });
            // });

          </script>          
             
          <div id="txtHint">...result</div>
        </section>
      </article>
    </section>
    <div id="" ></div>
<div id="end" style="height: 250px"></div>
    <?php
// include ('src/views/footer.php');
?>
  </body>
</html>
