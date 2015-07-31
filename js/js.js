﻿$(document).ready(function (){
	// Fade In em todas as páginas
	$('body').css('opacity', '0').fadeTo(fdTm, 1,'swing');
});
window.onbeforeunload=function (){
	// Fade Out em todas as páginas
	$('body').css('opacity', '1').fadeTo(fdTm, 0,'swing');
};
// Redirec. IE
function ie(){
	alert("É recomendado que se utilize um navegador mais atualizado, pois esta versão do navegador não suporta todas as funcionalidades.");
	location.href="http://www.google.com.br/chrome/browser/desktop/";
}
// Enviar e-mail
function verificaEmail(){
	if($('#email').val()==$('#confirmaEmail').val()){
		$('#confirmaEmail').removeClass('incorrect');
	}else{
		$('#confirmaEmail').addClass('incorrect');
	}
}
function enviarEmail(){
	if($('#confirmaEmail').hasClass('incorrect')){
		alert("A confirmação de email está incorreta!");
		$('#confirmaEmail').focus();
		$('.formEmail').submit(function(e){e.preventDefault()});
	}else{
		$('.formEmail').attr('action',mandaMail).unbind('submit');
	}
}
// Link para abrir e pôr foco em chat
function chatlink(){
	$('#habla_oplink_a').click();
	$('#habla_wcsend_input').focus();
};
// Redirecionamento para site mobile
var url_mobile='http://softechtecnologia.hol.es/m';
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
// Chat Olark
/*<![CDATA[*/window.olark||(function(c){
	var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";
	var nt=function(){
		f[z]=function(){(a.s=a.s||[]).push(arguments)};
		var a=f[z]._={},q=c.methods.length;
		while(q--){(
			function(n){
				f[z][n]=function(){f[z]("call",n,arguments)}
			}
		)(c.methods[q])}
		a.l=c.loader;
		a.i=nt;
		a.p={0:+new Date};
		a.P=function(u){a.p[u]=new Date-a.p[0]};
		function s(){
			a.P(r);
			f[z](r)
		}
		f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);
		var ld=function(){
			function p(hd){
				hd="head";
				return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")
			}
			var i="body",m=d[i];
			if(!m){return setTimeout(ld,100)}
			a.P(1);
			var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;
			n.style.display="none";
			m.insertBefore(n,m.firstChild).id=z;
			b.frameBorder="0";
			b.id=z+"-loader";
			if(/MSIE[ ]+6/.test(navigator.userAgent)){b.src="javascript:false"}
			b.allowTransparency="true";
			v[j](b);
			try{b.contentWindow[g].open()}
			catch(w){
				c[e]=d[e];
				o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";
				b[k]=o+"void(0);"
			}
			try{
				var t=b.contentWindow[g];
				t.write(p());
				t.close()
			}
			catch(x){
				b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'
			}
			a.P(2)
		}
		ld()
	}
	nt()
})
({
	loader:"static.olark.com/jsclient/loader0.js",
	name:"olark",
	methods:[
		"configure",
		"extend",
		"declare",
		"identify"
	]
});
/* custom configuration goes here (www.olark.com/documentation) */
olark.identify('7364-449-10-2021');/*]]>*/