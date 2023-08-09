function changeLocation(attr) {
    // let oldUrl = $(this).attr("href"); // Get current url
    // let newUrl = oldUrl.replace("http://", "https://"); // Create new url
    // $(this).attr("location", attr);
    window.location.hash = attr
}

console.log($(location).attr('href'))
$('.content').load("main.html");

window.onhashchange = function() { $('.content').load(window.location.hash.slice(1) + '.html'); }