

<section class="center scroll" id="main" data-href="main">

<div class="dots">
  
  <?php
  $conn = mysqli_connect('localhost','mysql','mysql','lifesound33');
 
  if (mysqli_connect_errno()){
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      die();
  }
  $sql = "SELECT * FROM slider111111";
  $res_data = mysqli_query($conn,$sql);
       echo '<div class="your-class">';
       while($row = mysqli_fetch_assoc($res_data)){   
         echo "<div><img src='./image/".$row['url']."' alt='' style='width:100%;'/></div>";
                
       }
       echo "</div>";
  mysqli_close($conn);
?>
  <div class="prev"> 
        <span></span>
        <span></span>         
  </div>
  <div class="next">
        <span></span>
        <span></span>         
  </div>
</div>

  <div class="center-title">Звуки життя<span>&nbsp;- это твой слух</span></div>
  <div class="center-subtitle">ты будешь слышать снова</div>
  <div class="center-other">Запишись на консультацию</div>
  <div class="buttons">
    <button class="button" id="1">записаться</button>
    <button class="button" id="2">перезвонить</button>
    <button class="button" id="2">телеграфировать</button>
  </div>
</section>
<section class="customize scroll" id="services" data-href="services">
  <a name="top" href="#"></a>
  <!-- <div class="section-title" data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"> -->
  <div class="section-title">
    Наши услуги
  </div>
  <ul>
    <li>
      <a class="ajax click" href="observation">
        <!-- <img
          src="./image/obs.jpg"
          alt="обследование"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        /> -->
       <div><img
          src="./image/obs.jpg"
          alt="обследование"         
        />
       </div>
        <span>ОБСЛЕДОВАНИЕ</span>
      </a>
    </li>
    <li>
      <a class="ajax click" href="hearingAids">
        <!-- <img
          src="./image/sluh.jpg"
          alt="слуховые аппараты"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        /> -->
        <div><img
          src="./image/sluh.jpg"
          alt="слуховые аппараты"       
        />
        </div>
        <span>СЛУХОВЫЕ АППАРАТЫ</span></a
      >
    </li>
    <li>
      <!-- <img
        src="./image/aks.jpg"
        alt="аксессуары"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      /> -->
      <div><img
        src="./image/aks.jpg"
        alt="аксессуары"      
          />
      </div>
      <span>АКСЕССУАРЫ</span>
    </li>
    <li>
      <!-- <img
        src="./image/serv.jpg"
        alt="сервис"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      /> -->
      <div><img
        src="./image/serv.jpg"
        alt="сервис"    
      />
      </div>
      <span>СЕРВИС</span>
    </li>
  </ul>
</section>
<section class="page-container-text">
  <!-- <a name="top" href="#"></a> -->
  <!-- <article class="page-container" id="contentHolder" style="display: none">
   
  </article> -->
</section>
<section class="buyer-section">
  <div class="buy">
    <div class="buy-title">Everything is ready. just buy and install now</div>
    <div class="buy-subtitle">
      Smooth reliable, responsive ready, perfect portfolio, unique blog layout
      and many many options for you
    </div>
    <button class="button buyer" id="buyer2">purchase now</button>
  </div>
</section>


<section class="section-1 scroll" id="products" data-href="products">
  <a name="top" href="#"></a>
  <div id="hide_top2" style="height:20px"></div> 
  <!-- <div class="section-title" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true"> -->
  <div class="section-title">
    Слуховые аппараты
  </div>
  <div style="    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    align-items: center;">
  <ul class="tabs0">
    <li class="first-tab"></li>
    <li class="tabs-title active" data-target="adult-content">Взрослые аппараты</li>
    <li class="tabs-title" data-target="children-content">Детские аппараты</li>  
  </ul>
  
  <ul class="tabs-content content0">
  <!-- <li class="first-content"></li>  -->
    <li id="adult-content" class="active">
      <ul class="tabs" >
        <!-- <li class="first-tab"></li> -->
        <li class="tabs-title" data-target="first-tab-content">Заушные аппараты</li>
        <li class="tabs-title active" data-target="second-tab-content">Внутриушные аппараты </li>
        <li class="tabs-title" data-target="third-tab-content"><a class='useful-link top title'  href='iv'><div>Индивидуальные вкладыши</div></a></li>        
      </ul>
    </li>  
    <li id="children-content">
      <ul class="tabs" >
             <!-- <li class="first-tab"></li> -->
             <li class="tabs-title active" data-target="first-tab-content">Заушные аппараты</li>
             <li class="tabs-title" data-target="second-tab-content">Внутриушные аппараты </li>             
      </ul>
  </li>
  </div>
  <ul class="tabs-content content1">
    <li class="first-content"></li>   
    <li id="second-tab-content" class="tabs-content-all active">
      <ul class="tabs3">
        <li class="first-tab"></li>        
        <li class="tabs-title"><a class='useful-link title'  href='ite'><div class='useful-link-image'><img src='images\/btrict.jpg'></div><div>тип ITE</div></a></li>
        <li class="tabs-title"><a class='useful-link title' href='itc'><div class='useful-link-image'><img src='images\/itcfull.jpg'></div><div>тип ITC</div></a></li>
        <li class="tabs-title"><a class='useful-link title'  href='cic'><div class='useful-link-image'><img src='images\/cicfull.jpg'></div><div>тип CIC</div></a></li>   
        <li class="tabs-title"><a class='useful-link title'  href='iic'><div class='useful-link-image'><img src='images\/iic.jpg'></div><div>тип IIC</div></a></li>
      </ul>  
    </li>
    <li id="first-tab-content" class="tabs-content-all">
      <ul class="tabs3">
        <li class="first-tab"></li>
        <li class="tabs-title"><a class='useful-link title'  href='bte'><div class='useful-link-image'><img src='images\/1bte.jpg'></div><div>тип BTE</div></a></li>
        <li class="tabs-title"><a class='useful-link title'  href='open-fit'><div class='useful-link-image'><img src='images\/mopenfit.jpg'></div><div>тип OPEN-FIT</div></a></li>
        <li class="tabs-title"><a class='useful-link title'  href='ric'><div class='useful-link-image'><img src='images\/btrict.jpg'></div><div>тип RIC</div></a></li>   
      </ul> 
    </li>     
  </ul>

  <div id="append1" style="display:flex; justify-content:center;"></div>
