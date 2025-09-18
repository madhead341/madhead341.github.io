document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
});

function setupTooltip(link, address, message) {
    link.classList.add('tooltip-container');

    const hoverTip = document.createElement('div');
    hoverTip.className = 'tooltip-text hover-tip';
    hoverTip.textContent = 'Copy Address';
    link.appendChild(hoverTip);

    link.addEventListener('click', function (e) {
        e.preventDefault();
        navigator.clipboard.writeText(address);

        hoverTip.classList.remove('hover-tip');
        hoverTip.classList.remove('fade-in');
        hoverTip.classList.add('fade-out');

        setTimeout(() => {
            hoverTip.classList.remove('fade-out');
            hoverTip.textContent = message;
            hoverTip.classList.add('fade-in');

            setTimeout(() => {
                hoverTip.classList.remove('fade-in');
                hoverTip.classList.add('fade-out');
                
                setTimeout(() => {
                    hoverTip.classList.remove('fade-out');
                    hoverTip.textContent = 'Copy Address';
                    hoverTip.classList.add('hover-tip');
                }, 300);
            }, 3000);
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupTooltip(
        document.getElementById('litecoin-link'),
        'Lff4hzFG7GSm4jPogS5J2chx3Dd1Ufgr9X',
        'Litecoin address copied!'
    );
    setupTooltip(
        document.getElementById('bitcoin-link'),
        'bc1qec2mw3zcs0ke8dg3q4pv0pvzqyvxpjuec5xctl',
        'Bitcoin address copied!'
    );
});

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let followerX = mouseX;
let followerY = mouseY;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animate() {
    followerX += (mouseX - followerX) * 0.05;
    followerY += (mouseY - followerY) * 0.05;

    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';

    requestAnimationFrame(animate);
}

animate();

function createSnowDot() {
    const dot = document.createElement('div');
    dot.className = 'snow-dot';
    const size = Math.random() * 3 + 4;
    dot.style.width = dot.style.height = size + 'px';
    dot.style.left = (Math.random() * window.innerWidth) + 'px';
    dot.style.top = '-10px';
    dot.style.opacity = (Math.random() * 0.4 + 0.6).toFixed(2);
    dot.style.filter = `blur(${Math.random()*1.5+0.7}px)`;
    document.body.appendChild(dot);

    let y = -10, x = parseFloat(dot.style.left);
    const speed = Math.random() * 0.7 + 0.6;
    const drift = (Math.random() - 0.5) * 0.6;
    function fall() {
        y += speed;
        x += drift * Math.sin(y/30);
        dot.style.transform = `translate(${x - parseFloat(dot.style.left)}px, ${y}px)`;
        if (y < window.innerHeight + 12) {
            requestAnimationFrame(fall);
        } else {
            dot.remove();
        }
    }
    fall();
}
let snowInterval = null;
function startSnow() {
    if (!snowInterval) {
        snowInterval = setInterval(() => {
            for (let i = 0; i < 2; ++i) createSnowDot();
        }, 180);
    }
}
function stopSnow() {
    if (snowInterval) {
        clearInterval(snowInterval);
        snowInterval = null;
    }
}
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopSnow();
    } else {
        startSnow();
    }
});
startSnow();

const songs = [
    'Kills - Chief Keef',
    'ss - Ken Carson',
    '55 Lifestyle - Homixide Gang',
    'FOMDJ - Playboi Carti',
    'HEATHER - Kyle Richh and a lot of other dudes',
    'LIKE WEEZY - Playboi Carti',
    'OLYMPIAN - Playboi Carti',
    'R.I.P. - Playboi Carti',
    'True Religion Fein - Chief Keef',
    'Uzi Work - Homixide Gang',
    'if looks could kill - Destroy Lonely'
];

let playing = false;
let history = [];
let historyIndex = -1;
let currentSong = null;
let appInitialized = false;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const barFill = document.getElementById('barFill');
const current = document.getElementById('current');
const duration = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function loadTrack(songName) {
    const [t, a] = songName.split(' - ');
    title.textContent = t;
    artist.textContent = a;
    cover.src = `https://github.com/madhead341/madhead341.github.io/raw/refs/heads/main/bio/music/covers/${songName}.jpg`;
    audio.src = `https://github.com/madhead341/madhead341.github.io/raw/refs/heads/main/bio/music/${songName}.mp3`;
    barFill.style.width = '0%';
    current.textContent = '0:00';
    duration.textContent = '0:00';
}

