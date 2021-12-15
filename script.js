window.addEventListener(
    "keydown",
    function(event){
        if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1){
            event.preventDefault();
        }
    },
    false
);
let songArray = [
    "audio/The Beatles - Back in the U.S.S.R..mp3",
    "audio/The Beatles - Dear Prudence.mp3",
    "audio/The Beatles - Glass Onion.mp3",
    "audio/The Beatles - Ob-La-Di, Ob-La-Da.mp3",
    "audio/The Beatles - Wild Honey Pie.mp3",
    "audio/The Beatles - The Continuing Story of Bungalow Bill.mp3",
    "audio/The Beatles - While My Guitar Gently Weeps.mp3",
    "audio/The Beatles - Happiness Is a Warm Gun.mp3",
    "audio/The Beatles - Martha My Dear.mp3",
    "audio/The Beatles - I'm So Tired.mp3",
    "audio/The Beatles - Blackbird.mp3",
    "audio/The Beatles - Piggies.mp3",
    "audio/The Beatles - Rocky Raccoon.mp3",
    "audio/The Beatles - Don't Pass Me By.mp3",
    "audio/The Beatles - Why Don't We Do It in the Road.mp3",
    "audio/The Beatles - I Will.mp3",
    "audio/The Beatles - Julia.mp3",
    "audio/The Beatles - Birthday.mp3",
    "audio/The Beatles - Yer Blues.mp3",
    "audio/The Beatles - Mother Nature's Son.mp3",
    "audio/The Beatles - Everybody's Got Something to Hide Except Me and My Monkey.mp3",
    "audio/The Beatles - Sexy Sadie.mp3",
    "audio/The Beatles - Helter Skelter.mp3",
    "audio/The Beatles - Long, Long, Long.mp3",
    "audio/The Beatles - Revolution 1.mp3",
    "audio/The Beatles - Honey Pie.mp3",
    "audio/The Beatles - Savoy Truffle.mp3",
    "audio/The Beatles - Cry Baby Cry.mp3",
    "audio/The Beatles - Revolution 9.mp3",
    "audio/The Beatles - Good Night.mp3"
];

let currentSong = 0;
let song = new Audio();
window.onload = function(){
    playSong();
};

function playSong() {
    song.src = songArray[currentSong];
    document.getElementById("title").textContent = songArray[currentSong].slice(20, -4);
}

function playOrPause() {
    if (song.paused) {
        song.play();
        document.getElementById("play").src = "images/pause.png";
    } else {
        song.pause();
        document.getElementById("play").src = "images/play.png";
    }
}

song.addEventListener("timeupdate", function() {
    convertTime(song.currentTime);
    if (song.ended) {
        next();
    }
});

function convertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("currentTime").textContent = min + ":" + sec;
    totalTime(Math.floor(song.duration));
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("currentTime").textContent += " / " + min + ":" + sec;
}

function next() {
    currentSong++;
    if (currentSong >= songArray.length) {
        currentSong = 0;
    }
    playSong();
    song.play();
    document.getElementById("play").src = "images/pause.png";
}

function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songArray.length - 1;
    }
    playSong();
    song.play();
    document.getElementById("play").src = "images/pause.png";
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 39) {
        next();
    } else if (event.keyCode === 37) {
        prev();;
    } else if (
        event.keyCode === 32
    ) {
        playOrPause();
    }
});

document.getElementById("volumeSlider").addEventListener("mousemove", setvolume);

function setvolume() {
    song.volume = document.getElementById("volumeSlider").value / 100;
}


