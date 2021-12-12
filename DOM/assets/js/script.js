function toggleDarkMode(){
    document.querySelector('h1').classList.toggle('dark-mode')
    document.querySelector('#mode-selector').classList.toggle('dark-mode')
    document.querySelector('body').classList.toggle('dark-mode')
    document.querySelector('footer').classList.toggle('dark-mode')

    if(document.querySelector('h1').classList.contains('dark-mode')){
        document.querySelector('#page-title').innerHTML = 'Dark Mode ON';
        document.querySelector('#mode-selector').innerHTML = 'Light Mode';
    } else {
        document.querySelector('#page-title').innerHTML = 'Light Mode ON';
        document.querySelector('#mode-selector').innerHTML = 'Dark Mode';
    }
}

document.querySelector('#mode-selector').addEventListener('click', toggleDarkMode);