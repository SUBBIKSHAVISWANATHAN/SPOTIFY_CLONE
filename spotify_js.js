// // Placeholder for music player functionality
// const playButton = document.querySelector('.controls button:nth-child(2)');

// playButton.addEventListener('click', () => {
//     alert('Play button clicked!');
// });

function playSong(song, title, artist, cover) {
    // Set the audio source
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = 'assets/' + song;
    audioPlayer.play();

    // Update song details
    document.getElementById('current-song-title').innerText = title;
    document.getElementById('current-artist-name').innerText = artist;
    document.getElementById('current-song-cover').src = cover;
}

// List of songs
const songs = [
    {
        src: 'assets/song1.mp3',
        cover: 'assets/image1.jpg',
        title: 'Song Title 1',
        artist: 'Artist Name 1'
    },
    {
        src: 'assets/song2.mp3',
        cover: 'assets/image2.jpg',
        title: 'Song Title 2',
        artist: 'Artist Name 2'
    },
    {
        src: 'assets/song3.mp3',
        cover: 'assets/image3.jpg',
        title: 'Song Title 3',
        artist: 'Artist Name 3'
    }
];

let currentSongIndex = 0; // Start with the first song
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function loadSong(index) {
    const song = songs[index];
   audioPlayer.src = song.src;
    document.getElementById('current-song-cover').src = song.cover;
    document.getElementById('current-song-title').textContent = song.title;
    document.getElementById('current-artist-name').textContent = song.artist;
    audioPlayer.load(); // Load the new song
    audioPlayer.play(); // Start playing the new song
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = '⏸️'; // Change to pause icon
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = '⏯️'; // Change to play icon
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the start
    loadSong(currentSongIndex);
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop back to the end
    loadSong(currentSongIndex);
}

// Event Listeners
playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

// Initialize with the first song
loadSong(currentSongIndex);