function playTrack(songName) {
    loadTrack(songName);
    setTimeout(() => {
        audio.play();
        playBtn.textContent = '⏸';
        playing = true;
    }, 100);
}

function getRandomSong(excludeList = []) {
    const available = songs.filter(s => !excludeList.includes(s));
    if (available.length === 0) return songs[Math.floor(Math.random() * songs.length)];
    return available[Math.floor(Math.random() * available.length)];
}

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        barFill.style.width = (audio.currentTime / audio.duration) * 100 + '%';
        current.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    }
});

playBtn.addEventListener('click', () => {
    if (!appInitialized) return;
    
    if (playing) {
        audio.pause();
        playBtn.textContent = '▶';
    } else {
        audio.play();
        playBtn.textContent = '⏸';
    }
    playing = !playing;
});

nextBtn.addEventListener('click', () => {
    if (!appInitialized) return;
    
    if (historyIndex < history.length - 1) {
        historyIndex++;
        currentSong = history[historyIndex];
        playTrack(currentSong);
    } else {
        let nextSong = getRandomSong(history);
        history.push(nextSong);
        historyIndex = history.length - 1;
        currentSong = nextSong;
        playTrack(nextSong);
    }
});

prevBtn.addEventListener('click', () => {
    if (!appInitialized) return;
    
    if (audio.currentTime > 3 || historyIndex <= 0) {
        audio.currentTime = 0;
    } else {
        historyIndex--;
        currentSong = history[historyIndex];
        playTrack(currentSong);
    }
});

function updateVolumeSliderBg() {
    const val = parseFloat(volumeSlider.value);
    const percent = val * 100;
    volumeSlider.style.backgroundImage =
        `linear-gradient(to right, #fff 0%, #fff ${percent}%, #333 ${percent}%, #333 100%)`;
}
volumeSlider.addEventListener('input', () => {
    if (!appInitialized) return;
    audio.volume = volumeSlider.value;
    updateVolumeSliderBg();
});
updateVolumeSliderBg();

audio.volume = 0.35;
volumeSlider.value = 0.35;
updateVolumeSliderBg();

audio.addEventListener('ended', () => {
    if (appInitialized) {
        nextBtn.click();
    }
});

function initializeApp() {
    const overlay = document.getElementById('enterOverlay');
    const mainContent = document.getElementById('mainContent');
    
    if (typeof overlaySnowInterval !== 'undefined') {
        clearInterval(overlaySnowInterval);
    }
    
    overlay.classList.add('fade-out');
    
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.style.display = 'flex';
        let firstSong = getRandomSong();
        history = [firstSong];
        historyIndex = 0;
        currentSong = firstSong;
        appInitialized = true;
        
        playTrack(firstSong);
    }, 600);
}

document.getElementById('enterOverlay').addEventListener('click', initializeApp);

const apiKeys = [
    "738dbad9426ca82ac1c285f36de6d7c9",
    "8824fa5041d7a915cdae80442cb5f34f"
];
let apiKeyIndex = 0;
const userId = "1412174644458557583";
const avatar = document.getElementById('avatar');
const usernameEl = document.getElementById('username');
const statusRing = document.getElementById('statusRing');
const profileTooltip = document.getElementById('profileTooltip');
const profilePicWrapper = document.getElementById('profilePicWrapper');

const statusColors = {
    online: "#43b581",
    dnd: "#f04747",
    idle: "#faa61a",
    offline: "#747f8d"
};
const statusText = {
    online: "Online",
    dnd: "Do Not Disturb",
    idle: "Idle",
    offline: "Offline"
};

const spotifyGreen = "#1db954";

function setTooltip(text, color) {
    profileTooltip.innerHTML = text;
    if (color) profileTooltip.style.color = color;
    else profileTooltip.style.color = "#fff";
}

