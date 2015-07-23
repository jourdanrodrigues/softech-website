<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="description" content="Veja quais serviços especializados em Microcomputadores, Notebooks e Netbooks nós oferecemos. Clique aqui!" />
		<meta name="author" content="Thiago Jourdan" />
		<title>Produtos e Serviços - Softech</title>
		<?php
			$pathLocal="/site-softech";
			if($_SERVER['SERVER_ADDR']=='::1'||$_SERVER['SERVER_ADDR']=='127.0.0.1'){
		?>
		<link rel="stylesheet" href="<?php echo $pathLocal ?>/css.css" />
		<link rel="shortcut icon" href="<?php echo $pathLocal ?>/img/icon.ico" />
		<script src="<?php echo $pathLocal ?>/js/jQuery.js"></script>
		<script src="<?php echo $pathLocal ?>/js/var.js"></script>
		<script src="<?php echo $pathLocal ?>/js/js.js"></script>
		<?php
			}else{
		?>
		<link rel="stylesheet" href="/css.css" />
		<link rel="shortcut icon" href="/img/icon.ico" />
		<script src="/js/jQuery.js"></script>
		<script src="/js/var.js"></script>
		<script src="/js/js.js"></script>
		<?php
			}
		?>
		<!-- Início do Chat Online -->
		<script data-cfasync="false">
			/*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
			f[z]=function(){(a.s=a.s||[]).push(arguments)};var a=f[z]._={
			},q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
			f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
			0:+new Date};a.P=function(u){
			a.p[u]=new Date-a.p[0]};function s(){
			a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
			hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
			return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
			b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
			b.contentWindow[g].open()}catch(w){
			c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
			var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
			b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})
			({loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
			/* custom configuration goes here (www.olark.com/documentation) */
			olark.identify('7364-449-10-2021');/*]]>*/
		</script>
		<!-- Fim do Chat Online -->
		<!--[if lte IE 9]>
			<script>ie();</script>
		<![endif]-->
		<style>
			table{border-radius:20px;}
			table,tr,td,th{border:solid thin #666;}
			.top{border-radius:20px 20px 0 0;}
			.bottom-left{border-radius:0 0 0 20px;}
			.bottom-right{border-radius:0 0 20px 0;}
			.itemsrvc{
				border-radius:5px;
				padding:5px;
				text-decoration:none;
				cursor:pointer;
				color:#5071F4;
				transition:.3s;}
			.itemsrvc:hover{
				box-shadow:0 2px 5px #2040C1;
				color:#BDCBF9;
				background:#5071F4;
				transition:.3s;}
		</style>
	</head><!-- Head -->
	<body>
		<div id="topo"></div><!-- Topo --><!-- Copiado de index.html -->
		<div id="corpo" style="width:100%">
			<div id="esquerda" align="center"></div><!-- Copiado de index.html -->
			<div id="meio">
				<table id="texto" align="center" width=100% cellpadding=10px>
					<th colspan=2 class="top" align="center" bgcolor="#5071f4">Manutenção em Geral</th>
					<tr align="center" bgcolor="#BDCBF9">
						<td colspan=2><a class="itemsrvc">Manutenção Básica em Hardware, Software e Periféricos de Microcomputadores</a></td>
					</tr>
					<th align="center" colspan=2 bgcolor="#5071f4">Serviços em Software</th>
					<tr align="center" bgcolor="#BDCBF9">
						<td width=50%><a class="itemsrvc">Reinstalação de SO</a></td>
						<td width=50%><a class="itemsrvc">Produção e Instalação de Software</a></td>
					</tr>
					<tr align="center" bgcolor="#BDCBF9">
						<td width=50%><a class="itemsrvc">Sistema de Backup</a></td>
						<td width=50%><a class="itemsrvc">Recuperação de Arquivos</a></td>
					</tr>
					<th align="center" colspan=2 bgcolor="#5071f4">Serviços em Hardware</th>
					<tr align="center" bgcolor="#BDCBF9">
						<td width=50%><a class="itemsrvc">Limpeza de Hardware</a></td>
						<td width=50%><a class="itemsrvc">Recuperação de Hardwares em Geral</a></td>
					</tr>
					<th align="center" colspan=2 bgcolor="#5071f4">Web Development</th>
					<tr align="center" bgcolor="#BDCBF9">
						<td width=50%><a class="itemsrvc">DHTML, ou HTML5</a></td>
						<td width=50%><a class="itemsrvc">Biblioteca jQuery</a></td>
					</tr>
					<tr align="center" bgcolor="#BDCBF9">
						<td width=50% class="bottom-left"><a class="itemsrvc">PHP</a></td>
						<td width=50% class="bottom-right"><a class="itemsrvc">Formas de contato automatizadas</a></td>
					</tr>
				</table>
			</div>
			<div id="direita" align="center"></div><!-- Copiado de index.html -->
		</div><!-- Corpo -->
		<div id="rodape"></div><!-- Copiado de index.html -->
	</body>
</html>