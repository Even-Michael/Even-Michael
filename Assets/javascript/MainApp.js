let dirStatus = undefined
let altStatus = undefined
let vid = document.getElementById('videoBox');
let EpNumberChanger = document.getElementById("episodeNumber");
let RandomEpisodeBtn = document.getElementById('RandomEpisodeBtn');
let seasonIntTxtGlobal = undefined
let watchSeasonLengthOper = undefined

function chnageToSourceTwo(watchSeason, seasonIntTxt, episodeToWatch) {
    getVidPlayer();
    seasonIntTxtGlobal = seasonIntTxt;
    episodeOnBinary = episodeToWatch - 1;
    altStatus = watchSeason[episodeOnBinary]
    vid.src = altStatus.epSrc;
    EpNumberChanger.innerHTML = 'Season: ' + altStatus.SeasonTitleForEpButton + "<br>" + 'Episode: ' + altStatus.epNumber;
    dirStatus = altStatus.status;
    let watchSeasonLengthOper = watchSeason.length;
    vid.onended = function() {
        document.getElementById(altStatus.epNumber + 1 + 'S' + seasonIntTxtGlobal).click();

    };
    if (altStatus.epNumber === watchSeasonLengthOper) {
        vid.onended = function() {
            document.getElementById('Season' + (seasonIntTxtGlobal + 1)).click();
            document.getElementById(1 + 'S' + (seasonIntTxtGlobal + 1)).click();
            console.log('next step');
        }
    }

}

let nextEpBtn = document.getElementById('nextEpisodeButton');
let lastEpBtn = document.getElementById('previousEpisodeButton');

//Previous episode button Function
function previousEp() {
    document.getElementById(altStatus.epNumber - 1 + 'S' + seasonIntTxtGlobal).click();
}

//Next episode button Function
function nextEp() {
    document.getElementById(altStatus.epNumber + 1 + 'S' + seasonIntTxtGlobal).click();
    if (altStatus.epNumber === watchSeasonLengthOper) {
        document.getElementById('Season' + (seasonIntTxtGlobal + 1)).click();
        document.getElementById(1 + 'S' + (seasonIntTxtGlobal + 1)).click();
        console.log('next step');

    }
}

lastEpBtn.addEventListener('click', () => {
    previousEp();
});
nextEpBtn.addEventListener('click', () => {
    nextEp();
});

function RandomEpisodeselector() {
    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let hiddenFruit = undefined
    let abandonHope = undefined
    seasonNumGenerater = getRandomNum(1, 8);
    if (seasonNumGenerater === 1) {
        hiddenFruit = SeasonSelect1;
    } else if (seasonNumGenerater === 2) {
        hiddenFruit = SeasonSelect2;
    } else if (seasonNumGenerater === 3) {
        hiddenFruit = SeasonSelect3;
    } else if (seasonNumGenerater === 4) {
        hiddenFruit = SeasonSelect4;
    } else if (seasonNumGenerater === 5) {
        hiddenFruit = SeasonSelect5;
    } else if (seasonNumGenerater === 6) {
        hiddenFruit = SeasonSelect6;
    } else if (seasonNumGenerater === 7) {
        hiddenFruit = SeasonSelect7;
    } else if (seasonNumGenerater === 8) {
        hiddenFruit = SeasonSelect8;
    }
    episodeNumGenerater = getRandomNum(1, hiddenFruit.length);
    abandonHope = hiddenFruit[episodeNumGenerater].status;
    document.getElementById(abandonHope).click();
}

RandomEpisodeBtn.addEventListener('click', () => {
    RandomEpisodeselector();
});