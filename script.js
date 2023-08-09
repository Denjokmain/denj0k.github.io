$('.content').load("main.html");

if (window.location.hash == '') {
    window.location.hash = 'main'
}

function loadContent() {
    $('.content').load(window.location.hash.slice(1) + '.html');
}


loadContent()
window.onhashchange = loadContent