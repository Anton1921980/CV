<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>PHPMAILER</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="pro/style/style.css" />
    <script src="pro/script/gsap.min.js"></script>
    <meta
      id="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
  </head>

<section class="page-container-text2 scroll" data-id="phone.php" id="phone.php">
    <a name="top" href="#"></a>
    <article class="page-container2" id="contentHolder2">
         <!-- заменил в main.js на .append -->
        <!-- <script src="http://lifesoundcom.ua/pro/script/gsap.min.js"></script>
        <script src="http://lifesoundcom.ua/pro/script/script.js"></script> -->
        <section>
            <div class="msg" onclick="gsapMsg.reverse()">Сообщение</div>
            <div class="wrap">
                <form enctype="multipart/form-data" method="post" id="form" onsubmit="send(event,'pro/send.php')">
                    <div class="group-input">
                        <div class="group-text-input">
                            <div class="input-wrap">
                                <input name="name" id="name" type="text" class="form-input aInput" autocomplete="off" />
                                <label for="name" class="input-label">Ваше имя</label>
                            </div>
                            <div class="input-wrap">
                                <input name="phone" id="phone" type="text" class="form-input aInput" autocomplete="on" />
                                <label for="phone" class="input-label">Номер телефона</label>
                            </div>
                        </div>
                        <div class="input-wrap">
                            <textarea name="texta" id="texta" class="aInput"></textarea>
                            <label for="texta" class="area-label">сообщение (необязательно)</label>
                        </div>
                        <div class="nav-top-toggler2" data-toggle="collapse" data-target="#collapsibleNavbar2">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <!-- <div class="file-wrap">
                        <label for="myfile" class="labelFile">
                  <img
                    src="https://img.icons8.com/ios/50/000000/upload-to-cloud.png"
                  />
                  <p class="count">Прикрепите файлы (необязательно)</p>
                </label>
                        <input type="file" class="inputFile" id="myfile" name="file[]" multiple="multiple" onchange="inputFile(event)" />
                    </div> -->
                    <button type="submit" class="button right">Отправить</button>
                </form>
            </div>
        </section>
    </article>
</section>
<!-- </body>
</html> -->
<script src="pro/script/script.js"></script>