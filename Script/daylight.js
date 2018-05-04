$('.dn').click(function(){
   $('link[href="Style/langStyleD"]').attr('href','langStyleD.css');
}
/*

<button id="original">Original</button><br />
<button id="grayscale">Grayscale</button>
Now when the site is loaded it loads with style1.css (main/original theme)

<link rel="stylesheet" type="text/css" href="style1.css">


60
down vote
accepted
$('#grayscale').click(function (){
   $('link[href="style1.css"]').attr('href','style2.css');
});
$('#original').click(function (){
   $('link[href="style2.css"]').attr('href','style1.css');
});*/
