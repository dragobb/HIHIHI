// Script to handle background music and autoplay restrictions
window.addEventListener('load', function () {
    const audio = document.getElementById('backgroundMusic');
    const musicIcon = document.getElementById('musicIcon');

    // Attempt to play music immediately
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Autoplay successful, update icon to pause
                updateMusicIcon(true);
            })
            .catch((error) => {
                // Autoplay was prevented
                console.log('Autoplay was prevented. User interaction required.', error);
                updateMusicIcon(false);
            });
    }

    // Function to toggle music playback
    window.toggleMusic = function () {
        if (audio.paused) {
            audio.play()
                .then(() => updateMusicIcon(true))
                .catch((error) => {
                    console.error('Error playing audio:', error);
                });
        } else {
            audio.pause();
            updateMusicIcon(false);
        }
    };

    // Function to update the music icon
    function updateMusicIcon(isPlaying) {
        if (isPlaying) {
            musicIcon.classList.remove('fa-play');
            musicIcon.classList.add('fa-pause');
        } else {
            musicIcon.classList.remove('fa-pause');
            musicIcon.classList.add('fa-play');
        }
    }
});