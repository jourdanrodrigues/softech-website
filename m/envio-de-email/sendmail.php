<?php
$meuEmail="softechtecnologia@gmail.com";
$nome=$_POST['nome'];
$remetente=$_POST['email'];
$assunto=$_POST['assunto'];
$mensagem=$_POST['mensagem'];
$mensagemEmail="Este é um contato realizado através da versão \"Mobile\" do site \"http://www.softech.hol.es\", por $nome, com as seguintes informações:\n\nNome: $nome\nE-mail: $remetente\nAssunto: $assunto\n\nMensagem: $mensagem";
$sucesso="/m/envio-de-email/enviado-com-sucesso.php";
$erro="/m/envio-de-email/erro-ao-enviar.php";
if($_SERVER['SERVER_ADDR']=='::1'||$_SERVER['SERVER_ADDR']=='127.0.0.1'){
    $pathLocal="/site-softech";
    $sucesso=$pathLocal.$sucesso;
    $erro=$pathLocal.$erro;
}
header("Location:".(mail("$meuEmail,$remetente","$assunto - Enviado do site da Softech","$mensagemEmail")?$sucesso:$erro));