<?php

    include('conexao.php');

    if($conexao){

        $request = $_POST;

        if($request['nome'] == '' ||  $request['msg'] == '' || $request['nota'] == '' || $request['voto'] == '' ){

            $dados = array(
                'mensagem' => 'Há campos em vazios que precisam ser preenchidos',
                'icone' => 'error'
            );
            echo json_encode($dados, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
            exit;

        } else{

            $sql = "INSERT INTO contatadores (nome, email, mensagem, nota, voto) VALUES (" . '"' . $request['nome'] . '", ' . '"' . $request['email'] . '", ' . '"' . $request['msg'] . '", ' . $request['nota'] . ", " . '"' . $request['voto'] . '"' . ")";

        }

        $resultado = mysqli_query($conexao, $sql);
        
        if($resultado){
            $dados = array(
                'mensagem' => "Feedback enviado com êxito",
                'icone' => 'success'
            );
        } else {
            $dados = array(
                'mensagem' => "Não foi possível enviar o feedback",
                'icone' => 'error'
            );
        }       
        
        mysqli_close($conexao);
    }

    echo json_encode($dados, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);