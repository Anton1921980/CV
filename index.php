<?php
$action = $_SERVER['REQUEST_URI'];
//static routes
if ($action == '/'){
    include ('src/views/layout.php');
}
elseif ($action == '/main'){
    include ('src/views/layout.php');
}
elseif ($action == '/contacts'){
    include ('src/views/layout.php');
}
elseif ($action == '/skills'){
    include ('src/views/layout.php');
}
elseif ($action == '/about'){
    include ('src/views/layout.php');
}
elseif ($action == '/useful'){
    include ('src/views/layout.php');
}
elseif ($action == '/hearingAids'){
    include ('hearingAids.php');
}
elseif ($action == '/service'){
    include ('service.php');
}
elseif ($action == '/accessories'){
    include ('accessories.php');
}
elseif ($action == '/observation'){
    include ('observation.php');
}
elseif ($action == '/phone'){
    include ('phone.php');
}
elseif ($action == '/pro'){
    include ('index.html');
}
elseif ($action == '/admin'){
    include ('admin/index.php');
}
elseif ($action == '/adminka'){
    include ('halo.php');
}
elseif ($action == '/admin2'){
    include ('admin2/index.php');
}
elseif ($action == '/test'){
    include ('useful3.php');
}
//dinamic routes
elseif (preg_match('/test\/\.*/',$action)||preg_match('/useful\/\.*/',$action)||preg_match('/products\/\.*/',$action)){
    include ('page.php');
}
else{
    include ('src/views/layout.php');
};
