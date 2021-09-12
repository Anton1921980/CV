
$(document).ready(function () {
    $("#display").css("display","none");
    // Обработчик события keyup, сработает после того как пользователь отпустит кнопку, после ввода чего-либо в поле поиска.
    // Поле поиска из файла 'index.php' имеет id='search'
    $("#search").keyup(function () {
        // Присваиваем значение из поля поиска, переменной 'name'.
        var name = $('#search').val();
        // Проверяем если значение переменной 'name' является пустым
        if (name === "") {
            // Если переменная 'name' имеет пустое значение, то очищаем блок div с id = 'display'
            $("#display").html("");
        }
        else if (name.length > 1) {
            // Иначе, если переменная 'name' мин 2 символа, то вызываем ajax функцию.     


            $.ajax({
                type: "POST", // Указываем что будем обращатся к серверу через метод 'POST'
                url: "./search/handler.php", // Указываем путь к обработчику. То есть указывем куда будем отправлять данные на сервере.
                data: {
                    // В этом объекте, добавляем данные, которые хотим отправить на сервер
                    search: name // Присваиваем значение переменной 'name', свойству 'search'.
                },
                success: function (response) {
                    //перерисовать только если response изменился ???   
                    //дебаунсер чтобы успел 2-3 буквы написать ???          
                    
                    // Если ajax запрос выполнен успешно, то, добавляем результат внутри div, у которого id = 'display'.
                    $("#display").css('display','flex')
                    $("#display").html(response).show();
                  
                    $('body,html').animate({
                        scrollTop: 0
                    }, 500);
                    // $('.cover').css('display','block');
                    $("#display").prepend('<div id="close"></div>')
                    $("#close").html('<div style="color: var(--link-color)">Результати пошуку</div><div class="nav-top-toggler3" data-toggle="collapse" data-target="#collapsibleNavbar3"><span></span><span></span><span></span></div>')
                    $("#display").show('slow');
                  
                    // $('body').css('background','rgba(0,0,0,.68)'); 
                    // $('.nav-top-toggler3').css('display','block') 
                    $(document).ready(function () {
                        $('.nav-top-toggler3').on('click', function () {
                            // $(this).toggleClass('open'); 
                            // $('body').css('background','var(--body-color)'); 
                            $('#display').hide()
                            $(this).slideUp('slow')
                            // $('.cover').css('display','none');
                        });
                    });
                }

            });
        }
    });
});

function fill(Value) {
    // Функция 'fill', является обработчиком события 'click'.
    // Она вызывается, когда пользователь кликает по элементу из результата поиска.

    $('#search').val(Value); // Берем значение элемента из результата поиска и добавляем его в значение поля поиска

    $('#display').hide(); // Скрываем результаты поиска

}
