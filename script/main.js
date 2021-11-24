
// появление контента
(function () {
    $(".logo-name").css("margin-left", "-100px")
    $(".logo-name").animate({ "margin-left": "10px" }, 1000).delay("600");
    $(".top-menu").css("margin-top", "-100px")
    $(".top-menu").delay("2000").animate({ "margin-top": "0px" }, 1000);

    // $(".top-menu").hide().slideDown(2000);
})();







const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
let bodyColor = rootStyles.getPropertyValue('--body-color');
let linkColor = rootStyles.getPropertyValue('--link-color');
let menuColor = rootStyles.getPropertyValue('--menu-color');
let hoverColor = rootStyles.getPropertyValue('--hover-color');




//animme
if ($("#scene").length) {
    var canvas = document.querySelector("#scene"),
        ctx = canvas.getContext("2d"),
        particles = [],
        amount = 0,
        mouse = { x: 0, y: 0 },
        radius = 1;

    var colors = ["lightgray", "gray", "darktgrey", "grey", "darkgrey"];

    var copy = document.querySelector("#copy");

    var ww = canvas.width = window.innerWidth;
    var wh = canvas.height = window.innerHeight;

    function Particle(x, y) {
        this.x = Math.random() * ww;
        this.y = Math.random() * wh;
        this.dest = {
            x: x,
            y: y
        };
        this.r = Math.random() * 5 + 2;
        this.vx = (Math.random() - 0.5) * 20;
        this.vy = (Math.random() - 0.5) * 20;
        this.accX = 0;
        this.accY = 0;
        this.friction = Math.random() * 0.05 + 0.94;

        this.color = colors[Math.floor(Math.random() * 6)];
    }

    Particle.prototype.render = function () {


        this.accX = (this.dest.x - this.x) / 1000;
        this.accY = (this.dest.y - this.y) / 1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fill();

        var a = this.x - mouse.x;
        var b = this.y - mouse.y;

        var distance = Math.sqrt(a * a + b * b);
        if (distance < (radius * 70)) {
            this.accX = (this.x - mouse.x) / 100;
            this.accY = (this.y - mouse.y) / 100;
            this.vx += this.accX;
            this.vy += this.accY;
        }

    }

    function onMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function onTouchMove(e) {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }
    }

    function onTouchEnd(e) {
        mouse.x = -9999;
        mouse.y = -9999;
    }

    function initScene() {

        ww = canvas.width = window.innerWidth;
        wh = canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold " + (ww / 5) + "px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(copy.value, ww / 2, wh / 2);

        var data = ctx.getImageData(0, 0, ww, wh).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        particles = [];
        for (var i = 0; i < ww; i += Math.round(ww / 150)) {
            for (var j = 0; j < wh; j += Math.round(ww / 150)) {
                if (data[((i + j * ww) * 4) + 3] > 150) {
                    particles.push(new Particle(i, j));
                }
            }
        }
        amount = particles.length;

    }

    function onMouseClick() {
        radius++;
        if (radius === 5) {
            radius = 0;
        }
    }

    function render(a) {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < amount; i++) {
            particles[i].render();
        }
    };

    copy.addEventListener("keyup", initScene);
    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onMouseClick);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);

}


// Resources



// //remove hover on scroll
// var body = document.body,
//     timer;

// window.addEventListener('scroll', function() {
//   clearTimeout(timer);
//   if(!body.classList.contains('disable-hover')) {
//     body.classList.add('disable-hover')
//   }

//   timer = setTimeout(function(){
//     body.classList.remove('disable-hover')
//   },500);
// }, false);

//passive event listeners

let eventListenerOptionsSupported = () => {
    let supported = false;

    try {
        const opts = Object.defineProperty({}, 'passive', {
            get() {
                supported = true;
            }
        });

        window.addEventListener('test', null, opts);
        window.removeEventListener('test', null, opts);
    } catch (e) { }

    return supported;
}




const defaultOptions = {
    passive: true,
    capture: false
};
const supportedPassiveTypes = [
    'scroll', 'wheel',
    'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave',
    'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'
];
const getDefaultPassiveOption = (passive, eventName) => {
    if (passive !== undefined) return passive;

    return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
};

const getWritableOptions = (options) => {
    const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');

    return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined
        ? Object.assign({}, options)
        : options;
};

const overwriteAddEvent = (superMethod) => {
    EventTarget.prototype.addEventListener = function (type, listener, options) {
        const usesListenerOptions = typeof options === 'object' && options !== null;
        const useCapture = usesListenerOptions ? options.capture : options;

        options = usesListenerOptions ? getWritableOptions(options) : {};
        options.passive = getDefaultPassiveOption(options.passive, type);
        options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;

        superMethod.call(this, type, listener, options);
    };

    EventTarget.prototype.addEventListener._original = superMethod;
};

