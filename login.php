<?php


session_start();
$id = $_POST['userID'];
$pwd = '123';
$sName = 'sssd';
if(!empty($_POST['userID'])&& !empty($_POST['userPwd'])){
    if($_POST['userID'] == $id && $_POST['userPwd'] == $pwd){
        $_SESSION['is_login'] = true;
        $_SESSION['nickname'] = 'Jnamelight';

        setcookie("MyCookie", $id);
        header('Location: index.html');
        exit;
    }
}

?>
