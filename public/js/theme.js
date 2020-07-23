// localStorage.setItem('theme', '/css/dark-theme.css');

document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    console.log(storedTheme)
    if(storedTheme){
        themeStylesheet.href = storedTheme;
        if(storedTheme.includes('dark')) {
            document.getElementById('theme-toggle').innerText = "LIGHT MODE";
        } else {
            document.getElementById('theme-toggle').innerText = "DARK MODE";
        }
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('styles')){
            themeStylesheet.href = '/css/dark-theme.css';
            console.log(themeStylesheet.href)

            themeToggle.innerText = 'LIGHT MODE';
            localStorage.setItem('theme',themeStylesheet.href)
        } else {
            // if it's dark -> go light
            themeStylesheet.href = '/css/styles.css';
            console.log(themeStylesheet.href)
            themeToggle.innerText = 'DARK MODE';
            localStorage.setItem('theme',themeStylesheet.href)
        }
        // save the preference to localStorage

    })
})
