const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toogleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})