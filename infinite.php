<!DOCTYPE html>
<html>
  <head>
    <title>Infinite Scroll Demo</title>

    <!-- JQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <!-- Inview Js (jquery.inview.js) -->
    <script src="inview.js"></script>

    <style>
      #response div {
        border: 1px solid lightgrey;
        height: 80px;
        margin-bottom: 5px;
        padding: 50px 0px 0px 0px;
        text-align: center;
      }
      #loader {
        display: block;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <!-- <div style="position: fixed">
      <button id="prev">prev</button>
      <button id="next">next</button>
    </div> -->

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
            while($row = mysqli_fetch_assoc($res_data)){              
                echo "<a class='useful-link' href='".$row_all['id']."'><img src='images/3.jpg' width='189' height='255' alt='lorem'/>".$row_all['Name']."</a>";
            }
            mysqli_close($conn);
        ?>
    </div>

    <input type="hidden" id="pageno" value="1" />
    <img id="loader" src="book.gif" />
    <script>
      $(document).ready(function () {
        $("#loader").on("inview", function (event, isInView) {
          if (isInView) {
            var nextPage = parseInt($("#pageno").val()) + 1;
            $.ajax({
              type: "POST",
              url: "pagination.php",
              data: { pageno: nextPage },
              success: function (data) {
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
  </body>
</html>
