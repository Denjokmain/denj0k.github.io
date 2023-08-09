$('.content').load("main.html");

window.onhashchange = function() { $('.content').load(window.location.hash.slice(1) + '.html'); }