let watchNow = document.getElementById('watchNowButton');
let enterPlayareaBtn = document.getElementById('epBtn');
let mainPage = document.getElementById('MainPage');
let vidPlayerforPage = document.getElementById('videoPlayArea');
let body = document.getElementById('body');


function getVidPlayer() {
    mainPage.style.display = 'none';
    vidPlayerforPage.style.display = 'flex';
    playVid()
}

function returnToMainPage() {
    exitFullscreen()
    pauseVid()
    mainPage.style.display = 'flex';
    vidPlayerforPage.style.display = 'none';
}

watchNow.addEventListener('click', () => {
    getVidPlayer();
})