$('.header').load("header.html");
const themeSwitchBtn = document.querySelector('#theme-checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'light') {themeSwitchBtn.checked = true}
} else {
    document.documentElement.setAttribute('data-theme', 'dark')
}

function switchTheme() {
    let theme = themeSwitchBtn.checked ? 'light':'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}

themeSwitchBtn.addEventListener('change', switchTheme, false)
switchTheme()
