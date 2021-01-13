<?php

    include('conexao.php');

    $ip = $_SERVER['REMOTE_ADDR'];

    $sql = "SELECT * FROM ips WHERE ip = '$ip'";

    $resultado = mysqli_query($conexao, $sql);

    $linhas = mysqli_num_rows($resultado);

    if($linhas > 0){
        exit;
        $registrado = 'sim';
    }else{
        $sql_insert = "INSERT INTO ips (ip) VALUES ('$ip')";
        $resultado_insert = mysqli_query($conexao, $sql_insert);
    }