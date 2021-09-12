<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link
      crossorigin="anonymous"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap"
      rel="stylesheet"
    />
    <!-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> -->

    <link rel="stylesheet" href="http://lifesoundcom.ua/css/main.css" />
    <!-- <link rel="stylesheet" type="text/css" href="http://lifesoundcom.ua/pro/style/style.css"> -->
    <!-- <script src="http://lifesoundcom.ua/pro/script/gsap.min.js"></script>
    <script src="http://lifesoundcom.ua/pro/script/script.js"></script> -->

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="http://kenwheeler.github.io/slick/slick/slick-theme.css">
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>  
    
    <!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
  <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script> -->
    <!-- Подключаем наш файл стилей-->
    <link rel="stylesheet" type="text/css" href="http://lifesoundcom.ua/search/style.css">
  </head>
  <body>
    <!-- <script>
      AOS.init();
    </script> -->
    <div id="bg_layer"></div>
    <header class="header">
      <div id="to-top">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section class="top-contacts">
        <a class="company-logo">
          <div class="hexagon"></div>
          <div class="logo-name">
            <span class="logo"></span>ЗВУКИ<span class="name">&nbsp;ЖИТТЯ</span>
          </div>
        </a>       
      </section>
  
      <section class="top-menu">
        <section class="top-menu-moving">      
          <div>
            <a class="phone" id='changetext' href="phone.php"><i class="fa fa-phone"></i>&nbsp обратный звонок</a> 
          </div>
          <div>0968801088</div>
          <div>0668801088</div>
          <div>        
          <form>        
           <label><i class="fa fa-search"></i>
             <input type="text" id="search" placeholder=""></input>
           </label>      
          </form>         
          </div>  
       </section>     
        <nav class="nav-top wide collapse" id="collapsibleNavbar">
          <a class="nav-item nav-link click" href="main">ГЛАВНАЯ</a>
          <a class="nav-item nav-link click" href="services">услуги</a>
          <a class="nav-item nav-link click" href="contacts">контакты</a>
          <!-- <a class="ajax" href="contacts.html">Контакты</a> -->
          <a class="nav-item nav-link click" href="products">продукты</a>
          <!-- <a href="test">Полезное</a> -->          
          <a class="nav-item nav-link click" href="useful">Полезное</a>
        </nav>
        <!-- <div class="search"><button></button></div>  -->

        <!-- Toggler/collapsibe Button -->
        <div
          class="nav-top-toggler top"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <!-- <section class="center">
        <div class="center-title">
          Звуки життя<span>&nbsp;- это твой слух</span>
        </div>
        <div class="center-subtitle">ты будешь слышать снова</div>
        <div class="center-other">Запишись на консультацию</div>
        <div class="buttons">
          <button class="button" id="explore" >записаться</button>
          <button class="button" id="purchase">перезвонить</button>
        </div>
      </section>   -->       

    </header>
    <!--контейнер для телефона class scroll adds /phone -->
    <section class="page-container-text2" style="width: 100%;">
        <a name="top" href="#"></a>
        <article
          class="page-container2"
          id="contentHolder2"
          style="width: 100%; display:none;"
        >
          <p>Hi, welcome</p>
        </article>
    </section>    

 <!-- Контейнер для результатов поиска -->
<div id="display" style="">  
 
 </div>
 <div class="cover"></div> 
 