</section>


<section class="buyer-section">
<!-- <a name="top" href="#"></a> -->
  <div class="buy">
    <div class="buy-title">Everything is ready. just buy and install now</div>
    <div class="buy-subtitle">
      Smooth reliable, responsive ready, perfect portfolio, unique blog layout
      and many many options for you
    </div>
    <button class="button buyer" id="buyer">purchase now</button>
  </div>
</section>


 <section class="section-2 scroll" id="useful" data-href="useful">
  <a name="top" href="#"></a>
  <div class="section-title">Полезное</div>
  <div id="hide_top" style="height:20px"></div> 
  <div id="response">
  
            <!-- response(next page's data) will get appended here -->
            <!--we need to populate some initial data-->
            <?php
            $conn = mysqli_connect('localhost','mysql','mysql','lifesound33');
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
        
        <input type="hidden" id="pageno" value="1" />
            <!-- <img id="loader" src="book.gif" /> -->         
           
            
  </div>  
  <!-- <div id="txtHint"></div> -->
  <div id="append2"></div>
  <button class="button" id="loadMore"><span>+</span>еще статьи</button>
  <div id="hide_bottom" style="height:20px"></div> 
  </section>
<!-- <section class="section-4"> -->
  <!-- <div class="section-title" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true"> -->
  <!-- <div class="section-title" >
    What People Say About theHam
  </div>
  <div class="quotes"><img src="./image/quotes.png" alt="quotes" /></div>
  <div class="container">
    <div class="review-container active" data-set="1">
      <p class="feedback">
        Augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio
        nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus
        ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.
        Morbi pulvinar odio eget aliquam facilisis.
      </p>
      <h3 class="feedback-name">
        Hasan Ali<span class="feedback-title"> UX Designer </span>
      </h3>
      <img class="avatar" src="./image/avatar1.png" />
    </div>
    <div class="review-container" data-set="2">
      <p class="feedback">
        Dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non
        dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.
        Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis
        massa. Morbi pulvinar odio eget aliquam facilisis.
      </p>
      <h3 class="feedback-name">
        Gabri Johan<span class="feedback-title"> Developer </span>
      </h3>
      <img class="avatar" src="./image/avatar2.png" />
    </div>
    <div class="review-container" data-set="3">
      <p class="feedback">
        Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem,
        non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam
        facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum
        odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.
      </p>
      <h3 class="feedback-name">
        Julie Jordan<span class="feedback-title"> Developer </span>
      </h3>
      <img class="avatar" src="./image/avatar3.png" />
    </div>
    <div class="review-container" data-set="4">
      <p class="feedback">
        Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis
        massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies
        luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi
        pulvinar odio eget aliquam facilisis.
      </p>
      <h3 class="feedback-name">
        Levan Jezz<span class="feedback-title"> Owner </span>
      </h3>
      <img class="avatar" src="./image/avatar4.jpeg" />
    </div>
    <div class="slider">
      <div class="wrapper-slider">
        <img
          class="img-slider zoom"
          data-set="1"
          src="./image/avatar1.png"
          alt="avatar"
        />
        <img
          class="img-slider"
          data-set="2"
          src="./image/avatar2.png"
          alt="avatar"
        />
        <img
          class="img-slider"
          data-set="3"
          src="./image/avatar3.png"
          alt="avatar"
        />
        <img
          class="img-slider"
          data-set="4"
          src="./image/avatar4.jpeg"
          alt="avatar"
        />
      </div>
      <button class="btn-left">
        <i class="fas fa-chevron-left arrow"></i>
      </button>
      <button class="btn-right">
        <i class="fas fa-chevron-right arrow"></i>
      </button>
    </div>
  </div>
</section> -->
