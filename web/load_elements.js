var xhttp = new XMLHttpRequest();
xhttp.open("GET", "/nav", false);
xhttp.send();
$('#nav').html(xhttp.responseText);
