<?php

    include('conexao.php');

    $ip = $_SERVER['REMOTE_ADDR'];

    $sql = "SELECT * FROM ips WHERE ip = '$ip'";

    $resultado = mysqli_query($conexao, $sql);

    $linhas = mysqli_num_rows($resultado);

    if($linhas > 0){
        $registrado = 'sim';
        exit;
    }else{
        $sql_insert = "INSERT INTO ips (ip) VALUES ('$ip')";
        $resultado_insert = mysqli_query($conexao, $sql_insert);
    }

    if($resultado_insert){
       $dados = array('deu bom');
    } else {
        $dados = array('deu bom',
     mysqli_error($resultado_insert));
    }   
    echo json_encode($dados, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);