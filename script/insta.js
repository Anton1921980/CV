// ==UserScript==
// @name        New script 
// @namespace   Violentmonkey Scripts
// @match       https://www.instagram.com/fightsmart_192/
// @grant       none
// @version     1.0
// @author      -
// @description 07.09.2021, 15:22:20
// ==/UserScript==

function unfollow() {
  window.onload = function () {
    setTimeout(function () {//пауза чтобы загрузилась страница
      let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
      btn0.addEventListener("click", clk0);
      btn0.click();
      function clk0() {
        console.log("open");
        var i = 1;

        var inte = setInterval(() => {

          let scrollWindow = document.querySelector(".isgrP");
          scrollWindow.scrollBy(0, 500);

          setTimeout(function () {

            let btn = document.querySelectorAll("button.L3NKy");

            doSomething();

            function doSomething() {               

              btn[i].addEventListener("click", clk);
              btn[i].click();
              function clk() {
                console.log("OPEN")

                let btn2 = document.querySelector("button.aOOlW.-Cab_");
                btn2.addEventListener("click", clk2);
                btn2.click();
                function clk2() {
                  console.log("DEL");
                }
              }
            }                  
          }, 3000)
          i = i + 2;
          if (i >= 60) clearInterval(inte);

          console.log(i)

        }, 7000);
        
        setTimeout(function () {

          location.reload()

        }, 150000)
      }
    }, 15000)
  }
}

unfollow()


//  var inte2 = setInterval(() => { 
//    setTimeout(function () {

//      // location.reload()},50000)
//     unfollow()  

//  }, 80000);

//    var  j=j+1;
//     if (j >= 3) clearInterval(inte2);
























function unfollow() {
  window.onload = function () {
    setTimeout(function () {//пауза чтобы загрузилась страница
      let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
      btn0.addEventListener("click", clk0);
      btn0.click();
      function clk0() {
        console.log("open");
        var i = 0;
        var inte = setInterval(() => {

          //let scrollWindow = document.querySelector(".isgrP");
          //scrollWindow.scrollBy(0, 250);

          let btn1 = document.querySelector("button.L3NKy");//

          doSomething();


          function doSomething() {


            btn1.addEventListener("click", clk);
            btn1.click();
            function clk() {
              console.log("1st_button");
              let btn2 = document.querySelector("button.aOOlW");
              btn2.addEventListener("click", clk2);
              btn2.click();
              function clk2() {
                console.log("2nd_button");
              }
            }


          };
          let scrollWindow = document.querySelector(".isgrP");
          scrollWindow.scrollBy(0, 200);


          if (i == 4) clearInterval(inte);
          i++;
        }, 7000);
        setTimeout(function () { location.reload() }, 70000)
      }
    }, 15000)
  }
}

unfollow()


function unfollow() {
  window.onload = function () {
    setTimeout(function () {
      let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
      btn0.addEventListener("click", clk0);
      btn0.click();
      function clk0() {
        console.log("open");
        let timerId = setTimeout(function () {

          //let scrollWindow = document.querySelector(".isgrP");
          //scrollWindow.scrollBy(0, 250);

          let btn = document.querySelectorAll("button.L3NKy");
          let btnArr = Array.from(btn);

          var i = 0;
          var inte = setInterval(() => {
            // 	let scrollWindow = document.querySelector(".isgrP");
            // scrollWindow.scrollBy(0, 250);
            doSomething();

            if (i == 3) clearInterval(inte);
            i++;
          }, 7000);

          function doSomething() {
            console.log(i);


            btnArr[i].addEventListener("click", clk);
            btnArr[i].click();
            function clk() {
              console.log("1st_button");
              let btn2 = document.querySelector("button.aOOlW");
              btn2.addEventListener("click", clk2);
              btn2.click();
              function clk2() {
                console.log("2nd_button");
              }
            }


          };

          setTimeout(function () { location.reload() }, 70000)
        }, 8000)
        timerId();
        clearTimeout(timerId);
      }
    }, 15000)
  }
}

unfollow()