const supportsPassive = eventListenerOptionsSupported();

if (supportsPassive) {
    const addEvent = EventTarget.prototype.addEventListener;
    overwriteAddEvent(addEvent);
}



if ($(window).width() < 480 || $(window).height() < 480) {
    document.getElementById('changetext').innerHTML = '<i class="fa fa-phone"></i>&nbsp callback';


}

//ajax 
$('document').ready(function () {

    $.ajaxPrefilter(function (options, originalOptions, jqXHR) { options.async = true; })

    // search подключем
    $("#search").on("click", function () {
        $('head').append('<link rel="stylesheet" type="text/css" href="../search/style.css"></link>');
        $('head').append('<script defer type="text/javascript" src="../search/script.js"></script>');
    })

    // slick slider

    // $('.your-class').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     prevArrow: $('.prev'),
    //     nextArrow: $('.next'),
    // });

    //прокрутка к секции при загрузке по ссылке url

    let url = decodeURIComponent(window.location.href);
    let pathStart = url.lastIndexOf("/") + 1;
    let path = url.slice(pathStart);
    console.log("TCL: path", path)

    if (path.length > 1 && !url.includes("test") && !url.includes("useful/") && !url.includes("products/")) {
        let section = $('#' + path).offset().top;
        $('body,html').animate({
            scrollTop: section - 250
        }, 500);
    }

    $("#map").on('click', function () {
        $("#map").css("width", "100%").css("height", "350px").css("background", "none").css("margin", "-28px");
        $("#map").append('<p style="width:400px;height:350px;overflow:hidden;"><iframe id="iframeName" width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  style="border:0; margin-top: -150px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.108529559984!2d30.545837551026835!3d50.41842737096008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6b8a95e60d%3A0x75a2a4fafd8f0414!2z0LHRg9C7LiDQlNGA0YPQttCx0Ysg0J3QsNGA0L7QtNC-0LIsIDMyLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1624786387095!5m2!1sru!2sua" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p>');
    })

    // $('body').on('click', '.slide-link', function (e) {

    //     let id = $(this).attr('href');

    //     let imgUrl = `url(../image/${id}_slide.jpg)`;
    //     // $('#slider').css('background-image', imgUrl);
    //     let slider = $("#slider");

    //     // slider.toggle("slide");  
    //     // slider.css('background-image', imgUrl);
    //     // slider.toggle("slide", {direction:'right'})
    //     // $(this).animate({ 'opacity': '1' });

    //     $('#slider').animate({ 'opacity': '0' }, 200, function () {
    //         $(this).css('background-image', imgUrl);
    //         $(this).animate({ 'opacity': '1' }, 200);
    //     });
    // })



    $('.company-logo').on('click', function (e) {
        // e.preventDefault();


        bodyColor = rootStyles.getPropertyValue('--body-color');

        const bodyColor1 = rootStyles.getPropertyValue('--body-color1');
        const bodyColor2 = rootStyles.getPropertyValue('--body-color2');
        const bodyColor3 = rootStyles.getPropertyValue('--body-color3');
        const linkColor1 = rootStyles.getPropertyValue('--link-color1');
        const linkColor2 = rootStyles.getPropertyValue('--link-color2');
        const linkColor3 = rootStyles.getPropertyValue('--link-color3');
        const menuColor1 = rootStyles.getPropertyValue('--menu-color1');
        const menuColor2 = rootStyles.getPropertyValue('--menu-color2');
        const menuColor3 = rootStyles.getPropertyValue('--menu-color3');
        const hoverColor1 = rootStyles.getPropertyValue('--hover-color1');
        const hoverColor2 = rootStyles.getPropertyValue('--hover-color2');
        const hoverColor3 = rootStyles.getPropertyValue('--hover-color3');
        //записать в базу данных выбор из админки

        //тут танцы с бубнон со вторым сравнением и slice, по простому не работает
        let bodyColorValue = bodyColor.slice(1)

        if (bodyColorValue == bodyColor || bodyColorValue == bodyColor.slice(1)) {
            root.style.setProperty('--body-color', bodyColor2);
            root.style.setProperty('--link-color', linkColor2);
            root.style.setProperty('--menu-color', menuColor2);
            root.style.setProperty('--hover-color', hoverColor2);
        }
        if (bodyColorValue == bodyColor2 || bodyColorValue == bodyColor2.slice(1)) {
            root.style.setProperty('--body-color', bodyColor3);
            root.style.setProperty('--link-color', linkColor3);
            root.style.setProperty('--menu-color', menuColor3);
            root.style.setProperty('--hover-color', hoverColor3);
        }
        if (bodyColorValue == bodyColor3 || bodyColorValue == bodyColor3.slice(1)) {
            root.style.setProperty('--body-color', bodyColor1);
            root.style.setProperty('--link-color', linkColor1);
            root.style.setProperty('--menu-color', menuColor1);
            root.style.setProperty('--hover-color', hoverColor1);
        }
    })


    $("#loadMore").on('click', function (event) {
        let nextPage = parseInt($("#pageno").val()) + 1;
        $.ajax({
            type: "POST",
            url: "../pagination.php",
            data: { pageno: nextPage },
            success: function (data) {

                if (data.length > 50) {

                    $("#txtHint").remove();
                    $("#response").append(data);
                    $("#pageno").val(nextPage);

                    let id4 = `useful/${nextPage}`;

                    history.pushState(null, null, '/useful');

                    let url1 = decodeURIComponent(window.location.href);

                    let pathStart = url1.lastIndexOf("/") + 1;

                    let url2 = url.slice(0, pathStart) + id4;

                    history.pushState(url2, null, url2)

                } else {
                    $("#loader").hide();
                    $("#loadMore").hide();
                }
            },
        });
    });



    $('.phone').on('click', function (e) {
        // отменяем стандартное действие при клике
        e.preventDefault();
        // Получаем адрес страницы
        let href = $(this).attr('href');
        console.log("TCL: href", href)
        // Передаем адрес страницы в функцию
        getContent2(href, true);
        //добавляем секции id для прокрутки к ней и смены url
        // section = $(".header").offset().top;
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        // $('#bg_layer').show();

        $('#contentHolder2').slideDown('slow');
        $(".page-container-text2").attr('id', href);
        $(".page-container-text2").attr("data-href", href);
        $('.cover').css('display', 'block');
    });
});

