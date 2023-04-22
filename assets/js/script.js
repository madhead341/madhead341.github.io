function deleting() {
  var button = document.getElementById("button_1");
  button.style.display = "none";
  var div = document.getElementById("black-screen");
  div.style.display = "none";
}

function button_1_click() {
  audio.play();
  var div = document.getElementById("black-screen");
  div.style.display = "none";
  deleting();
}

var customCursor = document.createElement("div");
customCursor.classList.add("custom-cursor");
document.body.appendChild(customCursor);

document.addEventListener("mousemove", function(event) {
  customCursor.style.left = event.clientX + "px";
  customCursor.style.top = event.clientY + "px";
});

document.addEventListener("scroll", function() {
  var scrollX = window.scrollX || window.pageXOffset;
  var scrollY = window.scrollY || window.pageYOffset;
  customCursor.style.left = event.clientX + scrollX + "px";
  customCursor.style.top = event.clientY + scrollY + "px";
});

    
    var songs = [
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
      "assets/music/Wesley's Theory - Kendrick Lamar.mp3"
    ];
    var audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
    var currentSongIndex = -1;
    
    function playNextSong() {
      var nextSongIndex = Math.floor(Math.random() * songs.length);
      while (nextSongIndex === currentSongIndex) {
        nextSongIndex = Math.floor(Math.random() * songs.length);
      }
      currentSongIndex = nextSongIndex;
      var nextSong = songs[currentSongIndex];
      audio.src = nextSong;
      audio.play();
    }
    
    audio.addEventListener("ended", playNextSong);
    playNextSong();
  });
};

window.addEventListener("load", function() {
  audio.play();
});
