
var siteWrapper = document.querySelector(".site-wrapper");
var loadingScreen = document.querySelector(".loading-screen");
siteWrapper.style.filter = "blur(10px)";
loadingScreen.style.display = "flex";


var customCursor = document.createElement("div");
customCursor.classList.add("custom-cursor");
document.body.appendChild(customCursor);


document.addEventListener("mousemove", function(event) {
  customCursor.style.left = event.clientX + "px";
  customCursor.style.top = event.clientY + "px";
});


document.querySelector('.loading-screen').addEventListener('click', function() {
  document.querySelector('.loading-screen').style.display = 'none';
});


const songs = [
  "assets/music/Cant Trust - Keef Chief.mp3",
  "assets/music/Control - Ab-Soul.mp3",
  "assets/music/DNA - Kendrick Lamar.mp3",
  "assets/music/Everyday - Chief Keef.mp3",
  "assets/music/Geeked (Bass Boosted) - CHII WVTTZ + Set Da Trend + C Blu + Dougie B.mp3",
  "assets/music/Get Out - Comethazine.mp3",
  "assets/music/Go Stupid - Polo G.mp3",
  "assets/music/I Don't Like - Chief Keef.mp3",
  "assets/music/In Control - Youngboy Never Broke Again.mp3",
  "assets/music/Love Sosa - Chief Keef.mp3",
  "assets/music/M.A.A.D. City - Kendrick Lamar.mp3",
  "assets/music/Make No Sense - Youngboy Never Broke Again.mp3",
  "assets/music/Monster - Kanye West.mp3",
  "assets/music/Only You Freestyle - Headie One.mp3",
  "assets/music/Sawarim - idk the author.mp3",
  "assets/music/Sosa - Chief Keef.mp3",
  "assets/music/Spinback - Comethazine.mp3",
  "assets/music/Still Ballin' (Remix) - 2Pac.mp3",
  "assets/music/True Religion Fein - Chief Keef.mp3",
  "assets/music/Walk - Comethanize.mp3",
  "assets/music/Wesley's Theory - Kendrick Lamar.mp3",
];


var randomIndex = Math.floor(Math.random() * songs.length);
var randomSong = songs[randomIndex];

var audio = document.getElementById('audio');
audio.src = randomSong;

document.addEventListener("click", function() {
  audio.play();
  audio.loop = true;
});

audio.onended = function() {
  
  var newIndex = Math.floor(Math.random() * songs.length);
  var newSong = songs[newIndex];
  
  audio.src = newSong;
  
  audio.oncanplay = function() {
    document.addEventListener("click", function() {
      audio.play();
      audio.loop = true;
    });
  };
};