function addScripts() {
    //sync append scrypts
    let script = document.createElement('script');
    script.src = "../pro/script/gsap.min.js";
    script.async = false;
    document.body.append(script);
    script = document.createElement('script');
    script.src = "../pro/script/script.js";
    script.async = false;
    document.body.append(script);
    //подгружаем вместе с содержимым формы ее стили и обработчики
    $('head').append('<link rel="stylesheet" type="text/css" href="../pro/style/style.css"></link>');
}

// Функция загрузки контента перезвонить
function getContent2(url, addEntry) {
    $.get(url).done(function (data) {
        addScripts();
        $('#contentHolder2').html($(data).find("#contentHolder2").html());

    });

}
//форма записаться внизу
$('.wrap-footer').on('click', function (e) {
    addScripts();
})

//загрузка статических страниц services из файлов
$('.ajax').on('click', function (e) {
    e.preventDefault();
    // Получаем адрес страницы
    let href = $(this).attr('href');
    // $("#contentHolder").css("display", "block");
    $(".page-container-text").attr('id', href);
    $(".page-container-text").attr("data-href", href);
    // Передаем адрес страницы в функцию
    getContent(href, true);
});
// });
// Добавляем обработчик события popstate,
// происходящего при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function (e) {
    // Передаем текущий URL
    getContent(location.pathname, false);
});

// Функция загрузки контента
function getContent(url, addEntry) {
    $.get(url).done(function (data) {
        //добавляем секции id для прокрутки к ней и смены url
        $(".page-container-text").append('<article class="page-container" id="contentHolder"></article')
        $('#contentHolder').html($(data).find("#contentHolder").html());
        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
        if (addEntry == true) {
            // прокрутка до текста          


            // Добавляем запись в историю, используя pushState
            history.pushState(null, null, url);
            stateData = {
                path: window.location.href,
                scrollTop: $(window).scrollTop()
            };
            window.history.replaceState(stateData, 'title', url);

            //load new page:
            stateData = {
                path: window.location.href,
                scrollTop: 0
            };
            window.history.pushState(stateData, 'title', url);

            section = $(".page-container-text").offset().top;
            $('body,html').animate({
                scrollTop: section
            }, 1000);

            // e.preventDefault();           
        }
    });
}


// else if($('#txtHint').hasClass("page")) {  
//     //прокрутка для отдельной страницы  
//     section = $('#txtHint').offset().top;
//     $('body,html').animate({
//         scrollTop: section
//     }, 500);

// }

//если сразу в браузер адрес отдельной аякс страницы
// else if (path.length > 1) {
//     // pathHTML = path.lastIndexOf(".")
//     // path2 = path.slice(0, pathHTML)
//     path2 = path.slice(0)
//     console.log("TCL: path2", path2)
//     section = $('#contentHolder').offset().top;
//     $('body,html').animate({
//         scrollTop: section
//     }, 500);
//}



