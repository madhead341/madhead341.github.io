const songs = [
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
  "assets/music/Wesley's Theory - Kendrick Lamar.mp3",
];


// Get a random song from the array
var randomIndex = Math.floor(Math.random() * songs.length);
var randomSong = songs[randomIndex];

// Create a new audio element and set its source to the random song
var audio = document.getElementById('audio');
audio.src = randomSong;

// Play the audio when it's loaded and loop it
audio.oncanplay = function() {
  audio.play();
  audio.loop = true;
};

// Play the next song when the current one ends
audio.onended = function() {
  // Get a new random song from the array
  var newIndex = Math.floor(Math.random() * songs.length);
  var newSong = songs[newIndex];
  // Set the source of the audio element to the new song
  audio.src = newSong;
  // Play the audio when it's loaded and loop it
  audio.oncanplay = function() {
    audio.play();
    audio.loop = true;
  };
};
