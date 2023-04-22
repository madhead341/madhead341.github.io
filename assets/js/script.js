var siteWrapper = document.querySelector(".site-wrapper");
var loadingScreen = document.querySelector(".loading-screen");
siteWrapper.style.filter = "blur(10px)";
loadingScreen.style.display = "flex";

var customCursor = document.createElement("div");
customCursor.classList.add("custom-cursor");
document.body.appendChild(customCursor);

// Update cursor position on mousemove
document.addEventListener("mousemove", function(event) {
  customCursor.style.left = event.clientX + "px";
  customCursor.style.top = event.clientY + "px";
});

// Update cursor position on scroll
document.addEventListener("scroll", function() {
  var scrollX = window.scrollX || window.pageXOffset;
  var scrollY = window.scrollY || window.pageYOffset;
  customCursor.style.left = event.clientX + scrollX + "px";
  customCursor.style.top = event.clientY + scrollY + "px";
});

var songs = [
  "Cant Trust - Keef Chief.mp3",
  "Control - Ab-Soul.mp3",
  "DNA - Kendrick Lamar.mp3",
  "Everyday - Chief Keef.mp3",
  "Geeked (Bass Boosted) - CHII WVTTZ + Set Da Trend + C Blu + Dougie B.mp3",
  "Get Out - Comethazine.mp3",
  "Go Stupid - Polo G.mp3",
  "I Don't Like - Chief Keef.mp3",
  "In Control - Youngboy Never Broke Again.mp3",
  "Love Sosa - Chief Keef.mp3",
  "M.A.A.D. City - Kendrick Lamar.mp3",
  "Make No Sense - Youngboy Never Broke Again.mp3",
  "Monster - Kanye West.mp3",
  "Only You Freestyle - Headie One.mp3",
  "Sawarim - idk the author.mp3",
  "Sosa - Chief Keef.mp3",
  "Spinback - Comethazine.mp3",
  "Still Ballin' (Remix) - 2Pac.mp3",
  "True Religion Fein - Chief Keef.mp3",
  "Walk - Comethanize.mp3",
  "Wesley's Theory - Kendrick Lamar.mp3",
]
var random_song = songs[Math.floor(Math.random() * songs.length)];
var path = "/assets/music/" + random_song;
var audio = new Audio(path);
audio.loop = true;
audio.preload = "auto";
changeTitle();

window.addEventListener("load", function() {
  audio.play();
});