//Ajax useful database sql
$('document').ready(function () {
    // if ($("#txt").length) {
    // if ($(".tabs3").length) {
    function showContent(str, scrollToAjax) {
        if (str == "") {
            document.getElementById("txtHint").innerHTML = "";
            return;
        } else {
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            if (str == "a") {
                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("txt").innerHTML = this.responseText;
                    }
                };
                // xmlhttp.open("GET", "getalluseful.php?q=" + str, true);
                xmlhttp.open("GET", "../getalluseful2.php?q=" + str, true);
            } else {
                console.log(str)
                xmlhttp.onreadystatechange = async function (str) {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("txtHint").innerHTML = await this.responseText;
                        console.log("TCL: xmlhttp.onreadystatechange -> this.responseText", this.responseText)
                        await scrollToAjax()
                    }
                };
                // xmlhttp.open("GET", "getuseful.php?q=" + str, true);
                xmlhttp.open("GET", "../getuseful2.php?q=" + str, true);
            }

            xmlhttp.send();
        }
    }

    //загрузка аякс отдельно useful страницы по урл при переходе или обновлении
    if ($("#txtHint").hasClass("page")) {
        let url = window.location.href
        let pathStart = url.lastIndexOf("/") + 1
        let path = url.slice(pathStart)
        console.log("TCL: path", path)
        showContent(path, scrollToAjax)
    }

    function scrollToAjax() {
        let section = $("#txtHint").offset().top - 300
        $('body,html').animate({
            scrollTop: section
        }, 1000)
    }

    //прячем аякс текст по клику на него
    $("body").on('click', '#txtHint', function (e) {
        $("#txtHint").remove();
        $("#txtHint").removeClass("ajax-active");
        $(".tabs3>.tabs-title").removeClass("active");
        history.pushState(null, null, '/')
    })
    // прячем аякс текст по клику на него
    $("body").on('click', '#contentHolder', function (e) {
        $("#contentHolder").remove();
    })


    // txtHint появляется
    $('body').on('click', '.useful-link', function (e) {
        e.preventDefault(); //не переход на другую страницу  
        let id = $(this).attr('href');
        let activeLink = this;
        // $("#txtHint").remove(); //прыгал див прикликах на следующие поменял на if

        function readyToShow(link) {

            if (!$("#txtHint").hasClass("ajax-active")) {
                if ($(activeLink).hasClass("title")) {
                    $("#append1").append('<div id="txtHint"></div>')
                } else if ($(activeLink).hasClass("search-text")) {
                    $("#append0").append('<div id="txtHint"></div>')
                }
                else if ($(activeLink).hasClass("useful")) {
                    $("#append2").append('<div id="txtHint"></div>')
                }

                $("#txtHint").addClass("ajax-active");

            }
            $(".useful-link").removeClass("ajax-active");
            $(activeLink).addClass("ajax-active");
        }
        readyToShow(this);
        showContent(id, scrollToAjax);

        //меняем урл при появлении аякс txtHint проверить при скроле конфликты

        let url4 = decodeURIComponent(window.location.href);
        let pathStart = url4.lastIndexOf("/") + 1
        let url3 = url4.slice(0, pathStart) + id
        history.pushState(null, null, `/`)
        if (url4.includes("products")) {
            history.pushState(null, null, `products/${id}`)
        } else {
            // history.pushState(null, null, url3)
            history.pushState(null, null, `useful/${id}`)
        }

        // infinite scroll
        let id2
        if ((window.location.href).includes('test')) {
            let url = decodeURIComponent(window.location.href);
            let pathStart = url.lastIndexOf("e") - 1
            let url2 = url.slice(0, pathStart)
            console.log("TCL: url2 ", url2)
            stateData = {
                path: url2,
                scrollTop: $(window).scrollTop()
            };
            window.history.pushState(stateData, 'title', url2);

            id2 = `test/${id}`
        }

    });
    // }
})

// click to section + history API url change + scroll
$('.nav-link').on('click', function (e) {

    if ((window.location.href).includes('test') || (window.location.href).includes('useful/') || (window.location.href).includes('products/')) {
        mainPage();
    }
    function mainPage() {
        let url2 = this.href;
        window.history.pushState(null, null, '/');
        stateData = {
            path: url2,
            scrollTop: $(window).scrollTop()
        };
        window.history.pushState(stateData, 'title', url2);
    }

    //scroll to section
    if ($("#about").length) {
        e.preventDefault();

        let id = $(this).attr('href')

        $('#' + id).attr("data-href", id)

        let section = $('#' + id).offset().top + 10;

        $(".nav-link").removeClass("activ");
        $(this).addClass("activ");

        $('body,html').animate({
            scrollTop: section
        }, 1000);
        //overwrite current entry in history to store the scroll position:
        stateData = {
            path: window.location.href,
            scrollTop: $(window).scrollTop()
        };
        window.history.replaceState(stateData, 'title', id);
        //load new page:
        stateData = {
            path: window.location.href,
            scrollTop: 0
        };
        //проверить вперед назад по истории
        //window.history.pushState(stateData, 'title', id);
        // e.preventDefault();
    }
});


