let dirStatus = undefined
let altStatus = undefined
let vid = document.getElementById('videoBox');
let EpNumberChanger = document.getElementById("episodeNumber");
let RandomEpisodeBtn = document.getElementById('RandomEpisodeBtn');
let seasonIntTxtGlobal = undefined
let watchSeasonLengthOper = undefined

function chnageToSourceTwo(watchSeason, seasonIntTxt, episodeToWatch) {
    getVidPlayer();
    // seasonIntTxtGlobal = seasonIntTxt;
    // episodeOnBinary = episodeToWatch - 1;
    // altStatus = watchSeason[episodeOnBinary]
    vid.src = "https://disk32.cizgifilmlerizle.com/getvid?evid=6WEXVY5eTLEFebP6cleAO-hDwsW-MP-pJXRpkC5S1NSrYAZq_yog11fhFl6TPYNeIkfHUbou3YcSPxk7TPMXOxL-UwDJK5ssYWu5E1U7tMViGDJzYV58bEGcAbtJUcDro4dUaaYCTcQseAYmR1ZaBjQkm2HyXjVSGY-neejh6n2O9i6ds9La87bfmc0wwqm3yQ5iWaBngRkg1yUlAbIBe2mPNwcLsyQUX9_kvQgFAChI6vWTZw57ifU1PsJ-HmsyLoOTMQDoOyaQVR90HZ2RiFtBG9a3A9E4gbMN3Su_jPY2BAsCJumlh8lCSeSAyG9MZSDaS3ekfxzR0MffnvWZ7SupuhPBug9wqW0te96T6uawIc-OiMANNU6_Z6KDW67pg5GbVymIOqMcbZtQAazW6pGNjy_aLS7k1F8pFQP75bgxGksQIbdQvJAA-uT10rDPiqhCAVqfkO54wAFSJCBtR2G6f-AoujZhYVwTNl7W05Gto1CQdZ9_OW3uZfsQeV0KDiwVZZffkmbxsrfyBPS75kOQ0Sh46SOtPhvmFvommnQ";
    // EpNumberChanger.innerHTML = 'Season: ' + altStatus.SeasonTitleForEpButton + "<br>" + 'Episode: ' + altStatus.epNumber;
    // dirStatus = altStatus.status;
    // let watchSeasonLengthOper = watchSeason.length;
    // vid.onended = function() {
    //     document.getElementById(altStatus.epNumber + 1 + 'S' + seasonIntTxtGlobal).click();

    // };
    // if (altStatus.epNumber === watchSeasonLengthOper) {
    //     vid.onended = function() {
    //         document.getElementById('Season' + (seasonIntTxtGlobal + 1)).click();
    //         document.getElementById(1 + 'S' + (seasonIntTxtGlobal + 1)).click();
    //         console.log('next step');
    //     }
    // }

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