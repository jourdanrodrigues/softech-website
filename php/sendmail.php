<!DOCTYPE html>
<html>
	<head>
            <meta charset="utf-8" />
	</head>
	<body>
		<?php
		$meuEmail="softechtecnologia@gmail.com";
		$nome=$_POST['nome'];
		$remetente=$_POST['email'];
		$assunto=$_POST['assunto'];
		$mensagem=$_POST['mensagem'];
		$mensagemEmail="Este é um contato realizado através da versão \"Desktop\" do site \"http://www.softech.hol.es\", por $nome, com as seguintes informações:\n\nNome: $nome\nE-mail: $remetente\nAssunto: $assunto\n\nMensagem: $mensagem";
		$sucesso="/envio-de-email/enviado-com-sucesso.php";
		$erro="/envio-de-email/erro-ao-enviar.php";
		if($_SERVER['SERVER_ADDR']=='::1'||$_SERVER['SERVER_ADDR']=='127.0.0.1'){
                    $pathLocal="/site-softech";
                    $sucesso=$pathLocal.$sucesso;
                    $erro=$pathLocal.$erro;
		}
		echo mail("$meuEmail,$remetente","$assunto - Enviado do site da Softech","$mensagemEmail")?
                    "<span class='retorno' data-type='success'>E-mail enviado com sucesso!</span>":
                    "<span class='retorno' data-type='error'>Ocorreu um erro ao enviar!</span>";
		?>
	</body>
</html>