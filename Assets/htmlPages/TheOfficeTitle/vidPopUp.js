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

// ----------------------------------------------------------------
// background image change
// ----------------------------------------------------------------

let bcg1 = "BgndSlidShow1.png";
let bcg2 = "BgndSlidShow2.png";
let bcg3 = "BgndSlidShow3.png";
let bcg4 = "BgndSlidShow4.png";
let bcg5 = "BgndSlidShow5.png";
let bcg6 = "BgndSlidShow6.png";
let bcg7 = "BgndSlidShow7.png";
let bcg8 = "BgndSlidShow8.png";
let bcg9 = "BgndSlidShow9.png";
let bcg10 = "BgndSlidShow10.png";
let bcg11 = "BgndSlidShow11.png";

let countInt = 1;

let currentImgOnBcg = `BgndSlidShow${countInt}.png`

setInterval(bcgChanger, 3000);

function bcgChanger() {
    if (countInt < 11) {
        countInt = countInt + 1;
        console.log(`BgndSlidShow${countInt}.png`);
        body.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0 100%), url(../../../Images/SlideShowBackgroundImages/TheOffice/BgndSlidShow${countInt}.png)`;
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.transition = 'all 5s';

    } else if (countInt === 11) {
        countInt = 1;
    }
    // countInt = countInt + 1;
    // console.log(`BgndSlidShow${countInt}.png`);
    // body.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0 100%), url(../../../Images/SlideShowBackgroundImages/TheOffice/BgndSlidShow${countInt}.png)`;
    // body.style.backgroundRepeat = 'no-repeat';
    // body.style.backgroundSize = 'cover';

}