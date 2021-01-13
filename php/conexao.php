<?php 

    include('config.php');

    $conexao = mysqli_connect($host, $user, $senha, $banco);
    mysqli_set_charset($conexao,"utf8");