// Hide Header on on scroll down

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

$(window).on('scroll', function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
$('.top-contacts').hide();
$('.top-menu-moving').hide();

function hasScrolled() {
    let st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.top-menu').css('height', '50px');
        $('.company-logo').hide();
        $('.nav-top.wide').css('margin-left', '46%');
        $('.nav-top.wide a').css('padding-bottom', '16px').css('padding-top', '15px');
        $('.top-menu-moving').css('left', '1%');
        $('.top-menu-moving').show();

    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.top-menu-moving').hide();
            $('.top-menu').css('height', '90px');
            $('.nav-top.wide a').css('padding-bottom', '35px').css('padding-top', '36px');
            // $('.top-menu-moving').css('left', '30%');
            $('.company-logo').show();
        }
    }
    lastScrollTop = st;
}
// //nav link activ move with scroll
// // jQuery(window).on('scroll', function (e) {


// // Setup a timer
// // var timeout;




// // let last_known_scroll_position = 0;
// // let ticking = false;

// function scroll_1 (e) {
//     let hT, hH, hT2, hH2, wH, wS
//     if ($('#append2>#txtHint').length) {
//         hT = $('#hide_bottom').offset().top; //блок ниже
//         hH = $('#hide_bottom').outerHeight();
//         hT2 = $('#hide_top').offset().top; //блок выше
//         hH2 = $('#hide_top').outerHeight();
//     } else if ($('#append1>#txtHint').length) {
//         hT = $('#hide_top').offset().top; //блок ниже
//         hH = $('#hide_top').outerHeight();
//         hT2 = $('#hide_top2').offset().top; //блок выше
//         hH2 = $('#hide_top2').outerHeight();
//     }
//     wH = $(window).height();
//     wS = $(this).scrollTop();

//     if ((wS > (hT + hH - wH)) || (wS < (hT2 + hH2 - wH))) {
//         $("#txtHint").remove();
//         $("#txtHint").removeClass("ajax-active");
//         $(".tabs3>.tabs-title").removeClass("active");
//         history.pushState(null, null, `/`)
//         // console.log(location.href)               
//     }
// }


// // function doSomething() {




// function scroll_2 (e) {  
//         hT = $('#useful').offset().top; //блок ниже
//         hH = $('#useful').outerHeight();
//         hT2 = $('.page-container-text2').offset().top; //блок выше
//         hH2 = $('.page-container-text2').outerHeight();
//         wH = $(window).height();
//         wS = $(this).scrollTop();
//         if ((wS > (hT + hH - wH)) || (wS < (hT2 + hH2 - wH))) {
//             $("#contentHolder").remove();
//             history.pushState(null, null, `/`)
//         }
// }
// function scroll_3 (e) {    
//         hT = $('#hide_bottom').offset().top; //блок ниже
//         hH = $('#hide_bottom').outerHeight();
//         hT2 = $('#hide_top').offset().top; //блок выше
//         hH2 = $('#hide_top').outerHeight();
//         wH = $(window).height();
//         wS = $(this).scrollTop();
//         if ((wS > (hT + hH - wH)) || (wS < (hT2 + hH2 - wH))) {
//             history.pushState(null, null, `/`)
//         }
// }
// function scroll_4 (e) { 
// $('.scroll').each(function (i, el) {
//     let top = $(el).offset().top;
//     let bottom = top + $(el).height();
//     let scroll = $(window).scrollTop();
//     let id = $(el).attr('data-href');
//     if (scroll > top && scroll < bottom) {
//         $('a.activ').removeClass('activ');
//         //overwrite current entry in history to store the scroll position:
//         stateData = {
//             path: window.location.href,
//             scrollTop: $(window).scrollTop()
//         };
//         //работает но тормозит
//         // window.history.pushState(null, null, `/`);
//         window.history.pushState(stateData, 'title', id);
//         $('a[href="' + id + '"]').addClass('activ');
//     }
// })
// }
// if ($('#txtHint').hasClass('ajax-active') && !$("#txtHint").hasClass("page")) {
//     window.addEventListener('scroll', scroll_1,once)
// }
// else if ($("#contentHolder").length && !window.location.href.includes("useful") && !$("#txtHint").hasClass("page")) {
//     window.addEventListener('scroll', scroll_2,once)
// }
// else if (window.location.href.includes("useful/")) {
//     window.addEventListener('scroll', scroll_3,once)
// }
// else if (!$('#txtHint').length && !$("#contentHolder").length && !window.location.href.includes("useful/") && !window.location.href.includes("products/")){
//     window.addEventListener('scroll', scroll_4)
// }
// // else{ 
// //     window.removeEventListener('scroll',  scroll_1)
// //     window.removeEventListener('scroll',  scroll_2)
// //     window.removeEventListener('scroll',  scroll_3)
// // }

