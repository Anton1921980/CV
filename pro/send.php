<?php
// Файлы phpmailer
// require 'phpmailer/PHPMailer.php';
// require 'phpmailer/SMTP.php';
// require 'phpmailer/Exception.php';
require $_SERVER['DOCUMENT_ROOT'].'/pro/phpmailer/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'].'/pro/phpmailer/SMTP.php';
require $_SERVER['DOCUMENT_ROOT'].'/pro/phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['texta'];
$file = $_FILES['file'];
$body = $_POST['body'];

// Формирование самого письма
$title = "тема";
$body = "
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$text<br>
";

// Валидация почты
if (filter_var($email, FILTER_VALIDATE_EMAIL)||filter_var($phone, FILTER_SANITIZE_NUMBER_INT)) {

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    // $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    // $mail->SMTPAuth   = true;
    // $mail->Host = 'ssl://smtp.gmail.com';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->Username = 'kuzovik1@gmail.com';
    $mail->Password = 'Kikboxing192';
    $mail->setFrom("kuzovik1@gmail.com","life-sound");
    // $mail->isHTML(true);//HTML формат
    // $mail->Subject = "Тема сообщения";
    // $mail->Body    = "Содержание сообщения";
    // $mail->AltBody = "Альтернативное содержание сообщения";

    // $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    // $mail->Username   = 'your_login'; // Логин на почте
    // $mail->Password   = 'password'; // Пароль на почте
    // $mail->SMTPSecure = 'ssl';
    // $mail->Port       = 465;
    // $mail->setFrom('mail@yandex.ru', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mywear1@gmail.com');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
// $mail->Text = $text;
$mail->Body = $body;    
$mail->AltBody = $text;
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
} else {
	$result = "email";
}
// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>