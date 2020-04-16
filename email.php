<?php

  if(issets($_POST['email']) && !empty($_POST['email'])){

    $name = addcslashes($_POST['name']);
    $email = addcslashes($_POST['email']);
    $message = addcslashes($_POST['message']);
    $phone = addcslashes($_POST['phone'])

    $to = "contato@ilpconsultoria.com.br";
    $subject = "Contato Site"
    $body = "Nome: ".$name. "\r\n".
            "Telefone: ".$phone. "\r\n". 
            "Email: ".$email. "\r\n". 
            "Mensagem: ".$message;
    $header = "From: contact.form@ilpconsultoria.com.br"."\r\n". 
                "Reply-To:".$email."\r\n". 
                "X=Mailer:PHP/".phpversion();

  if(mail($to,$subject,$body,$header)){
    echo("Email enviado com sucesso! Em breve entraremos em contato.")
  }else{
    echo("O email não pode ser enviado. Confira suas informações!")
  }

  }

?>