// //     if ($("#services").length && $("#contentHolder").length && !window.location.href.includes("useful") && !$("#txtHint").hasClass("page")) {
// // // скрывает только вниз
// //         $('#contentHolder').each(function (i, el) {
// //             let top = $(el).offset().top;
// //             let bottom = top + $(el).height();
// //             let scroll = $(window).scrollTop();
// //             let id = $(el).attr('data-href');
// //             if (scroll > top && scroll < bottom) {
// //                 $("#contentHolder").remove();
// //                 history.pushState(null, null, `/`)
// //             }
// //         })
// //     }



// // }
// // window.addEventListener('scroll', function (e) {
//     //last_known_scroll_position = window.scrollY;

//     // if (!ticking) {

//     // window.setInterval( //window.requestAnimationFrame(function() {
//         // doSomething()
//         //ticking = false;
//         //})
//         // , 2000);

//     //   ticking = true;
//     // }

// // })


// // window.addEventListener('scroll', function (event) {
// //     // $(window).scroll(function(){
// //     // if (timeout) {
// //     //     window.cancelAnimationFrame(timeout);
// //     // }

// //     // // Setup the new requestAnimationFrame()
// //     // timeout = window.requestAnimationFrame(function () {     

// //     //для статей скрываем аякс содержимое после прокрутки до конца содержимого блока или вверх
// //     // проверяем чтобы не было ошибок на други страницах

// //     //сильно тормозит прокрутка если if по скролу, попоробуем по url


// // });



// // }, false);

// // });







function do_1() {
    if ($('#txtHint').hasClass('ajax-active') && !$("#txtHint").hasClass("page")) {
        let hT, hH, hT2, hH2, wH, wS
        if ($('#append2>#txtHint').length) {
            hT = $('#hide_bottom').offset().top; //блок ниже
            hH = $('#hide_bottom').outerHeight();
            hT2 = $('#hide_top').offset().top; //блок выше
            hH2 = $('#hide_top').outerHeight();
        } else if ($('#append1>#txtHint').length) {
            hT = $('#hide_top').offset().top; //блок ниже
            hH = $('#hide_top').outerHeight();
            hT2 = $('#hide_top2').offset().top; //блок выше
            hH2 = $('#hide_top2').outerHeight();
        }
        wH = $(window).height();
        wS = $(this).scrollTop();

        if ((wS > (hT + hH - wH)) || (wS < (hT2 + hH2 - wH))) {
            $("#txtHint").remove();
            $("#txtHint").removeClass("ajax-active");
            $(".tabs3>.tabs-title").removeClass("active");
            history.pushState(null, null, `/`)
            // console.log(location.href)               
        }
    }
}
function do_2() {
    if ($("#contentHolder").length && !window.location.href.includes("useful") && !$("#txtHint").hasClass("page")) {
        hT = $('#useful').offset().top; //блок ниже
        hH = $('#useful').outerHeight();
        hT2 = $('.page-container-text2').offset().top; //блок выше
        hH2 = $('.page-container-text2').outerHeight();
        wH = $(window).height();
        wS = $(this).scrollTop();
        if ((wS > (hT + hH - wH)) || (wS < (hT2 + hH2 - wH))) {
            $("#contentHolder").remove();
            history.pushState(null, null, `/`)
        }
    }

}
function do_3() {
    if (window.location.href.includes("useful/")) {
        hT = $('#hide_bottom').offset().top; //блок ниже
        hH = $('#hide_bottom').outerHeight();
        hT2 = $('#hide_top').offset().top; //блок выше
        hH2 = $('#hide_top').outerHeight();
        wH = $(window).height();
        wS = $(this).scrollTop();
        if ((wS > (hT + hH - wH)) || (wS < (hT2 + hH2 - wH))) {
            history.pushState(null, null, `/`)
        }
    }
}
//смена url при скроле, если txtHint открыт отключаем      
function do_4() {
    if (!$('#txtHint').length && !$("#contentHolder").length && !window.location.href.includes("useful/") && !window.location.href.includes("products/")) {

        $('.scroll').each(function (i, el) {
            let top = $(el).offset().top;
            let bottom = top + $(el).height();
            let scroll = $(window).scrollTop();
            let id = $(el).attr('data-href');
            if (scroll > top && scroll < bottom) {
                $('a.activ').removeClass('activ');
                //overwrite current entry in history to store the scroll position:
                stateData = {
                    path: window.location.href,
                    scrollTop: $(window).scrollTop()
                };
                //работает но тормозит
                // window.history.pushState(null, null, `/`);
                window.history.pushState(stateData, 'title', id);
                $('a[href="' + id + '"]').addClass('activ');
            }
        })
    }
}

