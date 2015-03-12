﻿// Fade em todas as páginas
$(document).ready(function (){
	$('body').css('opacity', '0').fadeTo(500, 1,'swing');
});
// Link para abrir e pôr foco em chat
function chatlink(){
	$('#habla_oplink_a').click();
	$('#habla_wcsend_input').focus();
};
// Redirecionamento para site mobile
var url_mobile = 'http://m.softechtecnologia.hol.es';
(function(a,b){
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
		window.location=b
})(navigator.userAgent||navigator.vendor||window.opera,url_mobile);
(function(i,s,o,g,r,a,m){
	i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)
	},
	i[r].l=1*new Date();
	a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];
	a.async=1;
	a.src=g;
	m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-54058374-1', 'auto');
ga('send', 'pageview');

// Requisições Ajax
$(function(){
	$.ajax({
		url:'/index.html',
		success: function(topo){topo=$(topo).find('#bg-logo-softech, #menu');$('#topo').html(topo);},
		error: function(){alert('Ocorreu um erro ao inicializar o site. \u00c9 preciso atualizar a p\u00e1gina.');}
	});
	$.ajax({
		url:'/index.html',
		success: function(esquerda){esquerda=$(esquerda).find('#esquerda #fb, #esquerda a');$('#corpo #esquerda').html(esquerda);},
		error: function(){alert('Ocorreu um erro ao inicializar o site. \u00c9 preciso atualizar a p\u00e1gina.');}
	});
	$.ajax({
		url:'/index.html',
		success: function(txtimg){txtimg=$(txtimg).find('#direita fieldset#texto');$('#direita').html(txtimg);},
		error: function(){alert('Ocorreu um erro ao inicializar o site. \u00c9 preciso atualizar a p\u00e1gina.');}
	});
	$.ajax({
		url:'/index.html',
		success: function(rodape){rodape=$(rodape).find('#rodapetext');$('#rodape').html(rodape);},
		error: function(){alert('Ocorreu um erro ao inicializar o site. \u00c9 preciso atualizar a p\u00e1gina.');}
	});
});
// Interface de Downloads
// Windows
var bits;
var zip;
var mpc;
var voltar="<p><img src='/img/l_ar.png' width='15px' height='15px' /> <a class='linkintext' onclick='def()'>Voltar</a></p>";
var xxi="<p>- <a class='linkintext' target='_blank' href='http://goo.gl/K0EsYC' title='Clique para fazer o download'>Suporte Softech</a>: Acesso rápido aos nossos contatos;</p><p>- <a class='linkintext' target='_blank' href='";
var xxii="' title='Clique para fazer o download'>7-zip</a>: Compactador/descompactador de arquivos;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/fyPhxI' title='Clique para fazer o download'>Ammyy Admin</a>: Acesso remoto;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/a7O2a6' title='Clique para fazer o download'>CCleaner</a>: Otimizador de Sistema;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/ZXoesq' title='Clique para fazer o download'>CD Burner XP</a>: Gravador de Mídia;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/47fe47' title='Clique para fazer o download'>CPU-Z</a>: Leitor de Hardware;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/ZuUODl' title='Clique para fazer o download'>Firefox</a>: Navegador;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/Qkz6Gd' title='Clique para fazer o download'>Chrome</a>: Navegador;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/CHK2U4' title='Clique para fazer o download'>HWMonitor</a>: Leitor de Hardware;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/d5Degi' title='Clique para fazer o download'>Key Finder</a>: Verificador de Serial Windows;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/1qcJSn' title='Clique para fazer o download'>LibreOffice</a>: Pacote office;</p><p>- <a class='linkintext' target='_blank' href='";
var xxiii="' title='Clique para fazer o download'>Media Player Classic</a>: Player de vídeo;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/3Sx3H8' title='Clique para fazer o download'>Microsoft Security Essentials</a>: Antivírus;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/Dm9ZG0' title='Clique para fazer o download'>Microsoft Silverlight</a>: Plugin para navegador;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/6W9zbn' title='Clique para fazer o download'>PDF Architect</a>: Leitor/Editor de PDFs;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/iyFqxV' title='Clique para fazer o download'>Personalization Panel</a>: Manipulador Windows;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/53TnGK' title='Clique para fazer o download'>TeamViewer</a>: Acesso Remoto;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/Y74RSS' title='Clique para fazer o download'>Unlocker</a>: Manipulador de arquivos;</p><p>- <a class='linkintext' target='_blank' href='http://goo.gl/t5dyx7' title='Clique para fazer o download'>µTorrent</a>: Cliente BitTorrent;</p>";
function def(){
	$('#opcoes')
	.fadeOut(500, function(){
		$(this)
		.html("<p>- Windows: <a class='linkintext' onclick='win(32);'>x86 (32 bits)</a> / <a class='linkintext' onclick='win(64);'>x64 (64 bits)</a></p><p>- Mac OS: <a class='linkintext' onclick='mountainlion()'>Mountain Lion (10.6.X)</a></p><p>- Linux: <a href='/fale-conosco.html' class='linkintext'>Diga-nos o que precisa!</a></p>")
		.fadeIn(500)
	});
}
function win(bits){
	if(bits==32){
		zip="http://goo.gl/eSFSgn";
		mpc="http://goo.gl/EDQKJn";
		$('#opcoes')
		.fadeOut(500, function(){
			$(this)
			.html("<p><h3>32 bits</h3></p>"+voltar+xxi+zip+xxii+mpc+xxiii+voltar)
			.fadeIn(500)
		})
	}else if(bits==64){
		zip="http://goo.gl/EZfmBV";
		mpc="http://goo.gl/CMnZtu";
		$('#opcoes')
		.fadeOut(500, function(){
			$(this)
			.html("<p><h3>64 bits</h3></p>"+voltar+xxi+zip+xxii+mpc+xxiii+voltar)
			.fadeIn(500)
		})
	}
}
// Mac
function os(){
	$('#opcoes')
	.html("<p>- <a class='linkintext' onclick='mountainlion'>Mountain Lion (10.6.X)</a></p>"+voltar)
	.fadeOut(0).fadeIn(1000);
}
function mountainlion(){
	$('#opcoes')
	.html("<p>- <a class='linkintext' target='_blank' href='http://goo.gl/nSeYxU' title='Clique para fazer o download'>LibreOffice</a>: Pacote office;</p>"+voltar)
	.fadeOut(0).fadeIn(1000);
}