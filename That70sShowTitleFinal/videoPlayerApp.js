let videoBox = document.getElementById('videoBox');

let videoContainer = document.getElementById('videoContainer')
let controlsContainer = document.querySelector('.videoContainer .controls');

let playButton = document.getElementById('playButton');
let pauseButton = document.getElementById('pauseButton');

let currentTimeView = document.getElementById('currentTime')
var durationTimeView = document.getElementById("videoDuration");

let mute = document.getElementById('mute');

let progressBar = document.querySelector('.videoContainer .progress .progressBar');
let watchedBar = document.querySelector('.videoContainer .progress .progressBar .watchedBar');
let timeLeft = document.querySelector('.videoContainer .progress .timeRemaining');

let fullScreenbutton = document.getElementById('fullScreenbutton');
let fullscreenPage = document.getElementById('fullScreenbutton');
let fullscreenExit = document.getElementById('exitFullScreenbutton');

let rewindButton = document.getElementById('rewindButton')
let fastForwardButton = document.getElementById('fastForwardButton')

// --------------------------------------------------------------------------------



// play and pause functions 
let playPauseStatus = 0
    //1 = either pause video or video is currently on pause
    //0 = either play video or video is currently playing

function playVid() {
    videoBox.play();
    playPauseStatus = 0
    playButton.style.visibility = 'hidden';
    pauseButton.style.visibility = 'visible';
}

function pauseVid() {
    videoBox.pause();
    playPauseStatus = 1
    playButton.style.visibility = 'visible';
    pauseButton.style.visibility = 'hidden';
}

function playPause() {
    if (playPauseStatus === 1) {
        playVid()
    } else if (playPauseStatus === 0) {
        pauseVid()
    }
}



//Mute and Unmute
let muteUnmuteStatus = 0
    // 0 = mute Video or the video is currently muted
    // 1 = unmute Video or the video is currently unmuted

function muteVideo() {
    videoBox.muted = true;
    muteUnmuteStatus = 0
    muteButton.style.visibility = 'hidden';
    unmuteButton.style.visibility = 'visible';
    document.getElementById('muteText').innerHTML = 'Unmute'
}

function unmuteVideo() {
    videoBox.muted = false;
    muteUnmuteStatus = 1
    muteButton.style.visibility = 'visible';
    unmuteButton.style.visibility = 'hidden';
    document.getElementById('muteText').innerHTML = 'Mute'
}

function muteUnmute() {
    if (muteUnmuteStatus === 0) {
        unmuteVideo()
    } else if (muteUnmuteStatus === 1) {
        muteVideo()
    }
}



// Current video time and video duration
videoBox.addEventListener('timeupdate', function() {
    var curMins = Math.floor(videoBox.currentTime / 60);
    var curSecs = Math.floor(videoBox.currentTime - curMins * 60);
    if (curSecs < 10) { curSecs = "0" + curSecs; }
    if (curMins < 10) { curMins = "0" + curMins; }
    currentTimeView.innerHTML = curMins + ":" + curSecs;
});

videoBox.addEventListener('timeupdate', function() {
    var durMins = Math.floor(videoBox.duration / 60);
    var durSecs = Math.floor(videoBox.duration - durMins * 60);
    if (durSecs < 10) { durSecs = "0" + durSecs; }
    if (durMins < 10) { durMins = "0" + durMins; }
    durationTimeView.innerHTML = durMins + ":" + durSecs;
});



// progress and seek bar with time left 
watchedBar.style.width = '0px';

videoBox.addEventListener('timeupdate', () => {
    watchedBar.style.width = ((videoBox.currentTime / videoBox.duration) * 100) + '%';
    // TODO: calculate hours as well...
    let totalSecondsRemaining = videoBox.duration - videoBox.currentTime;
    // THANK YOU: BEGANOVICH
    let time = new Date(null);
    time.setSeconds(totalSecondsRemaining);
    let hours = null;

    if (totalSecondsRemaining >= 3600) {
        hours = (time.getHours().toString()).padStart('2', '0');
    }

    let minutes = (time.getMinutes().toString()).padStart('2', '0');
    let seconds = (time.getSeconds().toString()).padStart('2', '0');

    timeLeft.textContent = `${hours ? hours : '00'}:${minutes}:${seconds}`;
});