// window.addEventListener('scroll',  function(e) {
//      window.setInterval(
//         do_4()
//        ,100);
//      window.setInterval(
//            do_1()
//         ,150);
//         window.setInterval(
//            do_2()
//         ,200);
//         window.setInterval(
//             do_3()
//         ,250);      
// })

//remove hover on scroll
var body = document.body,
    timer;
if ($(".tabs").length) {
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        if (!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover')
        }

        timer = setTimeout(function () {
            body.classList.remove('disable-hover')
        }, 500);
        timer = setTimeout(do_4(), 100)
        timer = setTimeout(do_1(), 150)
        timer = setTimeout(do_2(), 200)
        timer = setTimeout(do_3(), 250)
    }, false);
}











// navbar mobile version
$(document).ready(function () {
    $('.nav-top-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.nav-top').toggleClass('active');
        $('.nav-top').toggleClass('wide');
    });
    //phone close перенес в script.js
    // $('.nav-top-toggler2').on('click', function () {
    //     $(this).toggleClass('open'); 
    //     $('body').css('background','var(--body-color)');
    //     $('.wrap').slideUp('slow'); 
    // });
});

// our services,  tabs
let tabsTitle = document.querySelectorAll(".tabs li");
for (let i = 0; i < tabsTitle.length; i++) {
    tabsTitle[i].addEventListener('click', function () {
        const removeActive = document.querySelectorAll(".tabs li, .content1 li");
        for (let i = 0; i < removeActive.length; i++) {
            removeActive[i].classList.remove("active");
            $('#txtHint').hide();
            $(".useful-link").removeClass("ajax-active");
        }
        const tabId = this.dataset.target;
        const tab = document.getElementById(tabId);
        this.classList.add("active");
        tab.classList.add("active");
        tab.classList.add("up");
        // $(tab).slideDown()
    });
}
let tabsTitle3 = document.querySelectorAll(".tabs3 li");
for (let i = 0; i < tabsTitle3.length; i++) {
    tabsTitle3[i].addEventListener('click', function () {
        const removeActive = document.querySelectorAll(".tabs3 li");
        for (let i = 0; i < removeActive.length; i++) {
            removeActive[i].classList.remove("active");
            // $('#txtHint').hide();
        }
        this.classList.add("active");

        // $('#txtHint').show();
    });
}
let tabsTitle0 = document.querySelectorAll(".tabs0 li");
for (let i = 0; i < tabsTitle0.length; i++) {
    tabsTitle0[i].addEventListener('click', function () {
        const removeActive = document.querySelectorAll(".tabs0 li, .content0 li, .content1 li");
        for (let i = 0; i < removeActive.length; i++) {
            removeActive[i].classList.remove("active");
            $('#txtHint').hide();
        }
        const tabId = this.dataset.target;
        const tab = document.getElementById(tabId)
        // console.log("TCL:  this",  this)
        // console.log("TCL: tabId", tabId)
        // console.log("TCL: tab", tab)
        this.classList.add("active");
        tab.classList.add("active");
        tab.classList.add("up");

    });
}

// to-top
$(document).ready(function () {
    $("#to-top").hide();
    $(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 250) {
                $('#to-top').fadeIn(500);
                $('#scene').fadeOut(500);

            } else {
                $('#to-top').fadeOut("500", function () {
                    $("#to-top").removeClass('open');
                    $("#to-top").css('background', 'var(--menu-color)');
                });
            }
        });
        $('#to-top').on('click', function () {
            $(this).css('background', 'transparent')
            $(this).addClass('open');
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});

// if (window.matchMedia('(max-width: 768px)').matches && path.length > 1 && !path.includes("html")) {
// // if (window.matchMedia('(max-width: 768px)').matches) {
//     const tabsActive = document.querySelector(".tabs li.active");
//     const tabsContentActive = document.querySelector(".tabs-content li.active");
//     tabsActive.classList.remove("active");
//     tabsContentActive.classList.remove("active");
//     let tabsTitle = document.querySelectorAll(".tabs li");   

//     for (let i = 0; i < tabsTitle.length; i++) {
//         tabsTitle[i].addEventListener('click', function () {
//             if ($(".tabs li").hasClass('active') && $(".tabs li").hasClass("closeMe")) {
//                 const removeActive = document.querySelectorAll(".tabs li, .tabs-content li");
//                 for (let i = 0; i < removeActive.length; i++) {
//                     removeActive[i].classList.remove("active");
//                 }
//                 //$(".hideMeNextClick").slideUp(10)//.insertAfter(".first"); 
//                 console.log("this", this)
//                 const tabId = this.dataset.target;
//                 const tabContent = document.getElementById(tabId);
//                 this.classList.add("active");