function unfollow() {
  window.onload = function () {
    setTimeout(function () {
      let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
      btn0.addEventListener("click", clk0);
      btn0.click();
      function clk0() {
        console.log("open");
        let timerId = setTimeout(function () {
          let btn = document.querySelectorAll("button.L3NKy");
          let btnArr = Array.from(btn);

          var i = 0;
          var inte = setInterval(() => {
            // 	let scrollWindow = document.querySelector(".isgrP");
            // scrollWindow.scrollBy(0, 250);
            doSomething();

            if (i == 4) clearInterval(inte);
            i++;
          }, 7000);

          function doSomething() {
            console.log(i);


            btnArr[i].addEventListener("click", clk);
            btnArr[i].click();
            function clk() {
              console.log("1st_button");
            }
            let btn2 = document.querySelector("button.aOOlW");
            btn2.addEventListener("click", clk2);
            btn2.click();
            function clk2() {
              console.log("2nd_button");
            }

          };

          setTimeout(function () { location.reload() }, 70000)
        }, 8000)
        timerId();
        clearTimeout(timerId);
      }
    }, 15000)
  }
}

unfollow()






















function unfollow() {
  window.onload = function () {
    setTimeout(function () {
      let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
      btn0.addEventListener("click", clk0);
      btn0.click();
      function clk0() {
        console.log("000");
        let timerId = setTimeout(function () {
          let btn = document.querySelectorAll("button.L3NKy");
          let btnArr = Array.from(btn);

          let i = 0;
          let inte = setInterval(() => {
            doSomething();

            if (i == 6) clearInterval(inte);
            i++;
          }, 5000);

          function doSomething() {

            console.log(i);

            btnArr[i].addEventListener("click", clk);
            btnArr[i].click();
            function clk() {
              console.log("111");
            }
            let btn2 = document.querySelector("button.aOOlW");
            btn2.addEventListener("click", clk2);
            btn2.click();
            function clk2() {
              console.log("222");
            }
          };
          setTimeout(function () { location.reload() }, 50000)
        }, 8000)
        timerId();
        clearTimeout(timerId);
      }
    }, 10000)
  }
}

unfollow()






// function unfollow() {
//     window.onload = function () {
//         setTimeout(function () {
//             let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
//             btn0.addEventListener("click", clk0);
//             btn0.click();
//             function clk0() {
//                 console.log("000");
//                 let timerId = setTimeout(function () {
//                     let btn = document.querySelectorAll("button.L3NKy");
//                     let btnArr = Array.from(btn)
//                     for (let i = 0; i <= 2; i++) {
//                         btnArr[i].addEventListener("click", clk);
//                         btnArr[i].click();
//                         function clk() {
//                             console.log("111");
//                         }
//                         let btn2 = document.querySelector("button.aOOlW");
//                         btn2.addEventListener("click", clk2);
//                         btn2.click();
//                         function clk2() {
//                             console.log("222");
//                         }
//                     }
//                     location.reload()
//                 }, 8000)
//                 timerId();
//                 clearTimeout(timerId);
//             }
//         }, 10000)
//     }
// }

// unfollow()


//insta mass unfolow
//f12 открыть консоль вставить код
//1найти кнопку подписки, нажать
//2запустить unfollow
//обновить страницу, повторить 1 и 2


// повторить с интервалом 2 секунды
let timerId = setInterval(function () {
  unfollow();
}, 2000000);
// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 6000000);



function unfollow() {
  let btn0 = document.querySelector('a[href="/fightsmart_192/following/"]')
  btn0.addEventListener("click", clk0);
  btn0.click();
  function clk0() {
    console.log("000");
    let timerId = setTimeout(function () {
      let btn = document.querySelectorAll("button.L3NKy");
      let btnArr = Array.from(btn)
      for (let i = 0; i <= 10; i++) {
        btnArr[i].addEventListener("click", clk);
        btnArr[i].click();
        function clk() {
          console.log("111");
        }
        let btn2 = document.querySelector("button.aOOlW");
        btn2.addEventListener("click", clk2);
        btn2.click();
        function clk2() {
          console.log("222");
        }
      }
      location.reload()
    }, 8000)
    timerId();
    clearTimeout(timerId);
  }

}

unfollow()