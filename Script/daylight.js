$(document).ready(function() 
{
   $('#mycss[rel=stylesheet]').attr('href', 'langStyleD.css');
});
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
});


///////////////////////////////////////////////////////////////////////////////////////

<link href="style.css" rel="stylesheet" type="text/css" id="mycss" />

$(document).ready(function() 
{
   $('#mycss[rel=stylesheet]').attr('href', 'style2.css');
});

/////////////////////////////////////////////////////////////////////////////////////~//

$("button[data-theme]").click(function() {
    $("head link#theme").attr("href", $(this).data("theme"));
}

*/