//                 //клик повторный по активной
//                 if ($(this).hasClass("closeMe")) {
//                     console.log("закрываем")
//                     $(".hideMeNextClick").insertAfter(".first-content");
//                     $(".hideMeNextClick").removeClass("hideMeNextClick")
//                     // $(tab).insertAfter(this).addClass("hideMeNextClick")
//                     $(this).removeClass("closeMe")
//                     $(this).addClass("clicked")
//                     console.log("this", this)
//                 }
//                 //одна открыта клик по другой 
//                 else {
//                     console.log("закрываем первую открываем вторую")
//                     $(".hideMeNextClick").insertAfter(".first-content"); //закрываем и возвращаем обратно
//                     // $(this).insertAfter(".first-tab")//перемещаем открытую наверх                          
//                     $(".hideMeNextClick").removeClass("hideMeNextClick")
//                     $(tabContent).insertAfter(this).addClass("hideMeNextClick") //перемещаем и вешаем класс чтобы потом его найти и вернуть на место                     
//                     $(".closeMe").addClass("clicked")
//                     $(".tabs li").removeClass("closeMe")
//                     $(this).addClass("closeMe")
//                     console.log("this", this)
//                     //slideDown() дергает низ дива ??
//                     //открыть новый потом закрыть старый попробовать                  
//                 }
//             }
//             //первое открытие
//             else if ($(".tabs li").not(".hideMeNextClick")) {
//                 console.log("первое открытие")
//                 const removeActive = document.querySelectorAll(".tabs li, .tabs-content li");
//                 for (let i = 0; i < removeActive.length; i++) {
//                     removeActive[i].classList.remove("active");
//                     removeActive[i].classList.remove("closeMe");
//                 }
//                 console.log("this", this)
//                 const tabId = this.dataset.target;
//                 const tabContent = document.getElementById(tabId);
//                 // $(this).insertAfter(".first-tab")//перемещаем открытую наверх
//                 this.classList.add("active");
//                 $(tabContent).insertAfter(this).addClass("hideMeNextClick").fadeIn(1000)
//                 // $(tabContent).insertAfter(this).slideDown(400).addClass("hideMeNextClick")
//                 $(this).addClass("closeMe")
//                 console.log("this", this)

//             }
//         });
//     }
// }



// nav link activ, если есть эктив на скролл тогда не обязательна
// $(".click").click(function (e) {
//     e.preventDefault();
//     $("a").removeClass('activ');
//     $(this).addClass('activ');
// })



//все заголовки при первой загрузке страницы 
        // window.onload = showContent('a')


        // закгрузка все по клику
        // $('.link').click(function (e) {
        //     e.preventDefault();//не переход на другую страницу   
        //     showContent("a")
        // })

        //аякс загрузка статьи из базы
        //вешаем на боди чтобы клик был на дом элементе который появится потом аяксом


   // //tabs открываем по умолчанию одну при скроле (добавить active на useful-link ITE)

        // jQuery(window).on('scroll', function (e) {
        //     // $('body').on('scroll', function.... не работает       

        //     hT2 = $('.tabs3').offset().top, //блок выше
        //         hH2 = $('.tabs3').outerHeight(),
        //         wH = $(window).height(),
        //         wS = $(this).scrollTop();
        //     if (wS < (hT2 + hH2 - wH)) {
        //         let id = "ite"
        //         $("#txtHint").addClass("ajax-active")
        //         $("#txtHint").css("display", "block")
        //         $(".useful-link").removeClass("ajax-active");
        //         $("active").addClass("ajax-active")

        //         showContent(id)
        //     }
        // })

            // //overwrite current entry in history to store the scroll position:
            // stateData = {
            //     path: window.location.href,
            //     scrollTop: $(window).scrollTop()
            // };
            // console.log("TCL: stateData", stateData)
            // window.history.replaceState(stateData, 'title', id2);
            // //load new page:
            // stateData = {
            //     path: id2,
            //     scrollTop: 0
            // };
            // console.log("TCL: stateData2", stateData)

            // // window.history.pushState(stateData, 'title', id2);
            // // console.log("TCL: stateData3", stateData)


   // //sticky top-menu ON SCROLL

        // var aTop = $('.customize').height();
        // var aBott = $('.top-menu').height();
        // if ($(this).scrollTop() >= aTop) {
        //     $(".top-menu").addClass('top-menu-fixed').fadeIn();
        //     $(".hexagon").addClass('hexagon-fixed').fadeIn();
        //     // instead of alert you can use to show your ad
        //     // something like $('#footAd').slideup();
        // }
        // else if ($(this).scrollTop() >= aBott) {
        //     $(".top-menu").removeClass('top-menu-fixed').fadeIn();
        // };

