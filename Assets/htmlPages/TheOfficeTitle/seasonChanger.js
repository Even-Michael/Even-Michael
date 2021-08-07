const Season1 = document.getElementById('Season1');
const Season2 = document.getElementById('Season2');
const Season3 = document.getElementById('Season3');
const Season4 = document.getElementById('Season4');
const Season5 = document.getElementById('Season5');
const Season6 = document.getElementById('Season6');
const Season7 = document.getElementById('Season7');
const Season8 = document.getElementById('Season8');
const Season9 = document.getElementById('Season9');

const episodesSeason1 = document.getElementById('season1Episodes');
const episodesSeason2 = document.getElementById('season2Episodes');
const episodesSeason3 = document.getElementById('season3Episodes');
const episodesSeason4 = document.getElementById('season4Episodes');
const episodesSeason5 = document.getElementById('season5Episodes');
const episodesSeason6 = document.getElementById('season6Episodes');
const episodesSeason7 = document.getElementById('season7Episodes');
const episodesSeason8 = document.getElementById('season8Episodes');
const episodesSeason9 = document.getElementById('season9Episodes');

let currentSeasonOnView = episodesSeason1;
let currentlyActiveSeasonBtn = Season1;
let seasonforVidPlayer = undefined
let episodeforVidPlayer = 01;
let curSeasonOnVid = undefined


if (currentSeasonOnView) {
    currentSeasonOnView.style.display = 'flex';
}


if (currentlyActiveSeasonBtn) {
    currentlyActiveSeasonBtn.style.background = 'white';
    currentlyActiveSeasonBtn.style.color = '#645CFC';
}

function changeSeasonView(seasonForView, seasonBtn, seasonIntForVid) {
    if (seasonForView === currentSeasonOnView || seasonBtn === currentlyActiveSeasonBtn) {} else {
        seasonForView.style.display = 'flex';
        currentSeasonOnView.style.display = 'none';
        seasonBtn.style.background = 'white';
        seasonBtn.style.color = '#645CFC';
        currentlyActiveSeasonBtn.style.background = 'linear-gradient(258.82deg, #FF00F5 -70.15%, #645CFC 53.64%)';
        currentlyActiveSeasonBtn.style.color = 'white';
        // -----------------------------------------------------------
        currentlyActiveSeasonBtn = seasonBtn;
        currentSeasonOnView = seasonForView;
        // -----------------------------------------------------------
        curSeasonOnVid = seasonIntForVid;
        console.log(currentlyActiveSeasonBtn, curSeasonOnVid);
    }

}