progressBar.addEventListener('click', (event) => {
    let pos = (event.pageX - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) / progressBar.offsetWidth;
    videoBox.currentTime = pos * videoBox.duration;
});

rewindButton.addEventListener('click', () => {
    videoBox.currentTime -= 10;
});

fastForwardButton.addEventListener('click', () => {
    videoBox.currentTime += 10;
});



// fullscreen and exit fullscreen
let fullScreenStatus = 0
    //1 = either request fullscreen video or video is currently on fullscreen
    //0 = either exit fullscreen video or video is not on fullscreen
let requestFullscreen = function(videoContainer) {
    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
    } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
    fullScreenbutton.style.visibility = 'hidden';
    exitFullScreenbutton.style.visibility = 'visible';
    fullScreenStatus = 0


};

let exitFullscreen = function() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
    fullScreenbutton.style.visibility = 'visible';
    exitFullScreenbutton.style.visibility = 'hidden';
    fullScreenStatus = 1
};

fullscreenPage.addEventListener('click', function(e) {
    e.preventDefault();
    requestFullscreen(document.documentElement);
    fullScreenbutton.style.visibility = 'hidden';
    exitFullScreenbutton.style.visibility = 'visible';

});

fullscreenExit.addEventListener('click', function(e) {
    e.preventDefault();
    exitFullscreen();
    fullScreenbutton.style.visibility = 'visible';
    exitFullScreenbutton.style.visibility = 'hidden';
});

function fullscreenExitFullscreen() {
    if (fullScreenStatus === 1) {
        requestFullscreen(document.documentElement);
    } else if (fullScreenStatus === 0) {
        exitFullscreen();
    }
}


// display controls
let controlsTimeout;
controlsContainer.style.opacity = '0';

let displayControls = () => {
    controlsContainer.style.opacity = '1';
    document.body.style.cursor = 'initial';
    if (controlsTimeout) {
        clearTimeout(controlsTimeout);
    }
    controlsTimeout = setTimeout(() => {
        controlsContainer.style.opacity = '0';
        document.body.style.cursor = 'none';
    }, 2500);
};



// displaying and controling the controls on mouse move and key buttons
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        playPause();
    }
    if (event.code === 'KeyM') {
        muteUnmute();
    }
    if (event.code === 'KeyF') {
        fullscreenExitFullscreen()
    }
    if (event.code === 'ArrowLeft') {
        videoBox.currentTime -= 10;
    }
    if (event.code === 'ArrowRight') {
        videoBox.currentTime += 10;
    }

    displayControls();
});

// return to the title page * leave the pop up *

window.addEventListener('mousemove', () => {
    displayControls();
});



videoBox.addEventListener('dblclick', () => {
    doubleClickFullScreen()
});

// ----------------------
// ----------------------
// ----------------------




function EpBtnName() {
    document.getElementsByClassName('btTitle')
}

function firstVideo() {
    document.getElementById("1").click();
}


// Episode selector + Episode Info, next and last episode, and auto play next episode Function
let dirStatus = undefined
let videoBox = document.getElementById("videoBox")


// Episode selector
function chnageToSourceTwo(episode) {
    videoBox.src = episode.epSrc;
    document.getElementById("episodeNumber").innerHTML = `Episode ${episode.epNumber}`;
    document.getElementById("episodeTitle").innerHTML = episode.epTitle;
    dirStatus = episode.status

    // auto play next episode Function
    videoBox.onended = function() {
        document.getElementById(dirStatus + 1).click();
    };
}

//Last episode button Function
function previousEp() {
    document.getElementById(dirStatus - 1).click();
}

//Next episode button Function
function nextEp() {
    document.getElementById(dirStatus + 1).click();
}




// ----------------------------------------------------


let homeTitleArea = document.getElementById('comeBackToMe');

let videoPlayerOpenButton = document.getElementById('episodeButton');
let backButton = document.getElementById('returnbutton');

function enterVideoPlayerAndPlayVideo() {
    videoContainer.style.display = 'flex';
    homeTitleArea.style.display = 'none';

}

function returnToHomeTitlePage() {
    pauseVid();
    videoContainer.style.display = 'none';
    homeTitleArea.style.display = 'flex';
}