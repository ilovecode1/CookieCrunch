var cookies = document.cookie.split(";");
for (var i = 0; i < cookies.length; i++)
eraseCookie(cookies[i].split("=")[0]); 
