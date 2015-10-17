function eraseCookie(e){document.cookie=e+"=; Max-Age=0"}
var cookies = document.cookie.split(";");
for (var i = 0; i < cookies.length; i++)
eraseCookie(cookies[i].split("=")[0]); 