function getGeneralActivity(activities) {
    for (const act of activities) {
        if (act.type === 2 && act.name === "Spotify") {
            return { text: `Listening to Spotify`, color: spotifyGreen };
        }
        if (act.type === 0 && act.name === "Visual Studio Code") {
            return { text: `Playing Visual Studio Code`, color: null };
        }
        if (act.type === 0 && act.name) {
            return { text: `Playing ${act.name}`, color: null };
        }
    }
    return null;
}

async function updateProfile() {
    const apiKey = apiKeys[apiKeyIndex];
    apiKeyIndex = (apiKeyIndex + 1) % apiKeys.length;
    try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
            headers: { "Authorization": apiKey }
        });
        const data = await res.json();
        if (!data.success) return;
        const user = data.data.discord_user;
        avatar.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
        usernameEl.textContent = user.display_name || user.username;

        let status = data.data.discord_status;
        if (!statusColors[status]) status = "offline";
        statusRing.setAttribute("stroke", statusColors[status]);

        let tooltip = statusText[status];
        let tooltipColor = null;

        const activities = data.data.activities || [];
        const general = getGeneralActivity(activities);
        if (general) {
            tooltip = general.text;
            tooltipColor = general.color;
        }
        setTooltip(tooltip, tooltipColor);
    } catch (e) {
        statusRing.setAttribute("stroke", statusColors.offline);
        setTooltip(statusText.offline);
    }
}

profilePicWrapper.addEventListener('mouseenter', () => {
    profileTooltip.style.opacity = 1;
});
profilePicWrapper.addEventListener('mouseleave', () => {
    profileTooltip.style.opacity = 0;
});

updateProfile();
setInterval(updateProfile, 3750);

const bioEl = document.getElementById('bio');
const biotext = [
    "I like computers",
    "Self-taught programmer",
    "Computer sience and communcitation student",
    "Certified skid",
    "! LO$R",
    "I build stuff",
    "Probably coding stupid stuff",
    "ctrl+c / ctrl+v enthusiast"
];
let lastBioIndex = -1;

function pickBio() {
    let idx;
    do { idx = Math.floor(Math.random() * biotext.length); }
    while (idx === lastBioIndex && biotext.length > 1);
    lastBioIndex = idx;
    return biotext[idx];
}

async function animateBio() {
    while (true) {
        const text = pickBio();
        for (let i = 1; i <= text.length; ++i) {
            bioEl.textContent = text.slice(0, i);
            await new Promise(r => setTimeout(r, 28 + Math.random()*32));
        }
        await new Promise(r => setTimeout(r, 3000));
        for (let i = text.length; i >= 0; --i) {
            bioEl.textContent = text.slice(0, i);
            await new Promise(r => setTimeout(r, 22 + Math.random()*18));
        }
        await new Promise(r => setTimeout(r, 350));
    }
}
animateBio();

function createEnhancedSnowDot() {
    const dot = document.createElement('div');
    dot.className = 'snow-dot';
    const size = Math.random() * 2 + 3;
    dot.style.width = dot.style.height = size + 'px';
    dot.style.left = (Math.random() * window.innerWidth) + 'px';
    dot.style.top = '-10px';
    dot.style.opacity = (Math.random() * 0.3 + 0.4).toFixed(2);
    dot.style.filter = `blur(${Math.random()*1+0.5}px)`;
    document.getElementById('snowDots').appendChild(dot);

    let y = -10, x = parseFloat(dot.style.left);
    const speed = Math.random() * 0.5 + 0.4;
    const drift = (Math.random() - 0.5) * 0.4;
    
    function fall() {
        y += speed;
        x += drift * Math.sin(y/40);
        dot.style.transform = `translate(${x - parseFloat(dot.style.left)}px, ${y}px)`;
        if (y < window.innerHeight + 12) {
            requestAnimationFrame(fall);
        } else {
            dot.remove();
        }
    }
    fall();
}

let overlaySnowInterval = setInterval(() => {
    if (document.getElementById('enterOverlay').style.display !== 'none') {
        createEnhancedSnowDot();
    }
}, 300);

document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('enterOverlay');
    if (overlay.style.display !== 'none' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        initializeApp();
    }
});
